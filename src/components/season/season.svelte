<script lang="ts">
	import ContentHeader from '../content-header';
	import List from '../list';
	import ListItem from '../list-item';
	import Link from '../link';

	import type { Character, Episode } from '../../types';

	export let seasonNumber: number;
	export let season: Episode[];
	export let uniqueCharacters: Character[];
</script>

<article>
	<ContentHeader headerName={`Season ${seasonNumber}`} headerVariant="h1" />
	
	<section>
		<article>
			<ContentHeader
				headerName="Episodes"
				headerMessage={`List of the episodes of the season ${seasonNumber}`}
				headerVariant="h2"
			/>

			<List>
				{#each season as { name, id }, index}
					<ListItem>
						<Link href={`/season/${seasonNumber}/episode/${id}`}>
							<p>Episode {`${index + 1}`} - {name}</p>
						</Link>
					</ListItem>
				{/each}
			</List>
		</article>

		<article>
			<ContentHeader
				headerName={`Characters in season ${seasonNumber}`}
				headerMessage={`List of the episodes of the season ${seasonNumber}`}
				headerVariant="h2"
			/>

			<List>
				{#each uniqueCharacters as { name, id }}
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
