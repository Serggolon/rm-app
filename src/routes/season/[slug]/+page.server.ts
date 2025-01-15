import { MortyUrqlApi } from '$lib';

export const prerender = true;

const mortyUrqlApi = new MortyUrqlApi();

/** @type {import('./$types').PageServerLoad} */
export async function load(pageData: { params: { slug: string } }) {
	const seasonNumber: number = Number(pageData.params.slug);

	const { episodes, ssr, message } = (await mortyUrqlApi.getSeasonEpisodes(seasonNumber)) || {
		episodes: [],
		ssr: '',
		message: ''
	};

	return { episodeList: episodes, seasonNumber, ssr, message };
}
