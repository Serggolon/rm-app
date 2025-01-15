<script lang="ts">
	import SeasonContainer from '../../../components/containers/season-container';
	import WithLoadingError from '../../../components/with-loading-error';

	export let data;

	const { episodeList, seasonNumber, message: errorMessage } = data;
</script>

<WithLoadingError isLoading={false} {errorMessage}>
	<SeasonContainer {episodeList} {seasonNumber} />
</WithLoadingError>
