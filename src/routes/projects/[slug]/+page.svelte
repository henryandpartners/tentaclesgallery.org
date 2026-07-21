<script lang="ts">
	import { page } from '$app/stores';

	const projects = [
		{
			slug: 'online-party', title: 'Online Party', date: '2020',
			desc: 'A virtual exhibition and social platform connecting artists and audiences during pandemic isolation, featuring live-streamed performances, digital installations, and interactive experiences. Conceived as a response to the global shutdown of physical gallery spaces in 2020, Online Party created a vibrant ecosystem for artistic exchange in the digital realm — hosting everything from DJ sets and poetry readings to interactive net art, VR exhibitions, and live-streamed studio tours.',
			images: ['Online-Party.jpg'], video: ''
		},
		{
			slug: 'tentacles-tv', title: 'TENTACLES TV', date: '2017',
			desc: 'A community television initiative broadcasting artist interviews, studio visits, and experimental video works to Bangkok audiences. Operating at the intersection of public access television and independent art programming, TENTACLES TV brought contemporary art into living rooms across the city. Each episode featured in-depth conversations with artists, behind-the-scenes studio footage, and curated short films.',
			images: ['2017.08.07_create-jpg_fb-event-banner-TV-project.jpg', 'TV-2-light-on-close-up.jpg', '002_Full_Product-01.-09..jpg', '003_Full_Product-10.-17..jpg'], video: ''
		},
		{
			slug: 'the-art-of-surviving', title: 'ศิลป์อยู่เป็น — The Art of Surviving in the Arts', date: '2016',
			desc: 'A public dialogue series exploring the economic and social realities of sustaining an arts practice in contemporary Thailand. Co-organised with the Bangkok Art and Culture Centre (BACC), the series brought together artists, curators, economists, and policy makers to discuss topics ranging from alternative funding models to mental health.',
			images: [], video: ''
		},
		{
			slug: 'taichung-asean-exchange', title: 'Taichung ASEAN Square Cultural Exchange Project', date: '2016',
			desc: 'An international exchange bringing together artists from Taiwan and ASEAN countries for collaborative research, production, and exhibition. Centred on the ASEAN Square district in Taichung — a hub of Southeast Asian migrant communities — the project facilitated cross-cultural dialogue through artist residencies, community workshops, and a culminating exhibition.',
			images: [], video: ''
		},
		{
			slug: 'thetip', title: 'TheTip', date: '2015',
			desc: 'An artist-run space and curatorial platform operating from a small storefront in Bangkok, hosting experimental exhibitions, events, and international artist exchanges. TheTip served as a launchpad for emerging artists and curators, prioritising raw experimentation over polished production. With its street-level storefront on Soi Narathiwas 22, the space became a meeting point for the city\'s underground art scene.',
			images: ['The-Tip.jpg', 'thetip-ผดุงเกียรติและมาวิน-last-edited.jpg', 'thetipp-card-photo.jpg'], video: ''
		},
		{
			slug: 'projectmural', title: '#Projectmural', date: '2015',
			desc: 'A public art initiative commissioning large-scale murals across Bangkok, transforming urban spaces into sites of creative expression. Working with both established and emerging muralists from Thailand and abroad, #Projectmural brought colour and conversation to neglected walls, underpasses, and community spaces throughout the city.',
			images: ['projectmural.jpg', 'projectmural-1.jpg', 'projectmural-2.jpg'], video: ''
		},
		{
			slug: 'ugly-pages', title: 'Ugly Pages', date: '2015',
			desc: 'An independently published zine series featuring raw, unpolished artworks and writings from emerging Southeast Asian artists. Rejecting the aesthetic conventions of the commercial art world, Ugly Pages celebrated the crude, the unfinished, and the deliberately awkward. Each issue was handmade and photocopied, distributed through a grassroots network of independent bookstores, cafes, and art spaces.',
			images: ['ugly-pages.jpg'], video: ''
		},
	];

	let slug = $derived(($page.url.pathname.match(/\/([\w-]+)\.html$/) ?? [])[1] ?? $page.params.slug);
	let p = $derived(projects.find(p => p.slug === slug));
</script>

<svelte:head>
	<title>{p?.title ?? 'Project'} — TENTACLES</title>
</svelte:head>

{#if p}
	{#if p.images && p.images.length > 0}
		<section class="detail-hero">
			<img src="/images/projects/{p.images[0]}" alt={p.title} class="detail-hero-img" />
			<div class="detail-hero-overlay"></div>
			<div class="detail-hero-content">
				<div class="section-label">Project · {p.date}</div>
				<h1>{p.title}</h1>
			</div>
		</section>
	{:else}
		<div class="page-header">
			<div class="container narrow">
				<div class="section-label">Project · {p.date}</div>
				<h1>{p.title}</h1>
			</div>
		</div>
	{/if}

	<div class="container narrow detail-body">
		<p class="desc">{p.desc}</p>

		{#if p.video}
			<div class="video-wrapper">
				<iframe src="https://www.youtube.com/embed/{p.video}" title="YouTube video for {p.title}" frameborder="0" allowfullscreen></iframe>
			</div>
		{/if}

		{#if p.images && p.images.length > 1}
			<div class="gallery">
				{#each p.images.slice(1) as img}
					<img src="/images/projects/{img}" alt={p.title} loading="lazy" />
				{/each}
			</div>
		{/if}

		<a href="/projects" class="back-btn">← All projects</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Project not found</h1>
		<p style="margin-top:1rem">Slug: {slug}</p>
		<a href="/projects" class="back-btn">← All projects</a>
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
		margin: 0 auto; width: 100%;
	}
	.detail-hero-content .section-label,
	.detail-hero-content h1 { color: var(--white); }
	.detail-hero-content .section-label::before { background: var(--accent); }

	.page-header { padding: 120px 0 2rem; }

	.detail-body { padding: 3rem 1.5rem 5rem; }
	.desc { font-size: .95rem; line-height: 1.7; color: var(--dark-gray); margin-bottom: 2rem; }

	.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; border: 1px solid var(--light-gray); }

	.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 2rem; border: 1px solid var(--light-gray); }
	.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

	@media (max-width: 640px) { .gallery { grid-template-columns: 1fr; } }
</style>
