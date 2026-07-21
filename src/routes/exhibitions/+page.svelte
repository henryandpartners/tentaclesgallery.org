<script lang="ts">
	const exhibitions = [
		{ slug: 'facsimile', title: 'Facsimile', year: '2014', cover: '', desc: 'Group exhibition examining reproduction, copy, and the boundary between original and replica.' },
		{ slug: 'fallen-cycle', title: 'Fallen Cycle', year: '2015', cover: '', desc: 'Group exhibition on cycles of decay and renewal through Southeast Asian art.' },
		{ slug: 'diversity-via-nature', title: 'Diversity Via Nature: Religion, Gender or Art?', year: '2015', cover: '', desc: 'Cross-cultural dialogue on nature, identity, spirituality, and artistic expression.' },
		{ slug: 'the-invisible-museum', title: 'The Invisible Museum', year: '2016', cover: 'the-invisible-museum-1.jpg', desc: 'Conceptual exhibition questioning institutional frameworks of museums.' },
		{ slug: 'religion-of-mind', title: 'Religion of Mind', year: '2016', cover: 'religion-of-mind.jpg', desc: 'Exploring belief systems, consciousness, and the spirituality of thought.' },
		{ slug: 'handle-with-care', title: 'Handle with care', year: '2016', cover: '', desc: 'A delicate exhibition about fragility, preservation, and care.' },
		{ slug: 'here-i-come-to-save-the-day', title: 'HERE I COME TO SAVE THE DAY', year: '2018', cover: 'For-Rui-An_Almost-there-performance-lecture-01642.jpg', desc: 'Ho Rui An — a critical examination of hero narratives and saviour complexes.' },
		{ slug: 'lintas-batas', title: 'LINTAS-BATAS', year: '2017', cover: 'lintas-batas-1.jpg', desc: '"Crossing Borders" — transnational artistic exchange and hybrid cultural identities.' },
		{ slug: 'two-young-indonesian-artists', title: 'Two Young Indonesian Artists', year: '2017', cover: 'two-young-indonesian-1.jpg', desc: 'Ajoon Martia Saputri & Reza Zefanya Mulia — emerging voices from Indonesia.' },
		{ slug: 'defendant-of-love', title: 'จำเลยรัก — Defendant of Love', year: '2016', cover: '2017.03.31_jpg_graphic-logo-จำเลยรัก.jpg', desc: 'A solo exhibition on love, vulnerability, and the courtroom of human emotion.' },
		{ slug: 'photosynthesis', title: 'PHOTO.SYNTHESIS', year: '2016', cover: '', desc: 'Photography exhibition exploring light, process, and the alchemy of image-making.' },
		{ slug: 'unstable-terrain', title: 'Unstable Terrain', year: '2015', cover: 'Unstable-terrain.png', desc: 'Navigating shifting geopolitical and ecological landscapes.' },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World', year: '2016', cover: 'Three-Cornered-World-1.jpg', desc: 'Virada Banjurtrungkajorn — intricate drawings, sculptures, and installations.' },
		{ slug: 'ane-fabricius-christiansen', title: 'Ane Fabricius Christiansen', year: '2017', cover: 'L1030169.jpg', desc: 'Research-based practice examining archives, memory, and material culture.' },
		{ slug: 'in-the-realms-of-the-unreal', title: 'In the realms of the unreal', year: '2015', cover: '', desc: 'A dreamlike exhibition blurring reality and imagination.' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note', year: '2015', cover: 'yao-wa-raj-76x56-3.jpg', desc: 'A photographic meditation on Bangkok\'s Yaowaraj district.' },
		{ slug: 'little-three-some-flavors-dish', title: 'Little Three Some Flavors Dish', year: '2015', cover: '', desc: 'A playful culinary-inspired exhibition mixing three artistic flavours.' },
	];
</script>

<svelte:head>
	<title>Exhibitions — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Program</div>
		<h1>Exhibitions</h1>
		<p class="subtitle">Past exhibitions at TENTACLES — from 2014 to today.</p>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each exhibitions as ex}
			<a href="/exhibitions/{ex.slug}" class="card">
				{#if ex.cover}
					<div class="card-cover">
						<img src="/images/exhibitions/{ex.cover}" alt={ex.title} loading="lazy" />
					</div>
				{:else}
					<div class="card-cover card-cover-placeholder">
						<span class="placeholder-icon">◈</span>
					</div>
				{/if}
				<div class="card-body">
					<span class="card-yr">{ex.year}</span>
					<h3>{ex.title}</h3>
					<p class="card-desc">{ex.desc}</p>
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
