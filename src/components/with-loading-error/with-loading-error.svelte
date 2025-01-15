<script>
	import Loader from '../loader';

	export let isLoading = false;
	export let errorMessage = '';
</script>

{#if isLoading && !errorMessage}
	<Loader />
{:else if !isLoading && errorMessage}
	<p>{errorMessage}</p>
{:else if !isLoading && !errorMessage}
	<slot />
{/if}
