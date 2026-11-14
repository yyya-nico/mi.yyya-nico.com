/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { createApp, defineComponent } from 'vue';
import { preferState } from '../setup.unit.js';
import { getUploadName, useUploader } from '@/composables/use-uploader.js';

const mocks = vi.hoisted(() => ({
	compress: vi.fn(),
	isAnimated: vi.fn(),
	uploadFile: vi.fn(),
}));

vi.mock('@misskey-dev/browser-image-resizer', () => ({ readAndCompressImage: mocks.compress }));
vi.mock('is-file-animated', () => ({ default: mocks.isAnimated }));
vi.mock('@/utility/isWebpSupported.js', () => ({ isWebpSupported: () => false }));
vi.mock('@/os.js', () => ({}));
vi.mock('@/utility/drive.js', () => ({ uploadFile: mocks.uploadFile, UploadAbortedError: class extends Error {} }));

let unmount: (() => void) | undefined;

beforeEach(() => {
	vi.clearAllMocks();
	Object.assign(preferState, {
		keepOriginalFilename: true,
		defaultImageCompressionLevel: 2,
		uploadFolder: null,
		// Legacy settings must never apply a watermark to new uploads.
		defaultWatermarkPresetId: 'legacy',
		watermarkPresets: [{ id: 'legacy', layers: [{ type: 'text', text: 'watermark' }] }],
	});
	mocks.isAnimated.mockResolvedValue(false);
	mocks.uploadFile.mockReturnValue({ filePromise: Promise.resolve({ id: 'uploaded' }), abort: vi.fn() });
});

afterEach(() => {
	unmount?.();
	unmount = undefined;
});

function createUploader() {
	let uploader!: ReturnType<typeof useUploader>;
	const app = createApp(defineComponent({
		setup() {
			uploader = useUploader();
			return () => null;
		},
	}));
	app.mount(document.createElement('div'));
	unmount = () => app.unmount();
	return uploader;
}

describe('Image uploads after removing image editing', () => {
	test('compresses and uploads images without applying legacy presets', async () => {
		const original = new File(['original image'], 'image.png', { type: 'image/png' });
		const compressed = new Blob(['small'], { type: 'image/jpeg' });
		mocks.compress.mockResolvedValue(compressed);
		const uploader = createUploader();
		uploader.addFiles([original]);
		await vi.waitFor(() => expect(uploader.readyForUpload.value).toBe(true));

		expect(mocks.compress).toHaveBeenCalledWith(original, expect.objectContaining({ maxWidth: 1500, maxHeight: 1500 }));
		expect(getUploadName(uploader.items.value[0])).toBe('image.png.jpg');
		await uploader.upload();
		expect(mocks.uploadFile).toHaveBeenCalledWith(compressed, expect.objectContaining({ name: 'image.png.jpg' }));
	});

	test.each(['compression disabled', 'animated image', 'compression increases size'])(
		'%s uploads the original image', async (condition) => {
			const original = new File(['image'], 'image.png', { type: 'image/png' });
			preferState.defaultImageCompressionLevel = condition === 'compression disabled' ? 0 : 2;
			mocks.isAnimated.mockResolvedValue(condition === 'animated image');
			mocks.compress.mockResolvedValue(new Blob(['larger than original'], { type: 'image/jpeg' }));
			const uploader = createUploader();
			uploader.addFiles([original]);
			await vi.waitFor(() => expect(uploader.readyForUpload.value).toBe(true));
			await uploader.upload();
			expect(mocks.uploadFile).toHaveBeenCalledWith(original, expect.objectContaining({ name: 'image.png' }));
			if (condition !== 'compression increases size') expect(mocks.compress).not.toHaveBeenCalled();
		},
	);
});
