<script>
	import CharacterContainer from '../../../components/containers/character-container';
	import WithLoadingError from '../../../components/with-loading-error';

	export let data;

	const { character, message:errorMessage } = data;
</script>

<WithLoadingError isLoading ={false} {errorMessage}>
	<CharacterContainer {character}/>
</WithLoadingError>


