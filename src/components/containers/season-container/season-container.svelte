<script lang="ts">
	import Season from '../../season';

	import type { Character, Episode } from '../../../types';

	export let seasonNumber: number;
	export let episodeList: Episode[];

	const episodes: Episode[] = [];
	const allCharacters: Character[] = [];
	const characterUniqueIds: string[] = [];

	episodeList.forEach(({ id, name, episode, characters }) => {
		episodes.push({ id, name, episode });

		if (characters) {
			allCharacters.push(...characters);
		}
	});

	const uniqueCharacters: Character[] = allCharacters.filter(({id}) => {
		if (!characterUniqueIds.includes(id)) {
			characterUniqueIds.push(id);

			return true;
		}

		return false;
	});
</script>

<Season {seasonNumber} season={episodes} {uniqueCharacters} />
