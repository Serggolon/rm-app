import type { Episode, Season } from '../types';

export default (episodeList: Episode[]) => {
	const seasons: Season = {};

	episodeList.forEach((item) => {
		const { episode } = item;

		const match = episode.match(/^S(\d+)E/);

		const seasonNumber = match ? Number(match[1]) : 0;

		if (!seasons[seasonNumber]) {
			seasons[seasonNumber] = [];
		}

		seasons[seasonNumber].push(item);
	});

	return seasons;
};
