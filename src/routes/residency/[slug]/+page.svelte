<script lang="ts">
	import { page } from '$app/stores';

	const residencies = [
		{ slug: 'argya-dhyaksa', name: 'Argya Dhyaksa', year: '2020', country: 'Indonesia', desc: 'Argya Dhyaksa Nindita. He has interest in beauty in ugliness and silliness. Most of his ceramics forms are rough, ugly chaotically imperfect — wabi sabi. With the idea of wabi sabi in mind, we may learn a great satisfaction in a humble moment. He use pinch technique for personal touch on his ceramic to create a strong identity in the pieces. During his residency at TENTACLES in 2020, Argya developed new works that drew from domestic spaces, urban detritus, and the quiet rituals of daily existence.', images: ['round-frame.png', 'IMG_8604-2-scaled.jpg', 'IMG_7672-scaled.jpg', 'IMG_8475-scaled.jpg', 'IMG_8151-scaled.jpg', 'IMG_7380-scaled.jpg', 'IMG_8611-2-scaled.jpg', 'IMG_8614-2-scaled.jpg', 'IMG_8615-2-scaled.jpg', 'IMG_8616-2-scaled.jpg', 'IMG_8617-2-scaled.jpg', 'IMG_8621-2-scaled.jpg', 'IMG_8627-2-scaled.jpg'], video: 'cZAUncKgT4Q' },
		{ slug: 'ramesh-ramakrishnah', name: 'Ramesh Ramakrishnah', year: '2019', country: 'Mauritius', desc: 'Ramesh Ramakrishnan (RR) is a Photographer, artist and marketer with over three decades of corporate experience in Marketing, Strategy and General Management. Returning to academics in 2018 he graduated with an MA in Asian Art History from Goldsmiths University of London studying in LaSalle College Singapore. During his 2019 residency at TENTACLES, Ramesh examined post-colonial identity, creolisation, and the layered histories of the Indian Ocean region.', images: ['Ramesh-Poster.jpg', '65010206_2177247269233603_7791109973894758400_n-3.jpg', '68776429_436815583847401_5432537629713235968_n.jpg'], video: 'Dw2TW7Flbbk' },
		{ slug: 'li-zhiyong', name: 'Li Zhiyong', year: '2019', country: 'China', desc: 'Li Zhiyong, born in Lufeng, Guangdong, currently lives and works in Guangzhou. Graduated from the Oil Painting Department of the Guangzhou Academy of Fine Arts. He is one of the initiators of the Travel Agency Project. During his 2019 residency, Li merged classical brush techniques with abstract expressionism, creating landscapes that feel both ancient and urgently present.', images: ['mmexport1559127315653-9.jpg', '62840716_2283841451863873_1024527060770488320_o-copy-14.jpg', 'IMG_6645-1.jpg', 'IMG_5470-2-scaled.jpg', 'IMG_5275-2-scaled.jpg', 'IMG_5326-2-scaled.jpg'], video: 'SqC2juMJpgA' },
		{ slug: 'yusuke-shibata', name: 'Yusuke Shibata', year: '2019', country: 'Japan', desc: 'Yusuke Shibata. Born in 1980 in Fukuoka in Japan, currently lives and works in Tokyo. He graduated from Musashino Art University in the major of painting in 2005 and obtained a MFA in Printmaking in Fine Arts at Musashino Art University in 2007. He mainly works in video, photography and sculpture, and creates installation work with them. His works focus on the truthfulness and falsehood of people.', images: ['66050882_880332782328139_3527803587662970880_n.jpg', '23C40FB4-7096-487B-8E3C-2C78B2746819-4-3.jpg', 'IMG_6427-2-scaled.jpg', 'IMG_6507-2-scaled.jpg', 'IMG_6630.jpg', 'IMG_6272-scaled.jpg', 'IMG_6628.jpg', 'IMG_6633.jpg'], video: 'm30ZPUmrCxQ' },
		{ slug: 'ge-yulu', name: 'Ge Yulu', year: '2019', country: 'China', desc: 'Ge Yulu born at Wuhan, Hubei. He undergraduate in Media Art at Hubei Institute of Fine Arts and postgraduate in experimental art at Central Academy of Fine Arts. His recent Professional Experiences include Hic sunt leones, Surplus Space, Wuhan. During his 2019 residency at TENTACLES, Ge incorporated DIY electronics and kinetic elements into installations exploring the entanglement of technology, labour, and everyday life.', images: ['Yulu-cover-copy.png', 'GeYulu-GreatWall-.jpg', '68714219_721305961663839_8334826638562820096_n.jpg'], video: 'SqC2juMJpgA' },
		{ slug: 'magdalena-correa', name: 'Magdalena Correa', year: '2019', country: 'Colombia', desc: 'Magdalena Correa. This residency is kindly supported by The Spanish Embassy in Bangkok. During the months of September 2019, the Chilean artist who has lived in Spain for more than 23 years came to Thailand to portray Bangkok from another perspective. She explores the relationship between humans and the territories they inhabit.', images: ['FOTO-CABRITO.jpg', 'spain2.jpg', '000038.jpeg', '000003.jpeg', '000005.jpeg', '3a0a0b85-fdb9-4547-be09-07cdc7fc0be4-2.jpg', 'eafdb60c-a2cd-4ec5-a91f-b7057953c1b6-2.jpg', '954a5635-af58-42b9-88e9-a6d257b199ba-2.jpg', '71330665-cfd3-4933-b4e3-095e756ed160-3.jpg', '072cd127-9d85-494f-8304-788f41fb12d7-2.jpg'], video: 'yRWQYZMcJuY' },
		{ slug: 'kai-altmann', name: 'Kai Altmann', year: '2019', country: 'USA', desc: 'Kai Altmann (aka Hitashya) is a globally nomadic artist who makes work in conceptually soft-branded "teams" or series which she treats as palettes, identities and states of mind. These teams include many kinds of materials, language and conceptual craft, which she binds together through performance, image-making, music, text, installations, social feeds and video.', images: ['68651630_487348582062404_2058534467277946880_n-copy.png', '72919622_2373831722864845_4228172282440187904_n.jpg', 'tumblr_inline_q0lht8ic3x1qbtion_1280.jpg', 'tumblr_inline_q0lgh6kJln1qbtion_1280.jpg', 'tumblr_inline_ps4uxe0KIa1qbtion_1280.jpg', 'tumblr_inline_q079x3Mgtx1qbtion_1280.jpg', 'tumblr_inline_q079whnA8y1qbtion_1280.jpg', 'tumblr_inline_q0libstrvQ1qbtion_1280.jpg', 'tumblr_inline_q0lhvuk3y51qbtion_1280.jpg'], video: '' },
		{ slug: 'ip-wai-lung', name: 'Ip Wai Lung', year: '2019', country: 'Hong Kong', desc: 'Ip Wai Lung was born in the Guangdong Province, China. He is an artist residing in Hong Kong. In 1996, he moved to Hong Kong with his mother to reunite with his father right before the handover of HK by Britain to China. As an immigrant, identity and social integration has always been an issue. During his 2019 residency, Ip documented the rapid transformation of Bangkok\'s built environment through photography and installation.', images: ['Untitled-1.jpg', '710C35DE-6257-46A3-8EBE-59F8B6A6CC49.jpeg', 'IMG_0150.jpg', 'IMG_0182.jpg', 'AM8B9919-2-scaled.jpg', 'AM8B9911-2-scaled.jpg', 'AM8B9981-2-scaled.jpg', 'AM8B9984-2-scaled.jpg'], video: '' },
{ slug: 'gemini-kim', name: 'Gemini Kim', year: '2019', country: 'South Korea / USA', desc: 'Gemini Kim. Growing up in Korean society with fear of war and militant culture, and as a son of Korean War refugee, with fear of militant culture, post-war and post-colonial became the main interest of his artwork. His art practice is from witnessing and enjoying what every day we consume, scratching the tension between different cultures and nations.', images: ['Kim-scaled.png', 'DSC_0012-scaled.jpg', 'DSC_0011-scaled.jpg', 'DSC_0010-scaled.jpg', '81625893_475903819986241_4402630765922222080_n-scaled.jpg', 'DSC_0021-scaled.jpg', 'DSC_0029-scaled.jpg', 'DSC_0051-scaled.jpg', 'DSC_0056-scaled.jpg', 'DSC_0049-scaled.jpg', 'DSC_0057-scaled.jpg'], video: '' },
		{ slug: 'scott-anderson', name: 'Scott Anderson', year: '2018', country: 'New Zealand', desc: 'Scott Anderson. Scott\'s practice is an ongoing investigation within the expanded field of painting. His work considers place/non-place and transition/flux within urban environments, and how cultural identities influence ones understanding of place. Scott\'s expanded painting practice explores ideas relating to reduction, construction/deconstruction, often using found materials to create spatially ambiguous installations.', images: ['26961959_114631926015939_5030924745817707749_o.png', 'IMG_8156-scaled.jpg', '87173726_2484780585103291_7575464184268193792_o.jpg', 'IMG_8389-scaled.jpg', 'IMG_8391-scaled.jpg', 'IMG_8396-scaled.jpg', 'IMG_8400-scaled.jpg', 'IMG_8406-scaled.jpg'], video: 'Gw_RLD706AA' },
		{ slug: 'abijan-gupta', name: 'Abijan Gupta', year: '2018', country: 'India', desc: 'Indian artist exploring the intersections of technology, craft, and cultural heritage. During his 2018 residency, Gupta revived traditional Indian craft techniques through contemporary digital processes.', images: [], video: '' },
		{ slug: 'jane-cheng', name: 'Jane Q Cheng', year: '2018', country: 'Singapore', desc: 'Singapore-based artist working with textile, installation, and participatory practices. During her 2018 residency at TENTACLES, Cheng created soft sculptures and embroidered works exploring femininity, labour, and the politics of domestic space.', images: ['Jane.png', 'Cheng-Shu-ลูกโป่ง-82x100-1.jpg', 'Cheng-Shu-ลูกโป่ง-82x100-2.jpg', 'Cheng-shu-ผู้หญิงแต่งหน้า-80x120-1.jpg'], video: '' },
		{ slug: 'yeon-jeong', name: 'Yeon Jeong', year: '2018', country: 'South Korea', desc: 'South Korean artist whose work investigates femininity, memory, and material culture. During her 2018 residency, Jeong created intimate installations weaving personal and collective histories through textile, drawing, and found objects.', images: [], video: '' },
		{ slug: 'joned', name: 'Joned', year: '2018', country: 'Thailand', desc: 'Bangkok-based artist working across street art, painting, and public intervention. During his 2018 residency at TENTACLES, Joned created bold graphic works drawing on Thai pop culture, political satire, and urban subcultures.', images: [], video: '' },
		{ slug: 'rar-edition', name: 'RAR Edition', year: '2018', country: 'Thailand', desc: 'A collaborative project exploring artist books, zines, and printed matter as artistic medium. RAR Edition brought together writers, designers, and artists during their 2018 residency to produce experimental publications.', images: [], video: '' },
		{ slug: 'karl-ingar-roys', name: 'Karl Ingar Roys', year: '2018', country: 'Norway', desc: 'Norwegian artist whose work bridges performance, sculpture, and ecological thinking. During his 2018 residency, Roys created durational performances and installation works engaging with natural cycles and environmental degradation.', images: [], video: '' },
		{ slug: 'liuboda', name: 'LiuBoda', year: '2018', country: 'China', desc: 'Chinese painter working with abstraction, gesture, and the language of mark-making. During his 2018 residency at TENTACLES, Liu created large-scale canvases channeling energy and emotion through spontaneous brushwork.', images: [], video: '' },
		{ slug: 'linh-phuong-nguyen', name: 'Linh Phuong Nguyen', year: '2018', country: 'Vietnam', desc: 'Vietnamese artist exploring the poetics of everyday objects through installation and drawing. During her 2018 residency, Nguyen transformed mundane materials into delicate, contemplative works.', images: [], video: '' },
		{ slug: 'sunya', name: 'Sunya', year: '2018', country: 'Thailand', desc: 'Thailand-based artist whose work investigates spiritual ecology and material transformation. During her 2018 residency, Sunya created ritualistic installations meditating on impermanence and the cycle of life.', images: [], video: '' },
		{ slug: 'catherine-ellis', name: 'Catherine Ellis', year: '2018', country: 'USA', desc: 'American artist working across photography, video, and social documentary. During her 2018 residency at TENTACLES, Ellis focused on communities on the margins in Bangkok.', images: ['Catherine-Ellis-Profile-Image.png'], video: '' },
		{ slug: 'ajoon-martia-saputri', name: 'Ajoon Martia Saputri', year: '2017', country: 'Indonesia', desc: 'Indonesian artist exploring gender, myth, and post-colonial identity through drawing and installation. During her 2017 residency at TENTACLES, Saputri created intricate works weaving together Javanese folklore, feminist critique, and personal narrative.', images: ['Ajoon-pdf.jpg'], video: '' },
		{ slug: 'reza-zefanya-mulia', name: 'Reza Zefanya Mulia', year: '2017', country: 'Indonesia', desc: 'Indonesian painter whose figurative works examine youth culture, identity, and social media. During his 2017 residency, Mulia\'s vibrant, candid portraits captured the aspirations and anxieties of Indonesia\'s digital generation.', images: ['Reza-Zefanya-Mulia-pdf.jpg'], video: '' },
		{ slug: 'cyril-shanna', name: 'Cyril & Shanna', year: '2017', country: 'International', desc: 'Collaborative duo working at the intersection of performance, sound, and visual art. During their 2017 residency, their practice explored the politics of listening, the body as instrument, and the spaces between language and music.', images: ['Cyrill-shanna-pdf.jpg'], video: '' },
		{ slug: 'din-chan', name: 'Din Chan', year: '2017', country: 'Thailand', desc: 'Bangkok-based artist whose installation practice explores social narratives and public space. During his 2017 residency, Chan created immersive environments using everyday materials.', images: [], video: '' },
		{ slug: 'flounder-lee', name: 'Flounder Lee', year: '2017', country: 'USA', desc: 'American photographer and educator examining landscape, infrastructure, and environmental change. During his 2017 residency, Lee created large-format photographs documenting the Anthropocene.', images: ['Flounder-pdf.jpg'], video: '' },
		{ slug: 'garima-gupta', name: 'Garima Gupta', year: '2017', country: 'India', desc: 'Indian artist whose work spans printmaking, papermaking, and participatory art processes. During her 2017 residency, Gupta\'s practice was rooted in material experimentation and community engagement.', images: [], video: '' },
		{ slug: 'hernan-salvo', name: 'Hernan Salvo', year: '2017', country: 'Mexico', desc: 'Mexican artist exploring ritual, textile, and the poetics of everyday materials. During his 2017 residency, Salvo created woven installations and sculptural works drawing on pre-Columbian textile traditions.', images: ['Hernan-Salvo-pdf.jpg'], video: '' },
		{ slug: 'ho-rui-an', name: 'Ho Rui An', year: '2017', country: 'Singapore', desc: 'Singaporean artist working across film, drawing, and performance to examine image economies. During his 2017 residency, Ho\'s critically engaged practice unpacked the geopolitics of visual culture.', images: [], video: '' },
		{ slug: 'hiromi-tsuha', name: 'Hiromi Tsuha', year: '2017', country: 'Japan (Okinawa)', desc: 'Japanese artist from Okinawa, working with installation, video, and performance exploring island identity. During her 2017 residency, Tsuha\'s work addressed Okinawa\'s contested history and the resilience of Ryukyuan culture.', images: ['Hiromi-Tsuha-pdf.jpg'], video: '' },
		{ slug: 'justin-loke', name: 'Justin Loke', year: '2017', country: 'Singapore', desc: 'Singaporean painter and installation artist investigating perception, colour, and spatial experience. During his 2017 residency, Loke created abstract works that created immersive chromatic environments.', images: [], video: '' },
		{ slug: 'kate-bae', name: 'Kate Bae', year: '2017', country: 'South Korea', desc: 'South Korean artist working with textile, embroidery, and craft as feminist practice. During her 2017 residency, Bae\'s meticulously sewn works reclaimed women\'s domestic labour as a powerful site of artistic expression.', images: ['Kate-Bae-pdf.jpg', 'Kate_Bae.jpg'], video: '' },
		{ slug: 'yosefa-muhammad', name: 'Yosefa Aulia & Muhammad Vilhamy', year: '2016', country: 'Indonesia', desc: 'Yosefa Aulia & Muhammad Vilhamy. May - June, 2016. ไกลตา ไกลใจ (Out of Sight, Out of Mind) is an art project carried out by Indonesian duo artists in a residency program held by Tentacles x Yet Space, Bangkok. The project is based on the idea of creating a single moment in which photography became the most appropriate medium.', images: ['Yosefa-Muhammad-pdf.jpg'], video: '-_PHexE5TTs' },
		{ slug: 'kong-dara', name: 'Kong Dara', year: '2015', country: 'Cambodia', desc: 'Cambodian artist whose practice spans painting, sculpture, and Khmer cultural heritage. During his 2015 residency at Studio Miu, Dara drew on Angkorian iconography and Buddhist cosmology.', images: ['dara-pdf.jpg', 'Dara-Kong-2.jpeg', 'Dara-Kong1.jpeg'], video: '' },
		{ slug: 'amy-wang', name: 'Amy Wang / Jhong ChengShiu', year: '2015', country: 'Taiwan', desc: 'Taiwanese collaborative duo working across photography, installation, and urban interventions. During their 2015 residency, their practice documented the overlooked textures of city life in Bangkok.', images: ['amy-wang.jpg', 'Amy-pdf.jpg'], video: '' },
		{ slug: 'david-delgado', name: 'David Delgado', year: '2015', country: 'Colombia', desc: 'Colombian artist whose work explores memory, displacement, and material storytelling. During his 2015 residency, Delgado worked with found objects, archival materials, and participatory methods.', images: ['david-pdf.jpg'], video: '' },
		{ slug: 'pohan-chang', name: 'Pohan Chang', year: '2015', country: 'Taiwan', desc: 'Taiwanese artist working with video, installation, and the politics of representation. During his 2015 residency, Chang\'s practice examined the construction of identity through media.', images: ['pohan.jpg', 'Pohan-Chang-pdf.jpg'], video: '' },
	];

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
