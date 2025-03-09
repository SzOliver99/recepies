<script>
	import ModifyModal from '$lib/components/ModifyModal.svelte';
	import { recipes } from '$lib/store';
	import { BookOpenText, Clock, CopyPlus } from 'lucide-svelte';

	const { data } = $props();
	const currentRecipe = $recipes[data.foodId];

	let isModifyOpen = $state(false);
</script>

<div class="flex flex-col items-center">
	<div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
		<div class="rounded-t-lg bg-amber-100 p-6">
			<h2 class="text-2xl font-bold text-amber-800 md:text-3xl">
				{currentRecipe.name}
			</h2>
			<div class="mt-2 flex flex-wrap justify-between gap-4 text-amber-700">
				<span class="flex items-center gap-1">
					<Clock size="20" />
					<p class="font-semibold">{currentRecipe.cookTime}</p>
				</span>
				<button
					class="rounded-lg bg-amber-600 px-3 py-2 font-semibold text-white"
					on:click|preventDefault={() => {
						isModifyOpen = !isModifyOpen;
					}}>Módosítás</button
				>
			</div>
		</div>

		<div class="p-6">
			<div class="mb-6">
				<h3 class="mb-2 flex items-center gap-2 text-lg font-semibold text-amber-800">
					<CopyPlus />
					<p>Hozzávalók</p>
				</h3>
				<ul class="list-disc space-y-1 pl-5">
					{#each currentRecipe.ingredients as ingredient}
						<li class="text-gray-700">{ingredient}</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="mb-2 flex items-center gap-2 text-lg font-semibold text-amber-800">
					<BookOpenText />
					<p>Útmutató</p>
				</h3>
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

{#if isModifyOpen}
	<ModifyModal close={() => (isModifyOpen = false)} />
{/if}

<style>
	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}
</style>
