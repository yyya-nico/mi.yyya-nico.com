/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import type * as Misskey from 'misskey-js';
import type { FormWithDefault } from '@/utility/form.js';

export type Plugin = {
	installId: string;
	name: string;
	active: boolean;
	config?: FormWithDefault;
	configData: Record<string, any>;
	src: string | null;
	version: string;
	author?: string;
	description?: string;
	permissions?: (typeof Misskey.permissions)[number][];
};

type HandlerDef = {
	post_form_action: {
		title: string,
		handler: <T>(form: T, update: (key: unknown, value: unknown) => void) => void;
	};
	user_action: {
		title: string,
		handler: (user: Misskey.entities.UserDetailed) => void;
	};
	note_action: {
		title: string,
		handler: (note: Misskey.entities.Note) => void;
	};
	note_view_interruptor: {
		handler: (note: Misskey.entities.Note) => Misskey.entities.Note | null;
	};
	note_post_interruptor: {
		handler: (note: FIXME) => unknown;
	};
	page_view_interruptor: {
		handler: (page: Misskey.entities.Page) => Misskey.entities.Page;
	};
};

export function getPluginHandlers<K extends keyof HandlerDef>(_type: K): HandlerDef[K][] {
	return [];
}
