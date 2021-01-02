<template>
	<Markdown />
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineProps } from 'vue';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
});

const Markdown = defineAsyncComponent({
	loader: () => import(`./posts/${props.name}.md`),
	delay: 200,
	timeout: 3000,
});
</script>
