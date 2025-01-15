<script lang="ts">
  export let handleSubmit: (event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement}) => Promise<void>

	export let searchValue: string = '';
	export let isSubmitActive: boolean = true;
  export let errorMessage: string = '';

</script>

<form method="POST" on:submit|preventDefault={handleSubmit}>
	<div>
		<input
			type="text"
			name="query"
			bind:value={searchValue}
			placeholder="Search"
			required
			aria-label="Search episodes and characters"
		/>
		<button type="submit" disabled={!isSubmitActive}>Submit</button>
	</div>
	{#if (!!errorMessage)}
		<p>{errorMessage}</p>
	{/if}
</form>

<style>
	form {
    flex-direction: column;
	}
	input {
		padding: 5px 10px;
		border: 1px solid rgb(165, 165, 165);
		border-radius: 4px;
		box-shadow: inset 0px 2px 2px rgba(114, 113, 113, 0.49);
	}

	input:hover {
		border: 1px solid rgb(121, 80, 242);
		box-shadow: inset 0px 4px 7px rgba(121, 80, 242, 0.3);
		cursor: pointer;
	}

	input:focus {
		border: 1px solid rgb(121, 80, 242);
		box-shadow: inset 0px 4px 7px rgba(121, 80, 242, 0.3);
		outline: none;
	}

	button {
		color: white;
		background: rgb(121, 80, 242);
		margin-left: 8px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #ccc;
		color: #666;
		cursor: not-allowed;
		transform: none;
	}

  p {
    font-size: 12px;
    color: red;
  }
</style>
