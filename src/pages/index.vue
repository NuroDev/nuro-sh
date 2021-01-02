<template>
	<Header />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
	const response = await fetch(`/api/get_ip`);
	const ip = await response.json();
	console.log(ip);
});
</script>
