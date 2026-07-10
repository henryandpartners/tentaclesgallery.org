<script lang="ts">
	const exhibitions = [
		{ slug: 'facsimile', title: 'Facsimile' },
		{ slug: 'fallen-cycle', title: 'Fallen Cycle' },
		{ slug: 'diversity-via-nature', title: 'Diversity Via Nature: Religion, Gender or Art?' },
		{ slug: 'the-invisible-museum', title: 'The Invisible Museum' },
		{ slug: 'religion-of-mind', title: 'Religion of Mind' },
		{ slug: 'handle-with-care', title: 'Handle with care' },
		{ slug: 'here-i-come-to-save-the-day', title: 'HERE I COME TO SAVE THE DAY' },
		{ slug: 'lintas-batas', title: 'LINTAS-BATAS' },
		{ slug: 'two-young-indonesian-artists', title: 'Two Young Indonesian Artists' },
		{ slug: 'defendant-of-love', title: 'จำเลยรัก — Defendant of Love' },
		{ slug: 'photosynthesis', title: 'PHOTO.SYNTHESIS' },
		{ slug: 'unstable-terrain', title: 'Unstable Terrain', cover: 'Unstable-terrain.png' },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World by Virada Banjurtrungkajorn', cover: 'Three-Cornered-World-1.jpg' },
		{ slug: 'ane-fabricius-christiansen', title: 'Ane Fabricius Christiansen' },
		{ slug: 'in-the-realms-of-the-unreal', title: 'In the realms of the unreal' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note' },
		{ slug: 'little-three-some-flavors-dish', title: 'Little Three Some Flavors Dish' },
	];
</script>

<svelte:head>
	<title>Exhibitions — TENTACLES</title>
</svelte:head>

<div class="container page">
	<div class="section-label">Program</div>
	<h1>Exhibitions</h1>
	<p class="subtitle">Past exhibitions at TENTACLES gallery</p>

	<div class="grid">
		{#each exhibitions as ex}
			<a href="/exhibitions/{ex.slug}" class="card">
				{#if ex.cover}
					<div class="card-cover">
						<img src="/images/exhibitions/{ex.cover}" alt={ex.title} loading="lazy" />
					</div>
				{/if}
				<div class="card-body">
					<h3>{ex.title}</h3>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
	.card {
		display: block;
		border: 1px solid rgba(255,255,255,.06);
		background: rgba(255,255,255,.02);
		transition: all .3s; overflow: hidden;
	}
	.card:hover { border-color: var(--accent); background: rgba(212,160,86,.04); }
	.card-cover { aspect-ratio: 16/10; overflow: hidden; background: var(--dark); }
	.card-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
	.card:hover .card-cover img { transform: scale(1.03); }
	.card-body { padding: 1.25rem; }
	.card h3 { font-size: .95rem; font-weight: 400; color: var(--white); margin: 0; line-height: 1.4; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
