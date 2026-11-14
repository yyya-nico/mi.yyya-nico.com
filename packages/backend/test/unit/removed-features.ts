/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import 'reflect-metadata';
import Fastify from 'fastify';
import _Ajv from 'ajv';
import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest';
import { ApiServerService } from '@/server/api/ApiServerService.js';
import endpoints from '@/server/api/endpoints.js';
import Connection from '@/server/api/stream/Connection.js';
import { MainChannel } from '@/server/api/stream/channels/main.js';
import { NoteCreateService } from '@/core/NoteCreateService.js';
import { NoteDraftService } from '@/core/NoteDraftService.js';
import { NotificationService } from '@/core/NotificationService.js';
import { RoleService, REMOVED_FEATURE_POLICIES } from '@/core/RoleService.js';
import { MetaEntityService } from '@/core/entities/MetaEntityService.js';

const Ajv = _Ajv.default;

const removedEndpoints = [
	'admin/announcements/create',
	'admin/announcements/delete',
	'admin/announcements/list',
	'admin/announcements/update',
	'admin/avatar-decorations/create',
	'admin/avatar-decorations/delete',
	'admin/avatar-decorations/list',
	'admin/avatar-decorations/update',
	'announcements',
	'announcements/show',
	'antennas/create',
	'antennas/delete',
	'antennas/list',
	'antennas/notes',
	'antennas/remove-note',
	'antennas/show',
	'antennas/update',
	'bubble-game/ranking',
	'bubble-game/register',
	'channels/create',
	'channels/favorite',
	'channels/featured',
	'channels/follow',
	'channels/followed',
	'channels/mute/create',
	'channels/mute/delete',
	'channels/mute/list',
	'channels/my-favorites',
	'channels/owned',
	'channels/search',
	'channels/show',
	'channels/timeline',
	'channels/unfavorite',
	'channels/unfollow',
	'channels/update',
	'chat/history',
	'chat/messages/create-to-room',
	'chat/messages/create-to-user',
	'chat/messages/delete',
	'chat/messages/react',
	'chat/messages/room-timeline',
	'chat/messages/search',
	'chat/messages/show',
	'chat/messages/unreact',
	'chat/messages/user-timeline',
	'chat/read-all',
	'chat/rooms/create',
	'chat/rooms/delete',
	'chat/rooms/invitations/create',
	'chat/rooms/invitations/ignore',
	'chat/rooms/invitations/inbox',
	'chat/rooms/invitations/outbox',
	'chat/rooms/join',
	'chat/rooms/joining',
	'chat/rooms/leave',
	'chat/rooms/members',
	'chat/rooms/mute',
	'chat/rooms/owned',
	'chat/rooms/show',
	'chat/rooms/update',
	'drive/files/attached-chat-messages',
	'fetch-rss',
	'flash/create',
	'flash/delete',
	'flash/featured',
	'flash/like',
	'flash/my',
	'flash/my-likes',
	'flash/search',
	'flash/show',
	'flash/unlike',
	'flash/update',
	'gallery/featured',
	'gallery/popular',
	'gallery/posts',
	'gallery/posts/create',
	'gallery/posts/delete',
	'gallery/posts/like',
	'gallery/posts/show',
	'gallery/posts/unlike',
	'gallery/posts/update',
	'get-avatar-decorations',
	'i/claim-achievement',
	'i/export-antennas',
	'i/export-favorites',
	'i/export-user-lists',
	'i/favorites',
	'i/gallery/likes',
	'i/gallery/posts',
	'i/import-antennas',
	'i/import-user-lists',
	'i/page-likes',
	'i/pages',
	'i/read-announcement',
	'notes/favorites/create',
	'notes/favorites/delete',
	'notes/user-list-timeline',
	'page-push',
	'pages/create',
	'pages/delete',
	'pages/featured',
	'pages/like',
	'pages/show',
	'pages/unlike',
	'pages/update',
	'reversi/cancel-match',
	'reversi/games',
	'reversi/invitations',
	'reversi/match',
	'reversi/show-game',
	'reversi/surrender',
	'reversi/verify',
	'users/achievements',
	'users/flashs',
	'users/gallery/posts',
	'users/lists/create',
	'users/lists/create-from-public',
	'users/lists/delete',
	'users/lists/favorite',
	'users/lists/get-memberships',
	'users/lists/list',
	'users/lists/pull',
	'users/lists/push',
	'users/lists/show',
	'users/lists/unfavorite',
	'users/lists/update',
	'users/lists/update-membership',
	'users/pages',
	'users/recommendation',
];

