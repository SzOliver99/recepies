<script lang="ts">
	import { recipes } from '$lib/store';
	import { onMount } from 'svelte';

	let currentRecipe = $state($recipes[0]);

	function getRandomRecipe() {
		const randomIndex = Math.floor(Math.random() * $recipes.length);
		currentRecipe = $recipes[randomIndex];
	}

	onMount(() => {
		getRandomRecipe();
	});
</script>

<div class="flex flex-col items-center">
	<button
		on:click={getRandomRecipe}
		class="mb-8 rounded-xl bg-amber-600 px-8 py-6 text-lg text-white shadow-lg transition-all hover:bg-amber-700 hover:shadow-xl"
	>
		A heti menü
	</button>

	<div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
		<div class="rounded-t-lg bg-amber-100 p-6">
			<h2 class="text-2xl font-bold text-amber-800 md:text-3xl">{currentRecipe.name}</h2>
			<div class="mt-2 flex flex-wrap gap-4">
				<span class="flex items-center gap-1 text-amber-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-4 w-4"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" />
					</svg>
					{currentRecipe.cookTime}
				</span>
			</div>
		</div>

		<div class="p-6">
			<div class="mb-6">
				<h3 class="mb-2 flex items-center gap-2 text-lg font-semibold text-amber-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<path
							d="M8 3L7 6.94a7 7 0 0 0-.5 2.58A1.5 1.5 0 0 0 8 11a1.5 1.5 0 0 0 1.5-1.48 7 7 0 0 0-.5-2.58L8 3Z"
						/>
						<path d="M12 3c-.7 3.7-1.5 5.7 0 9" />
						<path d="M16 3c.7 3.7 1.5 5.7 0 9" />
						<path d="M2 21h20" />
						<path d="M7 21a4 4 0 0 1-4-4V5" />
						<path d="M21 21a4 4 0 0 0 4-4V5" />
					</svg>
					Ingredients
				</h3>
				<ul class="list-disc space-y-1 pl-5">
					{#each currentRecipe.ingredients as ingredient}
						<li class="text-gray-700">{ingredient}</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="mb-2 text-lg font-semibold text-amber-800">Instructions</h3>
				<ol class="list-decimal space-y-2 pl-5">
					{#each currentRecipe.instructions as step, i}
						<li class="text-gray-700">{step}</li>
					{/each}
				</ol>
			</div>
		</div>

		<div class="rounded-b-lg bg-amber-50 p-4">
			<p class="text-amber-700 italic">Enjoy your delicious meal!</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}
</style>
