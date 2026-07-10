<script lang="ts">
	import { page } from '$app/stores';

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
		{ slug: 'unstable-terrain', title: 'Unstable Terrain', cover: 'Unstable-terrain.png', images: ['Unstable-terrain.png'] },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World by Virada Banjurtrungkajorn', cover: 'Three-Cornered-World-1.jpg', images: ['Three-Cornered-World-1.jpg', 'Three-Cornered-World-2.jpg', 'Three-Cornered-World-4.jpg'] },
		{ slug: 'ane-fabricius-christiansen', title: 'Ane Fabricius Christiansen' },
		{ slug: 'in-the-realms-of-the-unreal', title: 'In the realms of the unreal' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note' },
		{ slug: 'little-three-some-flavors-dish', title: 'Little Three Some Flavors Dish' },
	];

	let ex = $derived(exhibitions.find(e => e.slug === $page.params.slug));
</script>

<svelte:head>
	<title>{ex?.title ?? 'Exhibition'} — TENTACLES</title>
</svelte:head>

<div class="container page narrow">
	{#if ex}
		<div class="section-label">Exhibition</div>
		<h1>{ex.title}</h1>

		{#if ex.images}
			<div class="gallery">
				{#each ex.images as img}
					<img src="/images/exhibitions/{img}" alt={ex.title} loading="lazy" />
				{/each}
			</div>
		{/if}

		<a href="/exhibitions" class="back">&larr; All exhibitions</a>
	{:else}
		<h1>Exhibition not found</h1>
		<a href="/exhibitions" class="back">&larr; All exhibitions</a>
	{/if}
</div>

<style>
	.narrow { max-width: 800px; }
	.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; border: 1px solid rgba(255,255,255,.06); }
</style>
