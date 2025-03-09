<script lang="ts">
	import { goto } from '$app/navigation';
	import { slide, type SlideParams } from 'svelte/transition';
	import { CookingPot, Dices, HouseIcon, Menu, X } from 'lucide-svelte';
	import { isMenuActive } from '$lib/store';

	const navLinks = [
		{ href: `/`, title: 'Kezdőlap', icon: HouseIcon },
		{ href: `/recipes`, title: 'Receptek', icon: CookingPot },
		{ href: `/random-recipe`, title: 'Heti kaja', icon: Dices }
	];

	function handleButton(href: string) {
		goto(href, { replaceState: true });
		toggleMenu();
	}

	function fadeSlide(node: Element, options: SlideParams) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t: number) => slideTrans?.css?.(t, t) ?? ''
		};
	}

	function toggleMenu() {
		$isMenuActive = !$isMenuActive;
	}
</script>

<div class="sticky top-0 z-50 w-full bg-white text-slate-900 shadow">
	<nav class="bg-white p-3 text-amber-800">
		<button onclick={toggleMenu}>
			{#if $isMenuActive !== true}
				<Menu />
			{:else}
				<X />
			{/if}
		</button>
	</nav>

	{#if $isMenuActive === true}
		<!-- asd -->
		<div
			class="fixed top-12 right-0 -z-10 flex w-full flex-col items-start gap-3 rounded-b-lg bg-slate-100 p-4 text-amber-800 shadow-lg"
			transition:fadeSlide={{ duration: 250 }}
		>
			{#each navLinks as item, index}
				<button onclick={() => handleButton(item.href)} class="flex flex-row align-middle">
					<item.icon class="me-3" />
					<p>{item.title}</p>
				</button>
				{#if index !== navLinks.length - 1}
					<div class="w-full border-b-2 border-amber-600"></div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
