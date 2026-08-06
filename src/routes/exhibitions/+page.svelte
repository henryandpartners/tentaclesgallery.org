<script lang="ts">
	interface Exhibition {
		slug: string; title: string; year: string; artists: string;
		desc: string; images: string[]; video: string;
	}

	const exhibitions: Exhibition[] = [
		{ slug: 'facsimile', title: 'Facsimile', year: '2019', artists: 'Ge Yulu', desc: 'Facsimile. 30 August – 4 September 2562. Opening: Friday 30th August 2019, 6:00 p.m. Location: Tentacles Gallery, N22. Artist: Ge Yulu (Artist in residency program). Facsimile is the important method for art study by reproducing the artwork to study the technique and taking time to understanding that artwork. Facsimile exhibition presented the artwork of Ge Yulu while he is in Artist in Residency Program at TENTACLES.', images: [], video: 'Tz-62_akEh0' },
		{ slug: 'fallen-cycle', title: 'Fallen Cycle', year: '2019', artists: 'Titirat Skultantimayta & Sornrapat Patharakorn', desc: 'Fallen Cycle by Titirat Skultantimayta (Tian) and Sornrapat Patharakorn (Sorn). Opening: 15 September 2019. Exhibition Period: 15 September – 6 October 2019 at TENTACLES Gallery, N22, Bangkok. An exhibition examining the cycles of construction and decay in urban and natural environments, presented through paintings and installations.', images: ['01_fb_event_cover-1024x385.jpg'], video: '' },
		{ slug: 'the-invisible-museum', title: 'The Invisible Museum', year: '2018', artists: 'Group exhibition', desc: 'A conceptual exhibition questioning the institutional frameworks of museums and the visibility of underrepresented art practices. Through speculative installations and archival interventions, the participating artists reimagined what a museum could be outside colonial and capitalist structures.', images: ['the-invisible-museum-1.jpg', 'the-invisible-museum-1-1.jpg'], video: '' },
		{ slug: 'religion-of-mind', title: 'Religion of Mind', year: '2018', artists: 'Group exhibition', desc: 'Religion of Mind — An exhibition exploring the relationship between religious belief systems and the human mind, featuring works by Natthaphon Chaiworawat and others that examine spirituality, consciousness, and the psychological dimensions of faith through contemporary art practice.', images: ['religion-of-mind.jpg', 'religion-of-mind-install-1.jpg', 'religion-of-mind-install-2.jpg', 'religion-of-mind-53.jpg'], video: '' },
		{ slug: 'handle-with-care', title: 'Handle with care', year: '2018', artists: 'Group exhibition', desc: 'A delicate exhibition about fragility, preservation, and the care required in handling art, memory, and relationships. Works incorporated found objects, textiles, and ephemeral materials.', images: [], video: '' },
		{ slug: 'here-i-come-to-save-the-day', title: 'HERE I COME TO SAVE THE DAY', year: '2018', artists: 'Ho Rui An (Singapore)', desc: 'A solo exhibition by Singaporean artist Ho Rui An critically examining hero narratives, saviour complexes, and the geopolitics of visual culture in Southeast Asia. Through video, performance, and installation, Ho deconstructed the myth of the singular saviour.', images: ['For-Rui-An_Almost-there-performance-lecture-01642.jpg', 'horuian.png', 'here-i-come-to-save-day-1.jpg', 'here-i-come-to-save-day-2.jpg'], video: '' },
		{ slug: 'lintas-batas', title: 'LINTAS-BATAS', year: '2017', artists: 'Group exhibition', desc: '"Crossing Borders" — a group exhibition celebrating transnational artistic exchange and hybrid cultural identities. Featuring artists from across Southeast Asia and beyond, exploring themes of migration, diaspora, and cultural fluidity.', images: ['lintas-batas-1.jpg'], video: '' },
		{ slug: 'two-young-indonesian-artists', title: 'Two Young Indonesian Artists at Tentacles', year: '2017', artists: 'Ajoon Martia Saputri & Reza Zefanya Mulia', desc: 'A dual solo showcase of two emerging voices from Indonesia\'s contemporary art scene. Ajoon Martia Saputri presented intricate drawings exploring gender, myth, and post-colonial identity through Javanese folklore and feminist critique. Reza Zefanya Mulia exhibited figurative paintings examining youth culture and identity in contemporary Indonesia.', images: ['two-young-indonesian-1.jpg', 'two-young-indonesian-2.jpg', 'two-young-indonesian-3.jpg', 'two-young-indonesian-4.jpg', 'two-young-indonesian-5.jpg'], video: '' },
		{ slug: 'defendant-of-love', title: 'จำเลยรัก — Defendant of Love', year: '2017', artists: 'Solo exhibition', desc: 'A solo exhibition interrogating love, vulnerability, and the courtroom of human emotion through installation and performance. The artist staged a metaphorical trial where love itself was both prosecutor and defendant.', images: ['2017.03.31_jpg_graphic-logo-จำเลยรัก.jpg'], video: '' },
		{ slug: 'diversity-via-nature', title: 'Diversity Via Nature: Religion, Gender or Art?', year: '2016', artists: 'Group exhibition', desc: 'A cross-cultural dialogue on how nature informs identity, spirituality, and artistic expression across Southeast Asia, examining the intersection of ecology, belief systems, and gender politics.', images: [], video: '' },
		{ slug: 'photosynthesis', title: 'PHOTO.SYNTHESIS', year: '2016', artists: 'Group exhibition', desc: 'A photography exhibition exploring light, process, and the alchemy of image-making in the digital age, bringing together analog and digital photographic practices.', images: ['photosynthesis-1.jpg', 'photosynthesis-2.jpg', 'photosynthesis-3.jpg'], video: '' },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World', year: '2016', artists: 'Virada Banjurtrungkajorn', desc: 'Virada Banjurtrungkajorn solo exhibition transforming the gallery into a three-cornered world of intricate drawings, sculptures, and installations. Drawing on Thai folklore, personal mythology, and feminist critique, the artist constructed an immersive universe where the domestic and the cosmic collide.', images: ['Three-Cornered-World-1.jpg', 'Three-Cornered-World-2.jpg', 'Three-Cornered-World-4.jpg', 'Three-Cornered-World-11.jpg', 'Three-Cornered-World-12.jpg', 'Three-Cornered-World-13.jpg', 'Three-Cornered-World-14.jpg', 'Three-Cornered-World-15.jpg', 'Three-Cornered-World-16.jpg', 'Three-Cornered-World-17.jpg', 'Three-Cornered-World-18.jpg', 'Three-Cornered-World-19.jpg'], video: '' },
		{ slug: 'defendant-of-love-2016', title: 'จำเลยรัก — Defendant of Love', year: '2016', artists: 'Solo exhibition', desc: 'Earlier edition of the Defendant of Love series, staged as a performance-lecture exploring the emotional architecture of romantic relationships through installation and participatory elements.', images: [], video: '' },
		{ slug: 'unstable-terrain', title: 'Unstable Terrain', year: '2015', artists: 'Group exhibition', desc: 'An exhibition navigating shifting geopolitical and ecological landscapes through contemporary art. Artists responded to the precarity of borders, climates, and communities in an era of unprecedented change.', images: ['Unstable-terrain.png'], video: '' },
		{ slug: 'in-the-realms-of-the-unreal', title: 'In the realms of the unreal', year: '2015', artists: 'Group exhibition', desc: 'A dreamlike exhibition blurring the lines between reality and imagination through immersive installations and mixed-media works. Inspired by visionary artists, the exhibition created alternate worlds that challenged dominant narratives.', images: [], video: '' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note', year: '2015', artists: 'Solo exhibition', desc: 'A photographic and textual meditation on Bangkok\'s Yaowaraj district (Chinatown), documenting its rhythms, textures, and communities through intimate black-and-white photography and hand-written notes.', images: ['yao-wa-raj-76x56-3.jpg'], video: '' },
		{ slug: 'little-three-some-flavors-dish', title: 'Little Three Some Flavors Dish', year: '2015', artists: 'Group exhibition', desc: 'A playful culinary-inspired exhibition mixing three distinct artistic flavours — painting, sculpture, and performance — into one conceptual "dish" of aesthetic experiences.', images: [], video: '' },
		{ slug: 'ane-fabricius-christiansen', title: 'Ane Fabricius Christiansen', year: '2017', artists: 'Ane Fabricius Christiansen', desc: 'Danish artist Ane Fabricius Christiansen presented her research-based practice examining archives, memory, and material culture during her residency at TENTACLES. Through installation, photography, and collected objects.', images: ['L1030169.jpg'], video: '' },
	];

	const grouped = $derived.by(() => {
		const years: Record<string, Exhibition[]> = {};
		for (const ex of exhibitions) {
			if (!years[ex.year]) years[ex.year] = [];
			years[ex.year].push(ex);
		}
		const sorted = Object.entries(years).sort(([a], [b]) => Number(b) - Number(a));
		return sorted;
	});
