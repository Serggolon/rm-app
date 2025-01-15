<script lang="ts">
	import { searchResults } from '../../../store';

	import type { Character, Episode } from '../../../types';

	import Search from '../../search';

	let searchData:{characters:Character[], episodes: Episode[]};

	searchResults.subscribe((value) => {
		searchData = value;
	});
</script>

<Search {searchData}/>


