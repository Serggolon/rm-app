<script lang="ts">
	import RickMorty from '../../assets/rick-morty.svelte';
	import SearchFormContainer from '../containers/search-form-container/search-form-container.svelte';
	import SearchForm from '../search-form/search-form.svelte';
</script>

<header>
  <div>
		<a href="/">
			<RickMorty />
		</a>
	</div>

	<nav class="container-fluid">
		<ul>
			<li><a href="/" class="secondary">Home</a></li>
		</ul>
	</nav>

	<SearchFormContainer />
</header>

<style>
	header {
		padding: 8px 20px;
		height: 50px;
		background: white;
		justify-content:space-between;
		text-align: center;
		width: 100%;
		box-shadow: 0 4px 2px -2px #ababab;
		margin-bottom: 10px;
	}

	nav {
		justify-content: flex-start;
	}

	div, ul, li, div > a {
		justify-content: center;
		align-items: center;
	}

	div > a, li > a {
		display: flex;
		cursor: pointer;
	}

	li > a {
		color: #af96f7;
	}
</style>