</script>

<svelte:head>
	<title>Exhibitions — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Exhibitions</div>
		<h1>Exhibitions</h1>
	</div>
</div>

<div class="container">
	{#each grouped as [year, exs]}
		<div class="year-section">
			<h2 class="year-heading">{year}</h2>
			<div class="grid">
				{#each exs as ex}
					<a href="/exhibitions/{ex.slug}" class="card">
						<div class="card-cover">
							{#if ex.images.length > 0}
								<img src="/images/exhibitions/{ex.images[0]}" alt={ex.title} loading="lazy" />
							{:else}
								<div class="card-cover-placeholder">
									<span class="placeholder-icon">◈</span>
								</div>
							{/if}
						</div>
						<div class="card-body">
							<h3>{ex.title}</h3>
							<p class="card-artist">{ex.artists}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.page-header { padding: 120px 0 2rem; }

	.year-section { margin-bottom: 3rem; }
	.year-heading {
		font-family: var(--mono);
		font-size: .7rem;
		letter-spacing: .15em;
		text-transform: uppercase;
		color: var(--accent);
		margin: 0 0 1rem;
		padding-bottom: .5rem;
		border-bottom: 1px solid var(--light-gray);
	}

	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
	.card { display: block; border: 1px solid var(--light-gray); background: var(--white); transition: all .3s; overflow: hidden; }
	.card:hover { border-color: var(--accent); box-shadow: 0 2px 20px rgba(0,0,0,.06); }
	.card-cover { aspect-ratio: 16/10; overflow: hidden; background: var(--off-white); }
	.card-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
	.card:hover .card-cover img { transform: scale(1.04); }
	.card-cover-placeholder { display: flex; align-items: center; justify-content: center; height: 100%; }
	.placeholder-icon { font-size: 2rem; color: var(--light-gray); }
	.card-body { padding: 1rem; }
	.card-body h3 { font-size: .9rem; font-weight: 500; color: var(--black); margin: 0 0 .25rem; line-height: 1.35; }
	.card-artist { font-size: .75rem; color: var(--mid-gray); margin: 0; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
