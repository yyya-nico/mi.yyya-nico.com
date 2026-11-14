/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import type { QRCodeOptions, QRCodeSVGOptions, CornerOptions } from 'etiket/qr';

const qrCornerOptions: CornerOptions = {
	outerShape: 'extra-rounded',
	innerShape: 'dots',
};

export const qrOptions: QRCodeOptions & QRCodeSVGOptions = {
	margin: 0,
	size: 300,
	color: 'currentColor',
	dotType: 'dots',
	corners: {
		topLeft: qrCornerOptions,
		topRight: qrCornerOptions,
		bottomLeft: qrCornerOptions,
	},
};
