<li>
  <slot />
</li>

<style>
  li {
    width: 100%;
    align-items: center;
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		border-radius: 8px;
  }

  li:nth-child(odd) {
		background: rgb(238, 238, 238);
	}

	li:hover {
		background: rgb(180, 155, 253);
		color: white;
	}

  li:not(:last-child) {
    margin-bottom: 4px;
  }
</style>