<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div class="_gaps_m">
	<MkSelect v-model="statusbar.type" :items="statusbarTypeDef">
		<template #label>{{ i18n.ts.type }}</template>
	</MkSelect>

	<MkInput v-model="statusbar.name" manualSave>
		<template #label>{{ i18n.ts.label }}</template>
	</MkInput>

	<MkSwitch v-model="statusbar.black">
		<template #label>Black</template>
	</MkSwitch>

	<MkRadios
		v-model="statusbar.size"
		:options="[
			{ value: 'verySmall', label: i18n.ts.small + '+' },
			{ value: 'small', label: i18n.ts.small },
			{ value: 'medium', label: i18n.ts.medium },
			{ value: 'large', label: i18n.ts.large },
			{ value: 'veryLarge', label: i18n.ts.large + '+' },
		]"
	>
		<template #label>{{ i18n.ts.size }}</template>
	</MkRadios>

	<template v-if="statusbar.type === 'federation'">
		<MkInput v-model="statusbar.props.refreshIntervalSec" manualSave type="number" :min="1">
			<template #label>{{ i18n.ts.refreshInterval }}</template>
		</MkInput>
		<MkRange v-model="statusbar.props.marqueeDuration" :min="5" :max="150" :step="1">
			<template #label>{{ i18n.ts.speed }}</template>
			<template #caption>{{ i18n.ts.fast }} &lt;-&gt; {{ i18n.ts.slow }}</template>
		</MkRange>
		<MkSwitch v-model="statusbar.props.marqueeReverse">
			<template #label>{{ i18n.ts.reverse }}</template>
		</MkSwitch>
		<MkSwitch v-model="statusbar.props.colored">
			<template #label>{{ i18n.ts.colored }}</template>
		</MkSwitch>
	</template>

	<div class="_buttons">
		<MkButton danger @click="del">{{ i18n.ts.remove }}</MkButton>
	</div>
</div>
</template>

<script lang="ts" setup>
import { reactive, computed, watch } from 'vue';
import * as Misskey from 'misskey-js';
import MkSelect from '@/components/MkSelect.vue';
import MkInput from '@/components/MkInput.vue';
import MkSwitch from '@/components/MkSwitch.vue';
import MkRadios from '@/components/MkRadios.vue';
import MkButton from '@/components/MkButton.vue';
import MkRange from '@/components/MkRange.vue';
import { i18n } from '@/i18n.js';
import { instance } from '@/instance.js';
import { deepClone } from '@/utility/clone.js';
import { prefer } from '@/preferences.js';
import type { MkSelectItem } from '@/components/MkSelect.vue';
import type { StatusbarStore } from '@/preferences/def.js';

const props = defineProps<{
	_id: string;

}>();

const statusbar = reactive<StatusbarStore>(deepClone(prefer.s.statusbars.find(x => x.id === props._id)!));

const statusbarTypeDef = computed(() => {
	const items: MkSelectItem[] = [];
	if (instance.federation !== 'none') {
		items.push({ label: 'Federation', value: 'federation' });
	}
	return items;
});

watch(() => statusbar.type, () => {
	if (statusbar.type === 'federation') {
		statusbar.name = 'FEDERATION';
		statusbar.props.refreshIntervalSec = 120;
		statusbar.props.display = 'marquee';
		statusbar.props.marqueeDuration = 100;
		statusbar.props.marqueeReverse = false;
		statusbar.props.colored = false;
	}
});

watch(statusbar, save);

async function save() {
	const i = prefer.s.statusbars.findIndex(x => x.id === props._id);
	const statusbars = deepClone(prefer.s.statusbars);
	statusbars[i] = deepClone(statusbar);
	prefer.commit('statusbars', statusbars);
}

function del() {
	prefer.commit('statusbars', prefer.s.statusbars.filter(x => x.id !== props._id));
}
</script>
