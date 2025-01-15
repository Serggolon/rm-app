import { Client, cacheExchange, fetchExchange, ssrExchange } from '@urql/svelte';

import QueryBuilder from './query-builder';

import type { Character, Episode } from '../types';

const queryBuilder = new QueryBuilder();

class MortyUrqlApi {
	#client: Client;
	#ssr: any;

	constructor() {
		const isServerSide = typeof window === 'undefined';

		this.#ssr = ssrExchange({
			isClient: !isServerSide,
			initialState: !isServerSide ? window.__URQL_DATA__ : undefined
		});

		this.#client = new Client({
			url: 'https://rickandmortyapi.com/graphql',
			exchanges: [cacheExchange, this.#ssr, fetchExchange]
		});
	}

	#checkIsError = (error: Error | undefined, message: string): boolean => {
		if (error instanceof Error || typeof error === 'object') {
			console.error(`Error fetching ${message}: `, error.message);

			return true;
		}

		return false;
	};

	public getSeasonNumber = async (): Promise<{ seasonNumber: number; ssr: string; message: string; } | undefined> => {
		try {
			const query = queryBuilder.getSeasons();

			const result = await this.#client.query(query, {}).toPromise();

			const isError = this.#checkIsError(result?.error, 'getSeasonNumber');

			if (isError) {
				return { seasonNumber:0, ssr: '', message: result.error?.message || '' };
			}

			const seasonNumber = result?.data?.episodes.results.length || 0;

			const ssrString = JSON.stringify(this.#ssr.extractData());

			return { seasonNumber, ssr: ssrString, message: '' };
		} catch (error) {
			if (error instanceof Error) {
				this.#checkIsError(error, 'getSeasonNumber');

				return { seasonNumber:0, ssr: '', message: error.message };
			}
		}
	};

	public getSeasonEpisodes = async (
		seasonNumber: number = 1
	): Promise<{ episodes: Episode[]; ssr: string; message: string; } | undefined> => {
		try {
			const query = queryBuilder.getSeasonEpisodes(seasonNumber);

			const result = await this.#client.query(query, {}).toPromise();

			const isError = this.#checkIsError(result?.error, 'getSeasonEpisodes');

			if (isError) {
				return { episodes: [], ssr: '', message: result.error?.message || '' };
			}

			const ssrString = JSON.stringify(this.#ssr.extractData());

			return { episodes: result?.data?.episodes?.results, ssr: ssrString, message: '' };
		} catch (error) {
			if (error instanceof Error) {
				this.#checkIsError(error, 'getSeasonEpisodes');

				return { episodes: [], ssr: '', message: error?.message || '' };
			}
		}
	};

	public getEpisode = async (
		episodeId: string = '1'
	): Promise<{ episode: Episode; ssr: string; message: string; } | undefined> => {
		try {
			const query = queryBuilder.getEpisode(episodeId);

			const result = await this.#client.query(query, {}).toPromise();

			const isError = this.#checkIsError(result?.error, 'getEpisode');

			if (isError) {
				return { episode: {id:'', name:''}, ssr: '', message: result.error?.message || ''};
			}

			const ssrString = JSON.stringify(this.#ssr.extractData());

			return { episode: result?.data?.episode, ssr: ssrString, message: '' };
		} catch (error) {
			if (error instanceof Error) {
				this.#checkIsError(error, 'getEpisode');

				return { episode: {id:'', name:''}, ssr: '', message: error?.message || ''};
			}
		}
	};

	public getCharacter = async (
		characterId: string
	): Promise<{ character: Character; ssr: string; message: string; } | undefined> => {
		try {
			const query = queryBuilder.getCharacterData(characterId);

			const result = await this.#client.query(query, {}).toPromise();

			const isError = this.#checkIsError(result?.error, 'getCharacter');

			if (isError) {
				return { character: {id:'', name:''}, ssr: '', message: result.error?.message || ''};
			}

			const ssrString = JSON.stringify(this.#ssr.extractData());

			return { character: result?.data.character, ssr: ssrString, message: result.error?.message || ''};
		} catch (error) {
			if (error instanceof Error) {
				this.#checkIsError(error, 'getCharacter');

				return { character: {id:'', name:''}, ssr: '', message: error?.message || ''};
			}
		}
	};

	public getSearch = async (
		name: string
	): Promise<any| undefined> => {
		try {
			const query = queryBuilder.getSearchData(name);

			const result = await this.#client.query(query, {}).toPromise();
			const isError = this.#checkIsError(result?.error, 'getSearchData');

			if (isError) {
				return result.error?.message;
			}

			return result.data;
		} catch (error) {
			if (error instanceof Error) {
				this.#checkIsError(error, 'getSearchData');

				return error.message;
			}
		}
	};
}

export default MortyUrqlApi;
