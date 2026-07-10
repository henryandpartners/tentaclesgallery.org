<script lang="ts">
	const projects = [
		{ slug: 'online-party', title: 'Online Party' },
		{ slug: 'tentacles-tv', title: 'TENTACLES TV' },
		{ slug: 'the-art-of-surviving', title: 'ศิลป์อยู่เป็น — The Art of Surviving in the Arts' },
		{ slug: 'taichung-asean-exchange', title: 'Taichung ASEAN Square Cultural Exchange Project' },
		{ slug: 'thetip', title: 'TheTip' },
		{ slug: 'projectmural', title: '#Projectmural' },
		{ slug: 'ugly-pages', title: 'Ugly Pages' },
	];
</script>

<svelte:head>
	<title>Projects — TENTACLES</title>
</svelte:head>

<div class="container page">
	<div class="section-label">Projects</div>
	<h1>Projects</h1>
	<p class="subtitle">Initiatives, collaborations, and creative works</p>

	<div class="grid">
		{#each projects as p}
			<a href="/projects/{p.slug}" class="card">
				<h3>{p.title}</h3>
			</a>
		{/each}
	</div>
</div>

<style>
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
	.card {
		display: block; padding: 1.5rem;
		border: 1px solid rgba(255,255,255,.06);
		background: rgba(255,255,255,.02);
		transition: all .25s;
	}
	.card:hover { border-color: var(--accent); background: rgba(212,160,86,.06); }
	.card h3 { font-size: .95rem; font-weight: 400; color: var(--white); margin: 0; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
