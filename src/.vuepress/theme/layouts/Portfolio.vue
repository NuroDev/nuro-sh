<template>
	<div class="flex flex-col h-full">
		<Navbar />

		<main class="mt-16 flex flex-row flex-wrap flex-grow items-center justify-center">
			<CardPortfolio
				v-for="(repo, i) in repos"
				:key="i"
				:repo="repo"
				data-aos="fade-up"
				data-aos-duration="1200"
				:data-aos-delay="i * 50"
				:data-aos-offset="-(i * 100)"
				data-aos-easing="ease-in-out-back"
			/>
		</main>
	</div>
</template>

<script>
import AOS from 'aos';

import CardPortfolio from '@theme/components/CardPortfolio.vue';
import Navbar from '@theme/components/Navbar.vue';

// TODO: Move to theme.styl
import 'aos/dist/aos.css';

export default {
	components: {
		CardPortfolio,
		Navbar,
	},
	data() {
		return {
			repos: [],
		};
	},
	async mounted() {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out-sin',
			once: true,
		});

		let res = await fetch('https://api.github.com/users/nurodev/repos');
		let json = await res.json();
		let sorted = json.filter((repo) => !'NuroDev/NuroDev'.includes(repo.full_name)); // Remove the profile README repo
		this.repos = sorted;
	},
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
