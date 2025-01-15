<script lang="ts">
	import ContentHeader from '../content-header';
	import List from '../list';
	import ListItem from '../list-item';
	import Link from '../link';

	import type { Character, Episode } from '../../types';

	export let searchData:{characters:Character[], episodes: Episode[]};

</script>

<article>
	<ContentHeader headerName={`Search result`} headerVariant="h1" />
	
	<section>
		<article>
			<ContentHeader
				headerName="Episodes"
				headerMessage={`List of the episodes of the search`}
				headerVariant="h2"
			/>

			<List>
				{#each searchData.episodes as { name, id, episode }, index}
					<ListItem>
						<Link href={`/season/${episode && episode[3]}/episode/${id}`}>
							<p>Episode {`${index + 1}`} - {name}</p>
						</Link>
					</ListItem>
				{/each}
			</List>
		</article>

		<article>
			<ContentHeader
				headerName={`Characters`}
				headerMessage={`List of the characters of the search`}
				headerVariant="h2"
			/>

			<List>
				{#each searchData.characters as { name, id }}
					<ListItem>
						<Link href={`/character/${id}`}>
							<p>{name}</p>
						</Link>
					</ListItem>
				{/each}
			</List>
		</article>
	</section>
</article>

<style>
	section,
	article {
		flex-direction: column;
	}

	article {
		padding: 16px;
	}

	article > section {
		flex-direction: row;
		justify-content: space-between;
	}

	section > article {
		width: 49%;
		padding: 0;
	}
</style>
