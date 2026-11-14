/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as Misskey from 'misskey-js';
import { Cache } from '@/utility/cache.js';
import { misskeyApi } from '@/utility/misskey-api.js';

export const clipsCache = new Cache<Misskey.entities.Clip[]>(1000 * 60 * 30, () => misskeyApi('clips/list', { limit: 30 }));
export const rolesCache = new Cache(1000 * 60 * 30, () => misskeyApi('admin/roles/list', { limit: 30 }));
export const favoritedClipsCache = new Cache<Misskey.entities.Clip[]>(1000 * 60 * 30, () => misskeyApi('clips/my-favorites', {}));
