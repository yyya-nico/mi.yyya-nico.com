/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { afterEach, describe, expect, test, vi } from 'vitest';
import { getUserEnvironment } from '@/utility/get-user-environment.js';

const original = Object.getOwnPropertyDescriptor(navigator, 'userAgentData');

afterEach(() => {
	if (original) {
		Object.defineProperty(navigator, 'userAgentData', original);
	} else {
		Reflect.deleteProperty(navigator, 'userAgentData');
	}
});

function setUserAgentData(value: unknown) {
	Object.defineProperty(navigator, 'userAgentData', { configurable: true, value });
}

const fallback = () => ({
	userAgent: navigator.userAgent,
	screenWidth: window.innerWidth,
	screenHeight: window.innerHeight,
	viaGetHighEntropyValues: false,
});

describe('User environment', () => {
	test('uses the normal User-Agent when Client Hints is absent', async () => {
		Reflect.deleteProperty(navigator, 'userAgentData');
		expect(await getUserEnvironment()).toEqual(fallback());
	});

	test.each([null, undefined, {}, { getHighEntropyValues: 'not a function' }])(
		'uses the normal User-Agent when Client Hints cannot be called: %j', async (data) => {
			setUserAgentData(data);
			expect(await getUserEnvironment()).toEqual(fallback());
		},
	);

	test.each([
		['0.1.0', 'Windows 8.1 or earlier'],
		['10.0.0', 'Windows 10'],
		['13.0.0', 'Windows 11 or later'],
	])('reads Windows %s and the actual browser brand', async (platformVersion, os) => {
		const data = {
			getHighEntropyValues: vi.fn(async function (this: unknown) {
				expect(this).toBe(data);
				return {
					platform: 'Windows', platformVersion,
					fullVersionList: [
						{ brand: 'Not A Brand', version: '99' },
						{ brand: 'Test Browser', version: '123.4' },
					],
				};
			}),
		};
		setUserAgentData(data);
		expect(await getUserEnvironment()).toEqual({ ...fallback(), os, browser: 'Test Browser v123.4', viaGetHighEntropyValues: true });
		expect(data.getHighEntropyValues).toHaveBeenCalledWith(['fullVersionList', 'platformVersion']);
	});

	test('reads non-Windows platform versions and tolerates an empty brand list', async () => {
		setUserAgentData({ getHighEntropyValues: async () => ({ platform: 'Linux', platformVersion: '6.1', fullVersionList: [] }) });
		expect(await getUserEnvironment()).toEqual({ ...fallback(), os: 'Linux v6.1', browser: 'Unknown', viaGetHighEntropyValues: true });
	});

	test('falls back when high-entropy retrieval is rejected', async () => {
		setUserAgentData({ getHighEntropyValues: vi.fn().mockRejectedValue(new Error('Denied')) });
		expect(await getUserEnvironment()).toEqual(fallback());
	});

	test.each([
		{ platform: 'Windows' },
		{ platform: 'Windows', platformVersion: '13.0' },
		{ platform: 'Windows', platformVersion: '', fullVersionList: [] },
	])('falls back when the browser withholds requested fields: %j', async (values) => {
		setUserAgentData({ getHighEntropyValues: async () => values });
		expect(await getUserEnvironment()).toEqual(fallback());
	});
});
