<script lang="ts">
	import { page } from '$app/stores';

	const exhibitions = [
		{ slug: 'facsimile', title: 'Facsimile', date: '2014', artists: 'Group exhibition', desc: 'Facsimile brought together emerging and established artists to examine the theme of reproduction — the copy, the imitation, and the blurred boundary between original and replica in contemporary art. Through paintings, sculptures, and mixed-media installations, the exhibition questioned how reproduction technologies and the politics of replication shape our understanding of authenticity, aura, and artistic value in the digital age. The exhibition marked one of TENTACLES\' first curated group shows at Studio Miu.', images: [], video: '' },
		{ slug: 'fallen-cycle', title: 'Fallen Cycle', date: '2015', artists: 'Group exhibition', desc: 'An exhibition examining cycles of decay and renewal through works by Southeast Asian artists. Drawing on natural and urban ecologies, the works reflect on entropy, regeneration, and the passage of time in a region defined by constant change. The exhibition featured paintings, installations, and site-specific works that engaged with the gallery\'s physical space at Studio Miu.', images: [], video: '' },
		{ slug: 'diversity-via-nature', title: 'Diversity Via Nature: Religion, Gender or Art?', date: '2015', artists: 'Group exhibition', desc: 'A cross-cultural dialogue on how nature informs identity, spirituality, and artistic expression across Southeast Asia. The exhibition brought together artists from diverse backgrounds to examine the intersection of ecology, belief systems, and gender politics. Through paintings, photographs, and installations, each artist presented their unique perspective on how the natural world shapes religious experience, gender identity, and creative practice in the region.', images: [], video: '' },
		{ slug: 'the-invisible-museum', title: 'The Invisible Museum', date: '2016', artists: 'Group exhibition', desc: 'A conceptual exhibition questioning the institutional frameworks of museums and the visibility of underrepresented art practices. Through speculative installations and archival interventions, the participating artists reimagined what a museum could be outside colonial and capitalist structures. The exhibition transformed the gallery into a living archive of alternative histories, proposing new models for preservation, display, and cultural memory.', images: ['the-invisible-museum-1.jpg', 'the-invisible-museum-1-1.jpg'], video: '' },
		{ slug: 'religion-of-mind', title: 'Religion of Mind', date: '2016', artists: 'Group exhibition', desc: 'An exploration of belief systems, consciousness, and the spirituality of thought through multimedia works. The exhibition drew connections between cognitive science, Eastern philosophy, and contemporary artistic practice.', images: ['religion-of-mind.jpg'], video: '' },
		{ slug: 'handle-with-care', title: 'Handle with care', date: '2016', artists: 'Group exhibition', desc: 'A delicate exhibition about fragility, preservation, and the care required in handling art, memory, and relationships. Works incorporated found objects, textiles, and ephemeral materials that spoke to the tenderness of human connection.', images: [], video: '' },
		{ slug: 'here-i-come-to-save-the-day', title: 'HERE I COME TO SAVE THE DAY', date: '2018', artists: 'Ho Rui An (Singapore)', desc: 'A solo exhibition by Singaporean artist Ho Rui An featuring works that critically examine hero narratives, saviour complexes, and the geopolitics of visual culture in contemporary Southeast Asia. Through video, performance, and installation, Ho deconstructed the myth of the singular saviour — from superhero iconography to development discourse — employing humour, irony, and archival research to question who gets to tell whose story and who is cast as the "saviour" in regional politics. The exhibition included a performance lecture and multi-channel video installation, marking Ho\'s first solo presentation in Bangkok.', images: ['For-Rui-An_Almost-there-performance-lecture-01642.jpg', 'horuian.png', 'here-i-come-to-save-day-1.jpg', 'here-i-come-to-save-day-2.jpg'], video: '' },
		{ slug: 'lintas-batas', title: 'LINTAS-BATAS', date: '2017', artists: 'Group exhibition', desc: '"Crossing Borders" — a group exhibition celebrating transnational artistic exchange and hybrid cultural identities. Featuring artists from across Southeast Asia and beyond, the exhibition explored themes of migration, diaspora, and cultural fluidity.', images: ['lintas-batas-1.jpg'], video: '' },
		{ slug: 'two-young-indonesian-artists', title: 'Two Young Indonesian Artists', date: '2017', artists: 'Ajoon Martia Saputri & Reza Zefanya Mulia', desc: 'A dual solo showcase of two emerging voices from Indonesia\'s vibrant contemporary art scene. Ajoon Martia Saputri presented intricate drawings exploring gender, myth, and post-colonial identity through Javanese folklore and feminist critique. Reza Zefanya Mulia exhibited figurative paintings examining youth culture, identity, and social media in contemporary Indonesia.', images: ['two-young-indonesian-1.jpg', 'two-young-indonesian-2.jpg', 'two-young-indonesian-3.jpg', 'two-young-indonesian-4.jpg', 'two-young-indonesian-5.jpg'], video: '' },
		{ slug: 'defendant-of-love', title: 'จำเลยรัก — Defendant of Love', date: '2016', artists: 'Solo exhibition', desc: 'A solo exhibition interrogating love, vulnerability, and the courtroom of human emotion through installation and performance. The artist staged a metaphorical trial where love itself was both prosecutor and defendant, witness and judge.', images: ['2017.03.31_jpg_graphic-logo-จำเลยรัก.jpg'], video: '' },
		{ slug: 'photosynthesis', title: 'PHOTO.SYNTHESIS', date: '2016', artists: 'Group exhibition', desc: 'A photography exhibition exploring light, process, and the alchemy of image-making in the digital age. The exhibition brought together analog and digital photographic practices, examining how light becomes image and how images shape our perception of reality.', images: [], video: '' },
		{ slug: 'unstable-terrain', title: 'Unstable Terrain', date: '2015', artists: 'Group exhibition', desc: 'An exhibition navigating shifting geopolitical and ecological landscapes through the lens of contemporary art practice. Artists responded to the precarity of borders, climates, and communities in an era of unprecedented change.', images: ['Unstable-terrain.png'], video: '' },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World', date: '2016', artists: 'Virada Banjurtrungkajorn', desc: 'Virada Banjurtrungkajorn presented a solo exhibition transforming the gallery into a three-cornered world of intricate drawings, sculptures, and installations. Drawing on Thai folklore, personal mythology, and feminist critique, the artist constructed an immersive universe where the domestic and the cosmic collide.', images: ['Three-Cornered-World-1.jpg', 'Three-Cornered-World-2.jpg', 'Three-Cornered-World-4.jpg', 'Three-Cornered-World-11.jpg', 'Three-Cornered-World-12.jpg', 'Three-Cornered-World-13.jpg', 'Three-Cornered-World-14.jpg', 'Three-Cornered-World-15.jpg', 'Three-Cornered-World-16.jpg', 'Three-Cornered-World-17.jpg', 'Three-Cornered-World-18.jpg', 'Three-Cornered-World-19.jpg'], video: '' },
		{ slug: 'ane-fabricius-christiansen', title: 'Ane Fabricius Christiansen', date: '2017', artists: 'Ane Fabricius Christiansen', desc: 'Danish artist Ane Fabricius Christiansen presented her research-based practice examining archives, memory, and material culture during her residency at TENTACLES. Through installation, photography, and collected objects, she investigated how personal and institutional archives shape our understanding of history.', images: ['L1030169.jpg'], video: '' },
		{ slug: 'in-the-realms-of-the-unreal', title: 'In the realms of the unreal', date: '2015', artists: 'Group exhibition', desc: 'A dreamlike exhibition blurring the lines between reality and imagination through immersive installations and mixed-media works. Inspired by the writings of Henry Darger and other visionary artists, the exhibition created alternate worlds that challenged dominant narratives.', images: [], video: '' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note', date: '2015', artists: 'Solo exhibition', desc: 'A photographic and textual meditation on Bangkok\'s Yaowaraj district (Chinatown), documenting its rhythms, textures, and communities through intimate observation. The artist captured the neighbourhood\'s layered history through black-and-white photography and accompanying hand-written notes.', images: ['yao-wa-raj-76x56-3.jpg'], video: '' },
		{ slug: 'little-three-some-flavors-dish', title: 'Little Three Some Flavors Dish', date: '2015', artists: 'Group exhibition', desc: 'A playful culinary-inspired exhibition mixing three distinct artistic flavours into one conceptual dish. Three artists brought their individual practices together — painting, sculpture, and performance — creating a shared meal of aesthetic experiences.', images: [], video: '' },
	];

	let slug = $derived(($page.url.pathname.match(/\/([\w-]+)\.html$/) ?? [])[1] ?? $page.params.slug);
	let ex = $derived(exhibitions.find(e => e.slug === slug));
