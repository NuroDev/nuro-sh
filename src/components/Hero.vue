<template>
	<div class="h-screen">
		<Background />
		<div
			class="absolute inset-0 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<div
					class="bg-white dark:bg-gray-900 bg-opacity-80 bg-blur ring-4 ring-gray-100 dark:ring-gray-800 ring-opacity-50 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
				>
					<div
						class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
					>
						<div class="lg:self-center">
							<h2
								class="text-3xl font-extrabold text-gray-700 dark:text-white sm:text-4xl"
							>
								<span class="block">Hi! 👋🏻 I'm Ben,</span>
								<span class="block">a developer based in the UK</span>
							</h2>

							<p class="mt-4 text-lg leading-6 text-gray-400">
								Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
								Malesuada adipiscing sagittis vel nulla nec.
							</p>

							<div class="grid gap-4 grid-cols-4 mt-8">
								<HeroButton url="https://twitter.com/nurodev" alt="Twitter">
									<feather-twitter style="width: 24px; height: 24px" />
								</HeroButton>

								<HeroButton url="https://github.com/nurodev" alt="GitHub">
									<feather-github style="width: 24px; height: 24px" />
								</HeroButton>

								<HeroButton
									url="https://www.linkedin.com/in/nurodev/"
									alt="LinkedIn"
								>
									<feather-linkedin style="width: 24px; height: 24px" />
								</HeroButton>

								<HeroButton url="/blog" :open_new_tab="false" alt="Blog">
									<feather-edit--3 style="width: 24px; height: 24px" />
								</HeroButton>
							</div>
						</div>
					</div>

					<div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
						<img
							class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 select-none"
							src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
							alt="App screenshot"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
.bg-blur {
	backdrop-filter: saturate(200%) blur(6px);
}
</style>
