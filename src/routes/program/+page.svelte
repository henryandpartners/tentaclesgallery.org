<script lang="ts">
	const programs = [
		{ slug: 'the-tip', title: 'The Tip', year: '2015', cover: '/images/projects/thetip-%E0%B8%9C%E0%B8%94%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%99-last-edited.jpg', desc: 'Artist-run storefront space and curatorial platform in Bangkok, hosting experimental exhibitions, performances, and collaborations.' },
		{ slug: 'tentacles-tv', title: 'TENTACLES TV', year: '2017', cover: '/images/projects/2017.08.07_create-jpg_fb-event-banner-TV-project.jpg', desc: 'Community television broadcasting artist interviews, studio visits, video works, and behind-the-scenes content from the Bangkok art scene.' },
		{ slug: 'ugly-pages', title: 'Ugly Pages', year: '2015', cover: '/images/projects/ugly-pages.jpg', desc: 'Independently published zine series featuring raw, unpolished artworks, writings, and experimental page layouts from emerging artists.' },
		{ slug: 'project-mural', title: '#projectmural', year: '2015', cover: '/images/projects/projectmural.jpg', desc: 'Public art initiative commissioning large-scale murals across Bangkok, transforming urban spaces through site-responsive interventions.' },
		{ slug: 'queer-readers', title: 'Queer Readers Bangkok', year: '2016', cover: '/images/program/queer-reader.jpg', desc: 'A reading group and public programme exploring queer theory, gender studies, and LGBTQ+ literature through regular discussions and events.' },
		{ slug: 'online-party', title: 'Online Party', year: '2020', cover: '/images/projects/Online-Party.jpg', desc: 'A virtual exhibition and music party connecting artists and audiences during pandemic isolation via Microsoft Teams.' },
	];
</script>

<svelte:head>
	<title>Program — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Program</div>
		<h1>Program</h1>
		<p class="subtitle">Exhibitions, residencies, initiatives, and public programmes.</p>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each programs as p}
			<a href="/program/{p.slug}" class="card">
				<div class="card-cover">
					<img src={p.cover} alt={p.title} loading="lazy" />
				</div>
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
	.card-body { padding: 1.25rem; }
	.card-yr { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .3rem; }
	.card-body h3 { font-size: .95rem; font-weight: 500; color: var(--black); margin: 0 0 .4rem; line-height: 1.35; }
	.card-desc { font-size: .8rem; color: var(--mid-gray); line-height: 1.5; margin: 0; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
