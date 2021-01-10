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
							<h2 class="text-3xl font-extrabold text-gray-700 dark:text-white sm:text-4xl">
								<span class="block">Hi! 👋🏻 I'm Ben,</span>
								<span class="block">a developer based in the UK</span>
							</h2>

							<p class="mt-4 text-lg leading-6 text-gray-400">
								Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
								Malesuada adipiscing sagittis vel nulla nec.
							</p>

							<!-- Refactor hard coded SVGs into imported SVG components -->
							<div class="grid gap-4 grid-cols-4 mt-8">
								<HeroButton url="https://twitter.com/nurodev" alt="Twitter">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
										></path>
									</svg>
								</HeroButton>

								<HeroButton url="https://github.com/nurodev" alt="GitHub">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
										></path>
									</svg>
								</HeroButton>

								<HeroButton
									url="https://www.linkedin.com/in/nurodev/"
									alt="LinkedIn"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
										></path>
										<rect x="2" y="9" width="4" height="12"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</HeroButton>

								<HeroButton url="/blog" :open_new_tab="false" alt="Blog">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M12 20h9"></path>
										<path
											d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
										></path>
									</svg>
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
