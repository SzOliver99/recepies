<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="container">
	<Navbar />
	<main class="min-h-screen relative bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
		<div class="mx-auto max-w-4xl">
			<header class="mb-8 text-center md:mb-12">
				<h1 class="mb-2 text-3xl font-bold text-amber-800 md:text-5xl">Anya titkos receptjei</h1>
				<p class="mb-6 text-lg text-amber-700">Itt megtalálsz mindent amit csak szeretnél!</p>
			</header>
			{@render children()}
		</div>
	</main>
</div>
