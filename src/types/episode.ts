import type { Character } from "./character";

export type Episode = {
	id: string;
	name: string;
	episode?: string;
	air_date?: string;
	characters?: Character[];
};
