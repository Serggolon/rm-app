<script>
	import EpisodeContainer from '../../../../../components/containers/episode-container';
	import WithLoadingError from '../../../../../components/with-loading-error';

	export let data;

	const { episode, message: errorMessage } = data;
</script>

<WithLoadingError isLoading={false} {errorMessage}>
	<EpisodeContainer {episode} />
</WithLoadingError>
