<script lang="ts">
	import { page } from '$app/stores';

	const projects = [
		{ slug: 'online-party', title: 'Online Party' },
		{ slug: 'tentacles-tv', title: 'TENTACLES TV' },
		{ slug: 'the-art-of-surviving', title: 'ศิลป์อยู่เป็น — The Art of Surviving in the Arts' },
		{ slug: 'taichung-asean-exchange', title: 'Taichung ASEAN Square Cultural Exchange Project' },
		{ slug: 'thetip', title: 'TheTip' },
		{ slug: 'projectmural', title: '#Projectmural' },
		{ slug: 'ugly-pages', title: 'Ugly Pages' },
	];

	let p = $derived(projects.find(p => p.slug === $page.params.slug));
</script>

<svelte:head>
	<title>{p?.title ?? 'Project'} — TENTACLES</title>
</svelte:head>

<div class="container page narrow">
	{#if p}
		<div class="section-label">Project</div>
		<h1>{p.title}</h1>
		<a href="/projects" class="back">&larr; All projects</a>
	{:else}
		<h1>Project not found</h1>
		<a href="/projects" class="back">&larr; All projects</a>
	{/if}
</div>
