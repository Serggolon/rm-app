<script lang="ts">
	import Link from '../link';
	import ListItem from '../list-item/list-item.svelte';
	import List from '../list/list.svelte';

	export let seasonNumber: number;
	const seasonKeys = new Array(seasonNumber);
</script>

<section>
	<List>
		{#each seasonKeys as item, index}
			<ListItem>
				<Link href={`/season/${index + 1}`}>Season {index + 1}</Link>
			</ListItem>
		{/each}
	</List>
</section>

<style>
	section {
		width: 100%;
		flex-direction: column;
		padding: 20px;
	}
</style>
