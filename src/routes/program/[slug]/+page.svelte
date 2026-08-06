<script lang="ts">
	import { page } from '$app/stores';

	const programs = [
		{ slug: 'the-tip', title: 'The Tip', year: '2015', desc: 'An artist-run storefront space and curatorial platform in Bangkok, The Tip hosted experimental exhibitions, performances, and collaborative projects at the intersection of contemporary art and everyday urban life. Located in a small commercial unit, the space became a testing ground for emerging curators and artists to present works outside conventional gallery contexts.', cover: '/images/projects/thetip-%E0%B8%9C%E0%B8%94%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%99-last-edited.jpg', images: ['/images/projects/thetip-1.jpg', '/images/projects/thetip-2.jpg', '/images/projects/thetipp-card-photo.jpg'], video: '' },
		{ slug: 'tentacles-tv', title: 'TENTACLES TV', year: '2017', desc: 'TENTACLES TV was a community television project that broadcast artist interviews, studio visits, video works, and behind-the-scenes content from the Bangkok contemporary art scene. The project aimed to make contemporary art accessible to wider audiences through public broadcast and online streaming, documenting the vibrant artistic community around N22 and beyond.', cover: '/images/projects/2017.08.07_create-jpg_fb-event-banner-TV-project.jpg', images: ['/images/projects/tentacles-tv-1.jpg', '/images/projects/tentacles-tv-2.jpg', '/images/projects/tentacles-tv-3.jpg', '/images/projects/tentacles-tv-4.jpg'], video: '' },
		{ slug: 'ugly-pages', title: 'Ugly Pages', year: '2015', desc: 'An independently published zine series that embraced raw, unpolished aesthetics. Each issue featured experimental page layouts, hand-drawn illustrations, photocollages, and writings from emerging and established artists. The series became a platform for artistic expression outside the polish of commercial publishing, celebrating the beauty of imperfection.', cover: '/images/projects/ugly-pages.jpg', images: [], video: '' },
		{ slug: 'project-mural', title: '#projectmural', year: '2015', desc: 'A public art initiative commissioning large-scale mural works across Bangkok\'s urban landscape. #projectmural transformed neglected walls and public surfaces into sites of creative expression, engaging communities in dialogue about public space, identity, and belonging. Each mural was site-responsive, developed in collaboration with local residents and businesses.', cover: '/images/projects/projectmural.jpg', images: ['/images/projects/projectmural-1.jpg', '/images/projects/projectmural-2.jpg', '/images/projects/projectmural-3.jpg', '/images/projects/projectmural-4.jpg', '/images/projects/projectmural-5.jpg'], video: '' },
		{ slug: 'queer-readers', title: 'Queer Readers Bangkok', year: '2016', desc: 'A reading group and public programme exploring queer theory, gender studies, and LGBTQ+ literature through regular discussions, film screenings, and public events. Queer Readers Bangkok created a safe space for dialogue around sexuality, identity, and representation in the Thai context, building community through shared reading and critical conversation.', cover: '/images/program/queer-reader.jpg', images: [], video: '' },
		{ slug: 'online-party', title: 'Online Party', year: '2020', desc: 'A virtual exhibition and music party held during pandemic isolation, connecting artists and audiences through Microsoft Teams. The Online Party reimagined the gallery experience for a socially distanced world, featuring live performances, digital artworks, and interactive elements.', cover: '/images/projects/Online-Party.jpg', images: [], video: '' },
	];

	let slug = $derived($page.params.slug);
	let prog = $derived(programs.find(p => p.slug === slug));
</script>

<svelte:head>
	<title>{prog?.title ?? 'Program'} — TENTACLES</title>
</svelte:head>

{#if prog}
	<section class="detail-hero" style="background-image: url({prog.cover})">
		<div class="detail-hero-overlay"></div>
		<div class="detail-hero-content">
			<div class="section-label">Program · {prog.year}</div>
			<h1>{prog.title}</h1>
		</div>
	</section>

	<div class="container narrow detail-body">
		<p class="desc">{prog.desc}</p>

		{#if prog.video}
			<div class="video-wrapper">
				<iframe src="https://www.youtube.com/embed/{prog.video}" title="YouTube video for {prog.title}" frameborder="0" allowfullscreen></iframe>
			</div>
		{/if}

		{#if prog.images && prog.images.length > 0}
			<div class="gallery">
				{#each prog.images as img}
					<img src={img} alt={prog.title} loading="lazy" />
				{/each}
			</div>
		{/if}

		<a href="/program" class="back-btn">← All programs</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Program not found</h1>
		<a href="/program" class="back-btn">← All programs</a>
	</div>
{/if}

<style>
	.detail-hero {
		position: relative;
		min-height: 50vh;
		display: flex;
		align-items: flex-end;
		background-size: cover;
		background-position: center;
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
	.detail-hero h1 { font-size: 2.2rem; margin: .5rem 0 0; }
	.section-label { font-family: var(--mono); font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; opacity: .7; }

	.narrow { max-width: 720px; }
	.detail-body { padding: 2rem 1.5rem 4rem; }
	.desc { font-size: .95rem; line-height: 1.8; color: var(--dark-gray); margin-bottom: 2rem; }

	.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 2rem; }
	.video-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; }

	.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; }

	@media (max-width: 640px) {
		.detail-hero { min-height: 35vh; }
		.detail-hero h1 { font-size: 1.5rem; }
		.gallery { grid-template-columns: 1fr; }
	}
</style>
