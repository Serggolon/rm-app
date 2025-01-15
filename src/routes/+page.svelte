<script>
	import HomeContainer from '../components/containers/home-container';
	import WithLoadingError from '../components/with-loading-error';

	export let data;

	const { message: errorMessage, seasonNumber } = data;
</script>

<WithLoadingError isLoading={false} {errorMessage}>
	<HomeContainer {seasonNumber} />
</WithLoadingError>
