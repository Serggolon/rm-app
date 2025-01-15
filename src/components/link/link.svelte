<script lang="ts">
	export let href: string = '/';
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		width: 100%;
		cursor: pointer;
		display: flex;
		text-decoration: underline;
		color: rgb(180, 155, 252);
		padding: 12px 16px;
	}

	a:hover {
		color: white;
	}
</style>
