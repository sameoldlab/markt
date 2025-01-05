<script lang="ts">
	import type { Agent } from '@atproto/api';

	let { agent }: { agent: Agent } = $props();
	// const feeds = agent.app.bsky.unspecced.getPopularFeedGenerators({ limit: 10 }); */
	let record = agent.com.atproto.repo.getRecord({
		repo: agent.assertDid,
		collection: 'app.bsky.actor.profile',
		rkey: 'self'
	});
	let r2 = agent.app.bsky.actor.getProfile({ actor: agent.assertDid });
</script>

{#await record}
	fetching record...
{:then record}
	{#if record}
		<h1>Hi {record.data.value.displayName}</h1>
	{/if}
{/await}

{#await r2}
	fetching record...
{:then r2}
	{#if r2}
		<h1>Hi {record.data.value.displayName}</h1>
	{/if}
{/await}
