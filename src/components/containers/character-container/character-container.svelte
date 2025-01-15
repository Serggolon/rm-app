<script lang="ts">
	import Character from '../../character';

	import type { Character as CharacterType } from '../../../types';

	export let character: CharacterType;

	const transformedEpisodes = (character.episode || []).map(({ id, name, episode }) => {
  if (!episode) {
    return { id, name, season: 0, ep: 0 };
  }

  const match = episode.match(/S(\d+)E(\d+)/);
  const [season, ep] = match ? match.slice(1, 3) : ['0', '0'];

  return { id, name, season: Number(season), ep: Number(ep) };
});
</script>

<Character {character} episodes={transformedEpisodes}/>
