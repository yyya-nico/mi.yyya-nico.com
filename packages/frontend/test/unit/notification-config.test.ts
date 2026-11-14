/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { describe, expect, test } from 'vitest';
import type { entities } from 'misskey-js';
import { normalizeNotificationReceiveConfig } from '@/utility/notification-config.js';

describe('Notification receive settings', () => {
	test('converts legacy list settings without changing other settings or the source', () => {
		const source: entities.MeDetailed['notificationRecieveConfig'] = {
			follow: { type: 'list', userListId: 'old-list' },
			reaction: { type: 'following' },
			reply: { type: 'never' },
			scheduledNotePosted: { type: 'all' },
			login: { type: 'never' },
			createToken: { type: 'all' },
		};
		const normalized = normalizeNotificationReceiveConfig(source);
		expect(normalized).toEqual({
			follow: { type: 'never' },
			reaction: { type: 'following' },
			reply: { type: 'never' },
			scheduledNotePosted: { type: 'all' },
			login: { type: 'never' },
			createToken: { type: 'all' },
		});
		expect(source.follow).toEqual({ type: 'list', userListId: 'old-list' });
	});

	test.each(['all', 'following', 'follower', 'mutualFollow', 'followingOrFollower', 'never'] as const)(
		'preserves the supported %s setting', (type) => {
			expect(normalizeNotificationReceiveConfig({ mention: { type } })).toEqual({ mention: { type } });
		},
	);

	test('does not introduce preferences for missing notification types', () => {
		expect(normalizeNotificationReceiveConfig({})).toEqual({});
	});
});
