<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { categories, recipes } from '$lib/store';

	let selectedCategory = 'Összes';

	$: filteredRecipes =
		selectedCategory === 'Összes'
			? $recipes
			: $recipes.filter((recipe) => recipe.categories.includes(selectedCategory));

	function changeCategory(category: string) {
		selectedCategory = category;
	}
</script>

<div>
	<!-- Category Filter -->
	<div class="mb-2 flex flex-wrap justify-center gap-2 font-semibold">
		{#each $categories as category}
			<button
				class={`rounded-xl px-4 py-2 transition-all ${selectedCategory === category ? 'bg-amber-600 text-white' : 'bg-amber-200 text-amber-800 hover:bg-amber-300'}`}
				on:click={() => changeCategory(category)}
			>
				{category}
			</button>
		{/each}
	</div>

	<div class="mb-2 flex w-full justify-center text-amber-800">Vagy</div>

	<!-- Input Filter -->
	<div class="mb-8 flex w-full justify-center">
		<input
			type="text"
			placeholder="Írd be egy recept nevét"
			class="w-7/8 rounded-xl border-2 bg-amber-200 px-3 py-2 font-semibold text-amber-800 focus:border-amber-800 focus:outline-none"
		/>
	</div>

	<!-- Recipe Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredRecipes as recipe}
			<div
				class="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
				on:click={() => goto(`${$page.url.pathname}/${recipe.id - 1}`)}
			>
				<div class="bg-amber-100 p-4">
					<h3 class="text-xl font-bold text-amber-800">{recipe.name}</h3>
					<div class="mt-2 flex flex-wrap gap-2">
						<span class="text-sm text-amber-700">{recipe.cookTime}</span>
						<span class="text-sm text-amber-700">• {recipe.difficulty}</span>
					</div>
				</div>
				<div class="p-4">
					<div class="mb-3 flex flex-wrap gap-1">
						{#each recipe.categories as category}
							<span class="rounded-full font-semibold bg-amber-200 px-2 py-1 text-sm text-amber-800"
								>{category}</span
							>
						{/each}
					</div>
					<p class="text-sm text-gray-600">
						{recipe.ingredients.length} ingredients • {recipe.instructions.length} steps
					</p>
				</div>
				<div class="bg-amber-50 p-3 text-center text-sm text-amber-700">
					Click to view full recipe
				</div>
			</div>
		{/each}
	</div>

	<!-- Empty state if no $recipes match the filter -->
	{#if filteredRecipes.length === 0}
		<div class="py-12 text-center">
			<p class="text-xl text-amber-800">Nem található recept az adatbázisban.</p>
			<button
				class="mt-4 rounded-xl bg-amber-600 px-6 py-2 text-white hover:bg-amber-700"
				on:click={() => changeCategory('Összes')}
			>
				Összes recept
			</button>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}
</style>
