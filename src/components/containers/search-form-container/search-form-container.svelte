<script lang="ts">
	// import { queryStore, gql, getContextClient, Client } from '@urql/svelte';
	import { goto } from '$app/navigation';
	import { searchResults } from '../../../store';

	import SearchForm from '../../search-form/search-form.svelte';
	import { MortyUrqlApi } from '$lib';

	const mortyUrqlApi = new MortyUrqlApi();

	let searchValue: string = '';
	let isSubmitActive: boolean = true;
	let errorMessage: string = '';

	// let client: Client;

	// $:searchResult = queryStore({
	// 		client:getContextClient(),
	// 		query: gql`
	// 			query { episodes (filter: {name: ${query}}) {
	// 				results {
	// 					episode
	//           }
	//         }
	// 			}
	// 		`
	// 	});

	const handleSubmit = async (
		event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
	): Promise<void> => {
		try {
			isSubmitActive = false;
			errorMessage = '';

			const formData = new FormData(event.target as HTMLFormElement);
			const query = formData.get('query') as string;

			if (query.trim().length < 3) {
				errorMessage = 'Searh string should has at list 3 symbols';

				isSubmitActive = true;
				
				return;
			}

			const {
				characters: { results: characters },
				episodes: { results: episodes }
			} = await mortyUrqlApi.getSearch(query);
			// @ts-ignore
			searchResults.set({ characters, episodes }), goto('/search');

			isSubmitActive = true;
		} catch (error) {
			if (error instanceof Error) {
				console.log('error.message', error.message);
				isSubmitActive = true;
			}
		}
	};
</script>

<SearchForm {handleSubmit} {searchValue} {isSubmitActive} {errorMessage} />
