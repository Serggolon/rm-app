class QueryBuilder {
	#wrapBaseString = <T extends string>(query: T): T => `query { ${query} }` as T;

	public getSeasons = (): string => {
		const seasonsQuery = `
        episodes (filter: {episode: "E01"}) {
					results {
						episode
					}
				}`;

		const resultQuery = this.#wrapBaseString(seasonsQuery);

		return resultQuery;
	};

	public getSeasonEpisodes = (seasonNumber: number = 1): string => {
		const seasonEpisodesQuery = `
        episodes(filter: {episode: "S0${seasonNumber}"}) {
							results {
								id
								name
								episode
								characters {
									id
									name
								}
							}
					}`;

		const resultQuery = this.#wrapBaseString(seasonEpisodesQuery);

		return resultQuery;
	};

	public getEpisode = (episodeId: string = '1'): string => {
		const episodeQuery = `
        episode(id: ${episodeId}) {
					id
					name
					episode
					air_date
					characters {
						id
						name
					}
    		}`;

		const resultQuery = this.#wrapBaseString(episodeQuery);

		return resultQuery;
	};

	public getCharacterData = (characterId: string = '1'): string => {
		const characterQuery = `
        character (id: ${characterId}) {
					id
					name
					image
					status
					species
					gender
					episode {
						id
						name
						episode
    		}
  		}`;

		const resultQuery = this.#wrapBaseString(characterQuery);

		return resultQuery;
	};

	public getSearchData = (searchString: string = ''): string => {
		const characterQuery = `
			characters (filter: {name: "${searchString}"}) {
				results {
					id
					name
					}
				}
			episodes (filter: {name: "${searchString}"}) {
				results {
					id
					name
					episode
					}

 		 }`;

		const resultQuery = this.#wrapBaseString(characterQuery);

		return resultQuery;
	};
}

export default QueryBuilder;
