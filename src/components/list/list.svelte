<ul>
  <slot />
</ul>

<style>
	ul {
		width: 100%;
		padding: 16px;
		flex-direction: column;
    overflow-y: scroll;
		height: calc(100vh - 260px);
	}
</style>