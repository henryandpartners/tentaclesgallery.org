<script lang="ts">
	import { page } from '$app/stores';
	import { exhibitions } from '$lib/exhibitions';

	let slug = $derived(($page.url.pathname.match(/\/([\w-]+)\.html$/) ?? [])[1] ?? $page.params.slug);
	let ex = $derived(exhibitions.find(e => e.slug === slug));
</script>

<svelte:head>
	<title>{ex?.title ?? 'Exhibition'} — TENTACLES</title>
</svelte:head>

{#if ex}
	{#if ex.images && ex.images.length > 0}
		<section class="detail-hero">
			<img src="/images/exhibitions/{ex.images[0]}" alt={ex.title} class="detail-hero-img" />
			<div class="detail-hero-overlay"></div>
			<div class="detail-hero-content">
				<div class="section-label">Exhibition · {ex.year}</div>
				<h1>{ex.title}</h1>
				<p class="detail-hero-artist">{ex.artists}</p>
			</div>
		</section>
	{:else}
		<div class="page-header">
			<div class="container narrow">
				<div class="section-label">Exhibition · {ex.year}</div>
				<h1>{ex.title}</h1>
				<p class="subtitle">{ex.artists}</p>
			</div>
		</div>
	{/if}

	<div class="container narrow detail-body">
		<p class="desc">{ex.desc}</p>

		{#if ex.residency}
			<a href="/residency/{ex.residency}" class="residency-link">View {ex.artists.split('&')[0].trim()}&rsquo;s residency →</a>
		{/if}

		{#if ex.video}
			<div class="video-wrapper">
				<iframe src="https://www.youtube.com/embed/{ex.video}" title="YouTube video for {ex.title}" frameborder="0" allowfullscreen></iframe>
			</div>
		{/if}

		{#if ex.images && ex.images.length > 1}
			<div class="gallery">
				{#each ex.images.slice(1) as img}
					<img src="/images/exhibitions/{img}" alt={ex.title} loading="lazy" />
				{/each}
			</div>
		{/if}

		<a href="/exhibitions" class="back-btn">← All exhibitions</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Exhibition not found</h1>
		<p>Slug: {slug}</p>
		<a href="/exhibitions" class="back-btn">← All exhibitions</a>
	</div>
{/if}

<style>
	.detail-hero {
		position: relative;
		min-height: 55vh;
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
		position: relative; z-index: 1;
		padding: 2rem 1.5rem;
		color: #fff;
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
	}
	.detail-hero h1 { font-size: 2.2rem; margin: .5rem 0 .25rem; }
	.detail-hero-artist { font-size: .9rem; opacity: .75; margin: 0; }
	.section-label { font-family: var(--mono); font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; opacity: .7; }

	.page-header { padding: 120px 0 1rem; }
	.subtitle { font-size: .9rem; color: var(--mid-gray); margin-top: .25rem; }

	.narrow { max-width: 720px; }
	.detail-body { padding: 2rem 1.5rem 4rem; }
	.desc { font-size: .95rem; line-height: 1.8; color: var(--dark-gray); margin-bottom: 2rem; }

	.residency-link { display: inline-block; font-family: var(--mono); font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); text-decoration: none; margin: -1rem 0 2rem; }
	.residency-link:hover { text-decoration: underline; }

	.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 2rem; }
	.video-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; }

	.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; }

	@media (max-width: 640px) {
		.detail-hero { min-height: 35vh; }
		.detail-hero h1 { font-size: 1.5rem; }
		.gallery { grid-template-columns: 1fr; }
	}
</style>
