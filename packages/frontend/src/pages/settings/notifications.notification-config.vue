<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="_gaps_m">
	<MkSelect v-model="type" :items="typeDef">
	</MkSelect>

	<div class="_buttons">
		<MkButton inline primary @click="save"><i class="ti ti-check"></i> {{ i18n.ts.save }}</MkButton>
	</div>
</div>
</template>

<script lang="ts">
import { computed, watch } from 'vue';
import type { NotificationConfig } from '@/utility/notification-config.js';
export type { NotificationConfig } from '@/utility/notification-config.js';

const notificationConfigTypes = [
	'all',
	'following',
	'follower',
	'mutualFollow',
	'followingOrFollower',
	'never',
] as const satisfies readonly NotificationConfig['type'][];
</script>

<script lang="ts" setup>
import MkSelect from '@/components/MkSelect.vue';
import MkButton from '@/components/MkButton.vue';
import { useMkSelect } from '@/composables/use-mkselect.js';
import { i18n } from '@/i18n.js';

const props = defineProps<{
	value: NotificationConfig;
	configurableTypes?: NotificationConfig['type'][]; // If not specified, all types are configurable
}>();

const emit = defineEmits<{
	(ev: 'update', result: NotificationConfig): void;
}>();

const notificationConfigTypesI18nMap: Record<typeof notificationConfigTypes[number], string> = {
	all: i18n.ts.all,
	following: i18n.ts.following,
	follower: i18n.ts.followers,
	mutualFollow: i18n.ts.mutualFollow,
	followingOrFollower: i18n.ts.followingOrFollower,
	never: i18n.ts.none,
};

const {
	model: type,
	def: typeDef,
} = useMkSelect({
	items: computed(() => (props.configurableTypes ?? notificationConfigTypes).map((t: NotificationConfig['type']) => ({
		label: notificationConfigTypesI18nMap[t],
		value: t,
	}))),
});

watch(() => props.value.type, value => {
	type.value = value;
}, { immediate: true });

function save() {
	emit('update', { type: type.value });
}
</script>
