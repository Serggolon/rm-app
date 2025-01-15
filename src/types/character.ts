import type { Episode } from "./episode";

export type Character = {
	id: string;
	name: string;
	image?: string;
	species?: string;
	status?: string;
	gender?: string;
  episode?: Episode[]
};
