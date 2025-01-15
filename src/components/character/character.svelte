<script lang="ts">
	import ContentHeader from '../content-header';
	import Link from '../link';
	import ListItem from '../list-item/list-item.svelte';
	import List from '../list/list.svelte';

	import type { Character } from '../../types';

	type Episode = {
		name: string;
		id: string;
		season: number;
		ep: number;
	};

	export let character: Character;
	export let episodes: Episode[];

	const { name, id: episode, image, species, status, gender } = character;
</script>

<section>
	<ContentHeader
		headerName={name}
		headerMessage={`Status: ${status} | Gender: ${gender} | Species: ${species}`}
		headerVariant="h2"
	/>

	<List>
		{#each episodes as { name, id, season, ep }}
			<ListItem>
				<Link href={`/season/${Number(season)}/episode/${id}`}>
					<p>Episode {ep} of the season {Number(season)} - {name}</p>
				</Link>
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
