<script lang="ts">
  export let headerName:string ='';
  export let headerMessage:string ='';
  export let headerVariant:'h1' | 'h2' = 'h1';
</script>

<header>
  {#if headerVariant === 'h1'}
    <h1>{headerName}</h1>
    {:else}
    <h2>{headerName}</h2>

    <hr />

    <p>{headerMessage}</p>
  {/if}
</header>

<style>
  header {
    width: 100%;
    padding-bottom: 16px;
    flex-direction: column;
  }

  hr {
		border: none;
		color: linear-gradient(#faa46b, #ef1f86);
		background: linear-gradient(#faa46b, #ef1f86);
		height: 1px;
		width: 100%;
		transform: rotate(180deg);
	}

  h1 {
		font-size: 28px;
		color: #333;
		background-color: #f9f9f9;
		border-radius: 8px;
		width: 100%;
		justify-content: center;
	}

	h2 {
		font-size: 20px;
	}

  p {
    font-size: 14px;
  }
</style>