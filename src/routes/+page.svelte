<script lang="ts">
	import { client } from '$lib/initializeClient';
	import { agent } from '$lib/agent.svelte';

	import Statusphere from './statusphere.svelte';
	/* const agent = new BskyAgent({
		service: 'https://api.bsky.app'
	});
	// const feeds = agent.app.bsky.unspecced.getPopularFeedGenerators({ limit: 10 }); */

	let username = $state('');
	const signin = async (e: SubmitEvent) => {
		e.preventDefault();
		await client.signIn(username);
	};
</script>

{#if agent.value === null}
	<form onsubmit={signin}>
		<label>
			username
			<input type="text" required name="handle" bind:value={username} />
		</label>
		<button type="submit">Log In</button>
	</form>
{:else}
	<Statusphere agent={agent.value} />
{/if}
