<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div :class="$style.root">
	<MkFeaturedPhotos v-if="instance.backgroundImageUrl" :class="$style.bg"/>
	<div :class="$style.brand">
		<div>Powered by</div>
		<span :class="$style.misskey" role="img" aria-label="Misskey"></span>
	</div>
	<main :class="$style.timeline">
		<header :class="$style.header" class="_panel">
			<div :class="$style.heading">
				<img :src="instance.iconUrl || '/favicon.ico'" alt="" :class="$style.icon"/>
				<div>
					<h1 :class="$style.title">{{ instanceName }}</h1>
				</div>
			</div>
			<button class="_button" :class="$style.menu" :aria-label="i18n.ts.menu" @click="openInstanceMenu"><i class="ti ti-dots"></i></button>
		</header>
		<div :class="$style.notes" class="_panel">
			<MkStreamingNotesTimeline v-if="instance.policies.ltlAvailable" src="local"/>
			<MkResult v-else type="empty" :text="i18n.ts.noNotes"/>
		</div>
	</main>
	<aside :class="$style.sidebar">
		<MkVisitorDashboard :showTimeline="false"/>
	</aside>
</div>
</template>

<script lang="ts" setup>
import { instanceName } from '@@/js/config.js';
import MkFeaturedPhotos from '@/components/MkFeaturedPhotos.vue';
import MkStreamingNotesTimeline from '@/components/MkStreamingNotesTimeline.vue';
import MkVisitorDashboard from '@/components/MkVisitorDashboard.vue';
import MkResult from '@/components/global/MkResult.vue';
import { instance } from '@/instance.js';
import { i18n } from '@/i18n.js';
import { openInstanceMenu } from '@/ui/_common_/common.js';
</script>

<style lang="scss" module>
.root {
	display: grid;
	grid-template-columns: minmax(0, 800px) minmax(280px, 360px);
	justify-content: center;
	gap: var(--MI-margin);
	height: 100cqh;
	overflow: auto;
	padding: calc(var(--MI-margin) * 2);
	box-sizing: border-box;
	align-content: start;
	isolation: isolate;
}

.bg {
	position: fixed;
	inset: 0;
	z-index: -1;
	pointer-events: none;
}

.brand {
	grid-column: 1 / -1;
	color: var(--MI_THEME-fg);
	font-size: 0.85em;
}

.misskey {
	display: block;
	width: 120px;
	height: 32px;
	margin-top: var(--MI-marginHalf);
	background-color: var(--MI_THEME-fg);
	-webkit-mask: url('/client-assets/misskey.svg') center / contain no-repeat;
	mask: url('/client-assets/misskey.svg') center / contain no-repeat;
}

.timeline {
	min-width: 0;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--MI-margin);
	margin-bottom: var(--MI-margin);
}

.heading {
	display: flex;
	align-items: center;
	gap: var(--MI-margin);
}

.icon {
	width: 40px;
	height: 40px;
	border-radius: var(--MI-radius);
}

.instanceName {
	font-size: 0.8em;
	color: color(from var(--MI_THEME-fg) srgb r g b / 0.65);
}

.title {
	margin: 0;
	font-size: 1.2em;
}

.menu {
	padding: calc(var(--MI-margin) / 2);
	font-size: 1.2em;
}

.notes {
	overflow: clip;
}

.sidebar {
	min-width: 0;
}

@media (max-width: 900px) {
	.root {
		grid-template-columns: minmax(0, 1fr);
	}

	.sidebar {
		display: none;
	}
}
</style>
