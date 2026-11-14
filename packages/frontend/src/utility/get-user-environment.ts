/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export type UserEnvironment = {
	os: string;
	browser: string;
	userAgent: string;
	screenWidth: number;
	screenHeight: number;
	viaGetHighEntropyValues: true;
} | {
	userAgent: string;
	screenWidth: number;
	screenHeight: number;
	viaGetHighEntropyValues: false;
};

// Only model the Client Hints fields used here; requested values may be withheld.
// https://wicg.github.io/ua-client-hints/#dom-navigatoruadata-gethighentropyvalues
type HighEntropyUserAgentValues = {
	platform: string;
	platformVersion?: string;
	fullVersionList?: { brand: string; version: string }[];
};

type UserAgentData = {
	getHighEntropyValues(hints: string[]): Promise<HighEntropyUserAgentValues>;
};

function supportsHighEntropyValues(value: unknown): value is UserAgentData {
	return typeof value === 'object' && value !== null &&
		'getHighEntropyValues' in value && typeof value.getHighEntropyValues === 'function';
}

export async function getUserEnvironment(): Promise<UserEnvironment> {
	const userAgentData = 'userAgentData' in navigator ? navigator.userAgentData : null;
	if (supportsHighEntropyValues(userAgentData)) {
		try {
			const uaData = await userAgentData.getHighEntropyValues([
				'fullVersionList',
				'platformVersion',
			]);

			if (!uaData.platform || !uaData.platformVersion || !uaData.fullVersionList) return getViaUa();

			let osVersion = 'v' + uaData.platformVersion;

			if (uaData.platform === 'Windows') {
				// https://learn.microsoft.com/ja-jp/microsoft-edge/web-platform/how-to-detect-win11
				const majorPlatformVersion = parseInt(uaData.platformVersion.split('.')[0]);
				if (majorPlatformVersion >= 13) {
					osVersion = '11 or later';
				} else if (majorPlatformVersion > 0) {
					osVersion = '10';
				} else {
					osVersion = '8.1 or earlier';
				}
			}

			const browserData = uaData.fullVersionList.find(item => !/^\s*not.+a.+brand\s*$/i.test(item.brand));
			return {
				os: `${uaData.platform} ${osVersion}`,
				browser: browserData ? `${browserData.brand} v${browserData.version}` : 'Unknown',
				userAgent: navigator.userAgent,
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
				viaGetHighEntropyValues: true,
			};
		} catch {
			return getViaUa();
		}
	} else {
		return getViaUa();
	}
}

function getViaUa(): UserEnvironment {
	return {
		userAgent: navigator.userAgent,
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
		viaGetHighEntropyValues: false,
	};
}
