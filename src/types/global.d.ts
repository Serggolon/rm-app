declare global {
	interface Window {
		__URQL_DATA__?: any;
	}
}

export interface Params {
  slug: string;
}

export {};
