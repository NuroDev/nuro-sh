<template>
	<Hero />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
	// try {
	// 	const response = await fetch(`/api/get_ip`);
	// 	const ip = await response.json();
	// 	console.info(ip);
	// } catch (error) {
	// 	console.warn(`Failed to fetch ip data |`, error);
	// }
});
</script>
