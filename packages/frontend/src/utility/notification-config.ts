/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import type { entities } from 'misskey-js';

export type NotificationConfig = NonNullable<NonNullable<entities.IUpdateRequest['notificationRecieveConfig']>['note']>;

type NotificationReceiveConfig = {
	[K in keyof entities.MeDetailed['notificationRecieveConfig']]: NotificationConfig;
};

export function normalizeNotificationReceiveConfig(config: entities.MeDetailed['notificationRecieveConfig']): NotificationReceiveConfig {
	return Object.fromEntries(Object.entries(config).map(([type, value]): [string, NotificationConfig | undefined] => [
		type,
		value.type === 'list' ? { type: 'never' } : value,
	]));
}
