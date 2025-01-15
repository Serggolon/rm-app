import type { Episode } from '../types';

export type Season = {
	[key: number]: Episode[];
};
