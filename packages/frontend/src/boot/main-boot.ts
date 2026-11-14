/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { createApp, defineAsyncComponent, markRaw } from 'vue';
import { compareVersions } from 'compare-versions';
import { common } from './common.js';
import type { Keymap } from '@/utility/hotkey.js';
import { i18n } from '@/i18n.js';
import { alert, confirm, popup, post } from '@/os.js';
import { useStream } from '@/stream.js';
import { $i } from '@/i.js';
import { instance } from '@/instance.js';
import { store } from '@/store.js';
import { reactionPicker } from '@/utility/reaction-picker.js';
import { miLocalStorage } from '@/local-storage.js';
import { initializeSw } from '@/utility/initialize-sw.js';
import { emojiPicker } from '@/utility/emoji-picker.js';
import { mainRouter } from '@/router.js';
import { makeHotkey } from '@/utility/hotkey.js';
import { addCustomEmoji, removeCustomEmojis, updateCustomEmojis } from '@/custom-emojis.js';
import { prefer } from '@/preferences.js';
import { updateCurrentAccount } from '@/accounts.js';
import { unisonReload } from '@/utility/unison-reload.js';

export async function mainBoot() {
	const { isClientUpdated, lastVersion } = await common(async () => {
		const rootComponent = $i
			? await import('@/ui/universal.vue').then(x => x.default)
			: await import('@/ui/visitor.vue').then(x => x.default);

		return createApp(rootComponent);
	});

	reactionPicker.init();
	emojiPicker.init();

	if (isClientUpdated && $i) {
		const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkUpdated.vue')), {}, {
			closed: () => dispose(),
		});
	}

	try {
		if (prefer.s.enableSeasonalScreenEffect) {
			const month = new Date().getMonth() + 1;
			if (prefer.s.hemisphere === 'S') {
				// ▼南半球
				if (month === 7 || month === 8) {
					const SnowfallEffect = (await import('@/utility/snowfall-effect.js')).SnowfallEffect;
					new SnowfallEffect({}).render();
				}
			} else {
				// ▼北半球
				if (month === 12 || month === 1) {
					const SnowfallEffect = (await import('@/utility/snowfall-effect.js')).SnowfallEffect;
					new SnowfallEffect({}).render();
				} else if (month === 3 || month === 4) {
					const SakuraEffect = (await import('@/utility/snowfall-effect.js')).SnowfallEffect;
					new SakuraEffect({
						sakura: true,
					}).render();
				}
			}
		}
	} catch (error) {
		// console.error(error);
		console.error('Failed to initialise the seasonal screen effect canvas context:', error);
	}

	if ($i) {
		store.loaded.then(async () => {
			if (store.s.accountSetupWizard !== -1) {
				const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkUserSetupDialog.vue')), {}, {
					closed: () => dispose(),
				});
			}
		});

		if ($i.isDeleted) {
			alert({
				type: 'warning',
				text: i18n.ts.accountDeletionInProgress,
			});
		}

		const createdAt = new Date($i.createdAt);
		const latestDonationInfoShownAt = miLocalStorage.getItem('latestDonationInfoShownAt');
		const neverShowDonationInfo = miLocalStorage.getItem('neverShowDonationInfo');
		if (neverShowDonationInfo !== 'true' && (createdAt.getTime() < (Date.now() - (1000 * 60 * 60 * 24 * 3))) && !window.location.pathname.startsWith('/miauth')) {
			if (latestDonationInfoShownAt == null || (new Date(latestDonationInfoShownAt).getTime() < (Date.now() - (1000 * 60 * 60 * 24 * 30)))) {
				const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkDonation.vue')), {}, {
					closed: () => dispose(),
				});
			}
		}

		const modifiedVersionMustProminentlyOfferInAgplV3Section13Read = miLocalStorage.getItem('modifiedVersionMustProminentlyOfferInAgplV3Section13Read');
		if (modifiedVersionMustProminentlyOfferInAgplV3Section13Read !== 'true' && instance.repositoryUrl !== 'https://github.com/misskey-dev/misskey') {
			const { dispose } = popup(defineAsyncComponent(() => import('@/components/MkSourceCodeAvailablePopup.vue')), {}, {
				closed: () => dispose(),
			});
		}

		if (store.s.realtimeMode) {
			const stream = useStream();

			let reloadDialogShowing = false;
			stream.on('_disconnected_', async () => {
				if (prefer.s.serverDisconnectedBehavior === 'reload') {
					window.location.reload();
				} else if (prefer.s.serverDisconnectedBehavior === 'dialog') {
					if (reloadDialogShowing) return;
					reloadDialogShowing = true;
					const { canceled } = await confirm({
						type: 'warning',
						title: i18n.ts.disconnectedFromServer,
						text: i18n.ts.reloadConfirm,
					});
					reloadDialogShowing = false;
					if (!canceled) {
						window.location.reload();
					}
				}
			});

			stream.on('emojiAdded', emojiData => {
				addCustomEmoji(emojiData.emoji);
			});

			stream.on('emojiUpdated', emojiData => {
				updateCustomEmojis(emojiData.emojis);
			});

			stream.on('emojiDeleted', emojiData => {
				removeCustomEmojis(emojiData.emojis);
			});

			const main = markRaw(stream.useChannel('main', null, 'System'));

			// 自分の情報が更新されたとき
			main.on('meUpdated', i => {
				updateCurrentAccount(i);
			});

			main.on('readAllNotifications', () => {
				updateCurrentAccount({
					hasUnreadNotification: false,
					unreadNotificationsCount: 0,
				});
			});

			main.on('unreadNotification', () => {
				const unreadNotificationsCount = ($i?.unreadNotificationsCount ?? 0) + 1;
				updateCurrentAccount({
					hasUnreadNotification: true,
					unreadNotificationsCount,
				});
			});
		}
	}

	// shortcut
	let safemodeRequestCount = 0;
	let safemodeRequestTimer: number | null = null;
	const keymap = {
		'p|n': () => {
			if ($i == null) return;
			post();
		},
		'd': async () => {
			const value = !store.s.darkMode;
			if (prefer.s.syncDeviceDarkMode) {
				const { canceled } = await confirm({
					type: 'question',
					text: i18n.tsx.switchDarkModeManuallyWhenSyncEnabledConfirm({ x: i18n.ts.syncDeviceDarkMode }),
				});
				if (canceled) return;

				prefer.commit('syncDeviceDarkMode', false);
				store.set('darkMode', value);
			} else {
				store.set('darkMode', value);
			}
		},
		's': () => {
			mainRouter.push('/search');
		},
		'g': {
			callback: () => {
				// mを5回押すとセーフモードに入る
				safemodeRequestCount++;
				if (safemodeRequestCount >= 5) {
					miLocalStorage.setItem('isSafeMode', 'true');
					unisonReload();
				} else {
					if (safemodeRequestTimer != null) {
						window.clearTimeout(safemodeRequestTimer);
					}
					safemodeRequestTimer = window.setTimeout(() => {
						safemodeRequestCount = 0;
					}, 300);
				}
			},
			allowRepeat: true,
		},
	} as const satisfies Keymap;
	window.document.addEventListener('keydown', makeHotkey(keymap), { passive: false });

	initializeSw();
}
