<script lang="ts">
	import { page } from '$app/stores';

	import { residencies } from '$lib/residencies';

	let slug = $derived(($page.url.pathname.match(/\/([\w-]+)\.html$/) ?? [])[1] ?? $page.params.slug);
	let res = $derived(residencies.find(r => r.slug === slug));
</script>

<svelte:head>
	<title>{res?.name ?? 'Resident'} — TENTACLES</title>
</svelte:head>

{#if res}
	<!-- Hero with first image if available -->
	{#if res.images && res.images.length > 0}
		<section class="detail-hero">
			<img src="/images/residency/{res.images[0]}" alt={res.name} class="detail-hero-img" />
			<div class="detail-hero-overlay"></div>
			<div class="detail-hero-content">
				<div class="section-label">Residency · {res.year}</div>
				<h1>{res.name}</h1>
				<p class="detail-hero-artist">{res.country}</p>
			</div>
		</section>
	{:else}
		<div class="page-header">
			<div class="container narrow">
				<div class="section-label">Residency · {res.year}</div>
				<h1>{res.name}</h1>
				<p class="subtitle">{res.country}</p>
			</div>
		</div>
	{/if}

	<div class="container narrow detail-body">
		{#if res.desc}
			<p class="desc">{res.desc}</p>
		{/if}

		{#if res.video}
			<div class="video-wrapper">
				<iframe src="https://www.youtube.com/embed/{res.video}" title="YouTube video for {res.name}" frameborder="0" allowfullscreen></iframe>
			</div>
		{/if}

		{#if res.images && res.images.length > 1}
			<div class="gallery">
				{#each res.images.slice(1) as img}
					<img src="/images/residency/{img}" alt={res.name} loading="lazy" />
				{/each}
			</div>
		{/if}

		<a href="/residency" class="back-btn">← All residents</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Resident not found</h1>
		<p style="margin-top:1rem">Slug: {slug}</p>
		<a href="/residency" class="back-btn">← All residents</a>
	</div>
{/if}

<style>
	.detail-hero {
		position: relative;
		min-height: 50vh;
		display: flex;
		align-items: flex-end;
		background: var(--black);
		overflow: hidden;
	}
	.detail-hero-img {
		position: absolute; inset: 0;
		width: 100%; height: 100%;
		object-fit: cover;
		opacity: .55;
	}
	.detail-hero-overlay {
		position: absolute; inset: 0;
		background: linear-gradient(to top, rgba(26,26,26,.85) 0%, rgba(26,26,26,.2) 60%, rgba(26,26,26,.4) 100%);
	}
	.detail-hero-content {
		position: relative; z-index: 2;
		padding: 5rem 1.5rem 3rem;
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
	}
	.detail-hero-content .section-label,
	.detail-hero-content h1 { color: var(--white); }
	.detail-hero-content .section-label::before { background: var(--accent); }
	.detail-hero-artist { font-family: var(--mono); font-size: .75rem; color: var(--accent); }

	.page-header { padding: 120px 0 2rem; }

	.detail-body { padding: 3rem 1.5rem 5rem; }
	.desc { font-size: .95rem; line-height: 1.7; color: var(--dark-gray); margin-bottom: 2rem; }

	.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; border: 1px solid var(--light-gray); }

	.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 2rem; border: 1px solid var(--light-gray); }
	.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

	@media (max-width: 640px) { .gallery { grid-template-columns: 1fr; } }
</style>
