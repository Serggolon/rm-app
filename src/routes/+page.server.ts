import { MortyUrqlApi } from '$lib';

export const prerender = true;

const mortyUrqlApi = new MortyUrqlApi();

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { seasonNumber, ssr, message } = (await mortyUrqlApi.getSeasonNumber()) || {
		seasonNumber: 0,
		ssr: '',
		message: ''
	};

	return { seasonNumber, ssr, message };
}
