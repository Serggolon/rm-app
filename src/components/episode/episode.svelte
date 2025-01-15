<script lang="ts">
	import ContentHeader from '../content-header';
	import Link from '../link';
	import ListItem from '../list-item/list-item.svelte';
	import List from '../list/list.svelte';

	import type { Episode } from '../../types';

	export let episode: Episode;

	const {name, episode: episodeCode = '', air_date, characters} = episode;

	const [seasonNum, episodeNum] = episodeCode.match(/S(\d+)E(\d+)/)?.slice(1, 3) ?? ['0', '0'];
</script>

<section>
	<ContentHeader
		headerName={`Episode ${Number(episodeNum)} of the season ${Number(seasonNum)} - ${name}`}
		headerMessage={`Air date - ${air_date}`}
		headerVariant="h2"
	/>

	<List>
		{#each characters? characters : [] as { name, id }}
			<ListItem>
				<Link href={`/character/${id}`}>
					<p>{name}</p>
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
