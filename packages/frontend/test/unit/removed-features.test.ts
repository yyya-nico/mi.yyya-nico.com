/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { describe, expect, test, vi } from 'vitest';
import { Nirax } from '@/lib/nirax.js';
import { ROUTE_DEF } from '@/router.definition.js';

vi.mock('@/i.js', () => ({ $i: { id: 'alice' }, iAmModerator: true }));
vi.mock('@/pages/timeline.vue', () => ({ default: {} }));
vi.mock('@/pages/_loading_.vue', () => ({ default: {} }));
vi.mock('@/pages/_error_.vue', () => ({ default: {} }));

const removedPaths = [
	'/chat', '/chat/user/alice', '/explore', '/announcements', '/announcements/old',
	'/channels', '/channels/old', '/list/old', '/my/lists', '/timeline/list/old',
	'/my/antennas', '/timeline/antenna/old', '/my/favorites', '/pages', '/pages/new',
	'/@alice/pages/old', '/play', '/play/old', '/gallery', '/gallery/old',
	'/my/achievements', '/games', '/reversi', '/reversi/g/old', '/bubble-game',
	'/scratchpad', '/clicker', '/qr', '/avatar-decorations', '/settings/avatar-decoration',
	'/settings/deck', '/settings/plugin', '/settings/plugin/install',
	'/admin/announcements', '/admin/avatar-decorations',
];

describe('Removed feature navigation', () => {
	const router = new Nirax(ROUTE_DEF, '/', true, {});

	test.each(removedPaths)('%s has no feature route', (path) => {
		const route = router.resolve(path);
		expect(route?.route.path === '/:(*)' || route?.route.path === '/settings' || route?.route.path === '/admin').toBe(true);
		if (route?.route.path === '/settings' || route?.route.path === '/admin') {
			expect(route.child).toBeUndefined();
		}
	});

	test.each(['/', '/notes/test', '/settings/profile', '/my/notifications', '/my/drive'])(
		'%s remains routable', (path) => {
			expect(router.resolve(path)?.route.path).not.toBe('/:(*)');
		},
	);
});
