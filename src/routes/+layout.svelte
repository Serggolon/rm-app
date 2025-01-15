<script lang="ts">
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import {
		Client,
		cacheExchange,
		fetchExchange,
		ssrExchange,
		setContextClient
	} from '@urql/svelte';

	import ContentWrapper from '../components/content-wrapper';
	import Header from '../components/header';
	import Footer from '../components/footer/footer.svelte';

	import QueryBuilder from '$lib/query-builder';

	if (typeof window !== 'undefined' && $page.data) {
		window.__URQL_DATA__ = JSON.parse($page.data.ssr);

		const isServerSide = typeof window === 'undefined';

		const ssr = ssrExchange({
			isClient: !isServerSide,
			initialState: !isServerSide ? window.__URQL_DATA__ : undefined
		});

		const client = new Client({
			url: 'https://rickandmortyapi.com/graphql',
			exchanges: [cacheExchange, ssr, fetchExchange]
		});

		const queryBuilder = new QueryBuilder();

		setContextClient(client);
		setContext('queryBuilder', queryBuilder);
	}
</script>

<ContentWrapper>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</ContentWrapper>

<style>
	main {
		padding-bottom: 60px;
		height: calc(100vh - 180px);
		background: rgb(250,250,250);
		border: 1px solid white;
		border-radius: 8px;
		box-shadow: inset 0px 2px 2px rgba(114, 113, 113, 0.49);
	}
</style>
