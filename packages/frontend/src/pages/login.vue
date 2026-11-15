<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div :class="$style.root">
	<div :class="$style.panel" class="_panel">
		<div :class="$style.tabs">
			<button class="_button" :class="[$style.tab, { [$style.active]: mode === 'signin' }]" :aria-current="mode === 'signin' ? 'page' : undefined" @click="mode = 'signin'">{{ i18n.ts.login }}</button>
			<button class="_button" :class="[$style.tab, { [$style.active]: mode === 'signup' }]" :aria-current="mode === 'signup' ? 'page' : undefined" @click="mode = 'signup'">{{ i18n.ts.signup }}</button>
		</div>
		<div v-if="mode === 'signin'" :class="$style.form">
			<MkSignin :autoSet="true"/>
		</div>
		<div v-else-if="!acceptedRules" :class="$style.signup">
			<MkSignupRules @done="acceptedRules = true" @cancel="mode = 'signin'"/>
		</div>
		<div v-else :class="$style.signup">
			<MkSignupForm :autoSet="true"/>
		</div>
	</div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MkSignin from '@/components/MkSignin.vue';
import MkSignupRules from '@/components/MkSignupDialog.rules.vue';
import MkSignupForm from '@/components/MkSignupDialog.form.vue';
import { i18n } from '@/i18n.js';
import { definePage } from '@/page.js';

const mode = ref<'signin' | 'signup'>('signin');
const acceptedRules = ref(false);

definePage(() => ({ title: i18n.ts.login, icon: 'ti ti-login-2' }));
</script>

<style lang="scss" module>
.root {
	height: 100cqh;
	overflow: auto;
	padding: calc(var(--MI-margin) * 2) var(--MI-margin);
	box-sizing: border-box;
}

.panel {
	max-width: 500px;
	margin: 0 auto;
	overflow: clip;
}

.tabs {
	display: flex;
	border-bottom: 1px solid var(--MI_THEME-divider);
}

.tab {
	flex: 1;
	padding: var(--MI-margin);
	text-align: center;

	&.active {
		color: var(--MI_THEME-accent);
		border-bottom: 2px solid var(--MI_THEME-accent);
	}
}

.form {
	padding: calc(var(--MI-margin) * 2);
}

.signup {
	padding-bottom: var(--MI-margin);
}
</style>
