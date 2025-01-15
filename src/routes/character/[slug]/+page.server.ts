import { MortyUrqlApi } from '$lib';
import type { Character } from '../../../types';

export const prerender = true;

const mortyUrqlApi = new MortyUrqlApi();

/** @type {import('./$types').PageServerLoad} */
export async function load(pageData:{params:{slug:string}}) {
	const characterId = pageData.params.slug;

	const {ssr, character, message} = await mortyUrqlApi.getCharacter(characterId) || { character: {} as Character, ssr: '', message: '' };

	return {
		ssr,
		characterId,
		character,
		message
	};
}