</script>

<svelte:head>
	<title>{ex?.title ?? 'Exhibition'} — TENTACLES</title>
</svelte:head>

{#if ex}
	<!-- Hero with first image if available -->
	{#if ex.images && ex.images.length > 0}
		<section class="detail-hero">
			<img src="/images/exhibitions/{ex.images[0]}" alt={ex.title} class="detail-hero-img" />
			<div class="detail-hero-overlay"></div>
			<div class="detail-hero-content">
				<div class="section-label">Exhibition · {ex.date}</div>
				<h1>{ex.title}</h1>
				<p class="detail-hero-artist">{ex.artists}</p>
			</div>
		</section>
	{:else}
		<div class="page-header">
			<div class="container narrow">
				<div class="section-label">Exhibition · {ex.date}</div>
				<h1>{ex.title}</h1>
				<p class="subtitle">{ex.artists}</p>
			</div>
		</div>
	{/if}

	<div class="container narrow detail-body">
		<p class="desc">{ex.desc}</p>

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
		<p style="margin-top:1rem">Slug: {slug}</p>
		<a href="/exhibitions" class="back-btn">← All exhibitions</a>
	</div>
{/if}

<style>
	/* Hero with image */
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

	/* Text-only header */
	.page-header { padding: 120px 0 2rem; }

	.detail-body { padding: 3rem 1.5rem 5rem; }
	.desc { font-size: .95rem; line-height: 1.7; color: var(--dark-gray); margin-bottom: 2rem; }

	.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
	.gallery img { width: 100%; height: auto; border: 1px solid var(--light-gray); }

	.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 2rem; border: 1px solid var(--light-gray); }
	.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

	@media (max-width: 640px) {
		.gallery { grid-template-columns: 1fr; }
	}
</style>