describe('Removed features', () => {
	const server = Fastify();

	beforeAll(async () => {
		// Exercise the real HTTP route registration without starting databases or jobs.
		const api = Object.assign(Object.create(ApiServerService.prototype), {
			moduleRef: { get: () => ({ exec: async () => ({}) }) },
			config: { maxFileSize: 1024 },
			apiCallService: {
				handleRequest: async (_ep: unknown, _request: unknown, reply: { send: (body: unknown) => void }) => reply.send({ ok: true }),
			},
		}) as ApiServerService;
		server.register(api.createServer.bind(api), { prefix: '/api' });
		await server.ready();
	});

	afterAll(async () => {
		await server.close();
	});

	test.each(removedEndpoints)('%s is unavailable via GET and POST', async (path) => {
		for (const method of ['GET', 'POST'] as const) {
			const response = await server.inject({ method, url: `/api/${path}` });
			expect(response.statusCode).toBe(404);
		}
	});

	test('ordinary note and account routes remain available', async () => {
		for (const path of ['notes/create', 'i/update', 'i/registry/get']) {
			const response = await server.inject({ method: 'POST', url: `/api/${path}` });
			expect(response.statusCode).toBe(200);
		}
	});

	test.each(['notes/create', 'notes/drafts/create', 'notes/drafts/update', 'notes/search', 'notes/featured'])(
		'%s rejects a channel target', (name) => {
			const params = endpoints.find(endpoint => endpoint.name === name)!.params;
			const ajv = new Ajv({ strict: false });
			ajv.addFormat('misskey:id', /^[a-zA-Z0-9]+$/);
			const validate = ajv.compile({ type: 'object', properties: { channelId: params.properties!.channelId } });
			expect(validate({ channelId: 'legacychannel' })).toBe(false);
			expect(validate({ channelId: null })).toBe(true);
		},
	);

	test('profile updates reject decorations, pinned pages and enabling chat', () => {
		const params = endpoints.find(endpoint => endpoint.name === 'i/update')!.params;
		const ajv = new Ajv({ strict: false });
		ajv.addFormat('misskey:id', /^[a-zA-Z0-9]+$/);
		const validate = ajv.compile(params);
		for (const body of [{ avatarDecorations: [{ id: 'decoration' }] }, { pinnedPageId: 'page' }, { chatScope: 'everyone' }, { notificationRecieveConfig: { follow: { type: 'list', userListId: 'oldlist' } } }]) {
			expect(validate(body)).toBe(false);
		}
		expect(validate({ name: 'Alice', avatarDecorations: [], pinnedPageId: null, chatScope: 'none' })).toBe(true);
	});

	test.each(['userList', 'antenna', 'channel', 'chatUser', 'chatRoom', 'reversi', 'reversiGame'])(
		'%s cannot establish a streaming subscription', async (name) => {
			const lookup = vi.fn(() => { throw new Error('Removed channels must not be instantiated'); });
			const connection = Object.assign(Object.create(Connection.prototype), {
				channels: new Map(),
			}) as Connection;
			Object.defineProperty(connection, 'getChannelConstructor', { value: lookup });
			await connection.connectChannel('test', {}, name);
			expect(lookup).not.toHaveBeenCalled();
		},
	);

	test('main stream suppresses removed events while preserving following events', async () => {
		const send = vi.fn();
		const channel = Object.create(MainChannel.prototype);
		Object.defineProperty(channel, 'send', { value: send });
		for (const type of ['pageEvent', 'newChatMessage', 'unreadAntenna', 'readAntenna', 'readAllAnnouncements', 'announcementCreated']) {
			await Reflect.get(channel, 'onData')({ type, body: {} });
		}
		expect(send).not.toHaveBeenCalled();
		await Reflect.get(channel, 'onData')({ type: 'follow', body: { id: 'bob' } });
		expect(send).toHaveBeenCalledWith('follow', { id: 'bob' });
	});

	test.each([{ channel: { id: 'oldchannel' } }, { reply: { channelId: 'oldchannel' } }])(
		'channel posts and inherited replies cannot be published, including scheduled drafts', async (data) => {
			const service = Object.create(NoteCreateService.prototype);
			await expect(service.create({ id: 'alice' }, data)).rejects.toMatchObject({ id: 'bfa3905b-25f5-4894-b430-da331a490e4b' });
		},
	);

	test('channel drafts are rejected before being scheduled', async () => {
		const service = Object.create(NoteDraftService.prototype);
		await expect(service.validate({ id: 'alice' }, { channelId: 'oldchannel' })).rejects.toMatchObject({ id: '6815399a-6f13-4069-b60d-ed5156249d12' });
	});

	test('removed notification types do not create events or jobs', () => {
		const service = Object.create(NotificationService.prototype);
		expect(service.createNotification('alice', 'achievementEarned', { achievement: 'notes1' })).toBeUndefined();
		expect(service.createNotification('alice', 'chatRoomInvitationReceived', { chatRoomId: 'oldroom' })).toBeUndefined();
	});

	test('historical removed notifications are omitted without blocking pagination', async () => {
		const xrange = vi.fn()
			.mockResolvedValueOnce([['1-0', ['data', JSON.stringify({ type: 'achievementEarned' })]]])
			.mockResolvedValueOnce([['0-0', ['data', JSON.stringify({ type: 'follow', id: 'follow' })]]]);
		const service = Object.assign(Object.create(NotificationService.prototype), { redisClient: { xrevrange: xrange } }) as NotificationService;
		const notifications = await service.getNotifications('alice', { limit: 1 });
		expect(notifications).toEqual([{ type: 'follow', id: 'follow' }]);
		expect(xrange).toHaveBeenCalledTimes(2);
	});

	test.each([{ channelId: 'oldchannel' }, { channelId: null, replyId: 'oldreply' }])(
		'partial draft updates cannot hide stored channel fields behind undefined', async (draft) => {
			const write = vi.fn();
			const service = Object.assign(Object.create(NoteDraftService.prototype), {
				noteDraftsRepository: { findOneBy: async () => draft, createQueryBuilder: write },
				notesRepository: { findOneBy: async () => ({ channelId: 'oldchannel' }) },
				roleService: { getUserPolicies: async () => ({}) },
			});
			await expect(service.update({ id: 'alice' }, 'draft', { text: 'edited', channelId: undefined, replyId: undefined }))
				.rejects.toMatchObject({ id: '6815399a-6f13-4069-b60d-ed5156249d12' });
			expect(write).not.toHaveBeenCalled();
		},
	);

	test('guest policies cannot re-enable removed features through saved instance settings', async () => {
		const service = Object.assign(Object.create(RoleService.prototype), {
			meta: { policies: { chatAvailability: 'available', canCreateChannel: true, avatarDecorationLimit: 16 } },
		});
		expect(await service.getUserPolicies(null)).toMatchObject(REMOVED_FEATURE_POLICIES);
	});

	test('public instance metadata advertises removed capabilities as unavailable', async () => {
		const query = { where: () => query, andWhere: () => query, getMany: async () => [] };
		const service = Object.assign(Object.create(MetaEntityService.prototype), {
			meta: { policies: { chatAvailability: 'available', canCreateChannel: true } },
			config: {},
			adsRepository: { createQueryBuilder: () => query },
		});
		expect((await service.pack()).policies).toMatchObject(REMOVED_FEATURE_POLICIES);
	});
});
