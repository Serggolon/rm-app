import type { Episode, QueryInfo } from "../types";

import { MortyUrqlApi } from '$lib';

const getAllEpisodes = async (mortyUrqlApi: MortyUrqlApi): Promise<Episode[] | undefined> => {
  try {
    const result: Episode[] = [];

    let nextPage: number | null = 1;

    while (nextPage) {
      const pageData: { info: QueryInfo; results: Episode[] } | undefined =
        await mortyUrqlApi.getEpisodes(nextPage);

      if (pageData) {
        result.push(...pageData?.results);

        nextPage = pageData?.info?.next;
      }
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getAllEpisodes;
