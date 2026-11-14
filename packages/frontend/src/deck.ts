/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import type { notificationTypes } from 'misskey-js';
import type { BasicTimelineType } from '@/timelines.js';
import type { SoundStore } from '@/preferences/def.js';

export type DeckProfile = {
	name: string;
	id: string;
	columns: Column[];
	layout: Column['id'][][];
};

type ColumnWidget = {
	name: string;
	id: string;
	data: Record<string, any>;
};

const columnTypes = [
	'main',
	'widgets',
	'notifications',
	'tl',
	'antenna',
	'list',
	'channel',
	'clip',
	'mentions',
	'direct',
	'roleTimeline',
	'chat',
] as const;

export type ColumnType = typeof columnTypes[number];

export type Column = {
	id: string;
	type: ColumnType;
	name: string | null;
	width: number;
	widgets?: ColumnWidget[];
	active?: boolean;
	flexible?: boolean;
	antennaId?: string;
	listId?: string;
	channelId?: string;
	clipId?: string;
	roleId?: string;
	excludeTypes?: typeof notificationTypes[number][];
	tl?: BasicTimelineType;
	withRenotes?: boolean;
	withReplies?: boolean;
	withSensitive?: boolean;
	onlyFiles?: boolean;
	soundSetting?: SoundStore;
	// The cache for the name of the antenna, channel, list, clip, or role
	timelineNameCache?: string;
};
