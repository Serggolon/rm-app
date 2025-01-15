import { MortyUrqlApi } from '$lib';

import type { Episode } from '../../../../../types';

export const prerender = true;

const mortyUrqlApi = new MortyUrqlApi();

/** @type {import('./$types').PageLoad} */
export async function load(pageData: { params: { slug: string } }) {
	const episodId = pageData?.params?.slug;

	const { episode, ssr, message } = (await mortyUrqlApi.getEpisode(episodId)) || { episode: {} as Episode, ssr: '', message: '' };

	return { episode, ssr, message };
}
