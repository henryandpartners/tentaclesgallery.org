<script lang="ts">
	const projects = [
		{ slug: 'online-party', title: 'Online Party', year: '2020', cover: 'Online-Party.jpg', desc: 'A virtual exhibition connecting artists and audiences during pandemic isolation.' },
		{ slug: 'tentacles-tv', title: 'TENTACLES TV', year: '2017', cover: '2017.08.07_create-jpg_fb-event-banner-TV-project.jpg', desc: 'Community television broadcasting artist interviews, studio visits, and video works.' },
		{ slug: 'the-art-of-surviving', title: 'ศิลป์อยู่เป็น — The Art of Surviving in the Arts', year: '2016', cover: '', desc: 'Public dialogue series on the economic realities of arts practice in Thailand.' },
		{ slug: 'taichung-asean-exchange', title: 'Taichung ASEAN Square Project', year: '2016', cover: '', desc: 'International exchange between Taiwanese and ASEAN artists.' },
		{ slug: 'thetip', title: 'TheTip', year: '2015', cover: 'The-Tip.jpg', desc: 'Artist-run space and curatorial platform in a Bangkok storefront.' },
		{ slug: 'projectmural', title: '#Projectmural', year: '2015', cover: 'projectmural.jpg', desc: 'Public art initiative commissioning large-scale murals across Bangkok.' },
		{ slug: 'ugly-pages', title: 'Ugly Pages', year: '2015', cover: 'ugly-pages.jpg', desc: 'Independently published zine series featuring raw, unpolished artworks.' },
	];
</script>

<svelte:head>
	<title>Projects — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Projects</div>
		<h1>Projects</h1>
		<p class="subtitle">Initiatives, collaborations, and creative works.</p>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each projects as p}
			<a href="/projects/{p.slug}" class="card">
				{#if p.cover}
					<div class="card-cover">
						<img src="/images/projects/{p.cover}" alt={p.title} loading="lazy" />
					</div>
				{:else}
					<div class="card-cover card-cover-placeholder">
						<span class="placeholder-icon">◈</span>
					</div>
				{/if}
				<div class="card-body">
					<span class="card-yr">{p.year}</span>
					<h3>{p.title}</h3>
					<p class="card-desc">{p.desc}</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.page-header { padding: 120px 0 2rem; }

	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem; padding-bottom: 5rem; }
	.card { display: block; border: 1px solid var(--light-gray); background: var(--white); transition: all .3s; overflow: hidden; }
	.card:hover { border-color: var(--accent); box-shadow: 0 2px 20px rgba(0,0,0,.06); }
	.card-cover { aspect-ratio: 16/9; overflow: hidden; background: var(--off-white); }
	.card-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
	.card:hover .card-cover img { transform: scale(1.04); }
	.card-cover-placeholder { display: flex; align-items: center; justify-content: center; }
	.placeholder-icon { font-size: 2rem; color: var(--light-gray); }
	.card-body { padding: 1.25rem; }
	.card-yr { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .3rem; }
	.card-body h3 { font-size: .95rem; font-weight: 500; color: var(--black); margin: 0 0 .4rem; line-height: 1.35; }
	.card-desc { font-size: .8rem; color: var(--mid-gray); line-height: 1.5; margin: 0; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
