<template>
	<a
		:href="url"
		:target="open_new_tab ? `_blank` : null"
		rel="noopener noreferrer"
		class="heroButton"
	>
		<slot />
	</a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
	alt: {
		required: true,
		type: String,
	},
	url: {
		required: true,
		type: String,
	},
	open_new_tab: {
		default: true,
		required: false,
		type: Boolean,
	},
});
</script>

<style lang="postcss">
.heroButton {
	@apply flex justify-center px-6 py-3 rounded-md shadow;
	@apply bg-white dark:bg-gray-900 text-gray-700 dark:text-white;
	@apply ring-2 ring-gray-100 dark:ring-gray-800;
	@apply transform transition ease-in-out duration-300;
}

.heroButton:hover {
	@apply bg-gray-50 -translate-y-1;
}

.heroButton:active {
	@apply translate-y-1;
}

.heroButton:focus {
	@apply outline-none ring-blue-500 ring-4;
}
</style>
