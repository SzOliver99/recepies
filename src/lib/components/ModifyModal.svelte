<script>
	let { close } = $props();
</script>

<div
	class="align-center fixed top-0 left-0 mt-7 grid h-full w-full items-center bg-black/70"
	on:click={close}
>
	<div class="w-[90%] h-[87%] bg-black mx-auto" on:click|stopPropagation>asd</div>
</div>
