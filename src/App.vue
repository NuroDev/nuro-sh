<template>
	<main>
		<router-view />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
});
</script>

<style lang="postcss">
*::-webkit-scrollbar {
	display: none;
}

#app {
	@apply antialiased;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
}
</style>
