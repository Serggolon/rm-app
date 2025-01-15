import { writable, type Writable } from 'svelte/store';

import type { Character, Episode } from '../types';

const searchResults: Writable<{ characters: Character[], episodes: Episode[] }> = writable({ characters: [], episodes: [] });

export default searchResults;
