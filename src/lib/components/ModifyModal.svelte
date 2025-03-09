<script>
	let { isOpen } = $props();
</script>

{#if isOpen}
	<div
		class="fixed top-0 left-0 h-full w-full bg-black/60"
		on:click={() => (isOpen = false)}
	>
		asd
	</div>
{/if}
