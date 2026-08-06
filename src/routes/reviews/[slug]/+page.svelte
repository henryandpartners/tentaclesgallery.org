<script lang="ts">
	import { page } from '$app/stores';

	const reviews = [
		{
			slug: 'review-you-never-really-know-people-even-the-ones-you-love-future-factory-bangkok',
			title: 'You Never Really Know People Even The Ones You Love @ Future Factory Bangkok',
			date: 'March 29, 2018',
			author: 'By Woraporn Pong',
			content: '"You Never Really Know People Even The Ones You Love" group exhibition featuring:\n\nNakrob Moonmanas\nManeerat Thamnarak\nNutdao Kerdparn\nOrada Lelanuja\nVorakorn Ruetaivanichkul\nKriangkrai Kongkhanun\nSuwatchai Jakpum\nNarissara Pianwimungsa\nPrawit Lumcharoen\nPaphonsak La-Or\nPongsatorn Sriphet (Deer)\nMinthita Thanakornvoravej\nPisitakun Kuntalang\nChol Janeratchakul\nTintin Cooper\nHenry Tan\n\nCurated by Chol Janepraphaphan, the exhibition ran from 6 October 2017 to 18 March 2018 at Future Factory, Bangkok.\n\nA group exhibition about the impossibility of truly knowing anyone — even those closest to us. Through diverse media, seventeen artists explored the masks we wear, the stories we tell, and the irreducible gap between perception and reality in human relationships.',
			images: []
		},
		{
			slug: 'review-early-years-project-1-thisorder',
			title: 'EARLY YEARS PROJECT #1: Thisorder @ TENTACLES',
			date: 'March 23, 2018',
			author: '',
			content: 'Early Years Project #1: Thisorder was an exhibition at TENTACLES Gallery by Thasnai Sethaseree.\n\nThasnai Sethaseree presented a site-specific installation questioning the order of things — social hierarchies, political structures, and the arbitrary nature of systems we take for granted. Through layered visual strategies that blend text, image, and found objects, Sethaseree created a space where language and power are deconstructed.\n\nThe exhibition was part of the Early Years Project series, which invited established artists to develop new works at TENTACLES, engaging with the gallery\'s unique spatial and conceptual context.',
			images: []
		},
		{
			slug: 'review-displaced-bacc-by-jakkai-siributr',
			title: 'Displaced @ BACC by Jakkai Siributr',
			date: 'March 2018',
			author: '',
			content: 'A review of Jakkai Siributr\'s exhibition "Displaced" at Bangkok Art and Culture Centre (BACC).\n\nJakkai Siributr is one of Thailand\'s leading contemporary textile artists, known for his intricate embroidered and tapestry works that address issues of displacement, identity, and social justice. "Displaced" continued his examination of marginalized communities, particularly the Rohingya crisis and stateless peoples across Southeast Asia.\n\nThrough meticulously hand-stitched works that blend traditional craft with contemporary political commentary, Siributr gives voice to the voiceless. The exhibition featured large-scale textile installations incorporating found objects, clothing, and embroidered narratives collected from refugee communities.',
			images: []
		},
		{
			slug: 'review-human-alienation',
			title: 'Human AlieNation',
			date: '2018',
			author: '',
			content: 'Human AlieNation was a group exhibition at TENTACLES exploring themes of alienation in contemporary society. The exhibition examined how technology, urbanization, and social fragmentation create new forms of disconnection even as we become more interconnected than ever.\n\nThrough painting, installation, video, and performance, participating artists investigated the paradox of modern alienation — the feeling of being a stranger in one\'s own city, the isolation of digital connectivity, and the estrangement from nature and community that characterizes much of contemporary urban life.',
			images: []
		},
		{
			slug: 'review-another-world',
			title: 'Another World',
			date: '2018',
			author: 'By Henry Tan',
			content: 'Another World was an exhibition presented at TENTACLES Gallery, bringing together artists whose works imagine alternative realities, parallel universes, and utopian/dystopian futures.\n\nThrough science fiction aesthetics, speculative design, and world-building practices, the exhibition asked what "another world" might look like — and whether art can help us envision and build it. Participating artists worked across digital media, installation, and painting to construct immersive environments that challenged viewers to question the world they inhabit.',
			images: []
		},
		{
			slug: 'review-erwin-wurm-the-philosophy-of-instructions',
			title: 'Erwin Wurm: The Philosophy of Instructions',
			date: '2018',
			author: '',
			content: 'A review of Austrian artist Erwin Wurm\'s work and his "Philosophy of Instructions" — an examination of his iconic One Minute Sculptures and participatory art practice.\n\nErwin Wurm has redefined sculpture through his "One Minute Sculptures," where participants follow written or drawn instructions to create temporary, often absurd sculptural poses with everyday objects. The work blurs the line between performer and viewer, sculpture and performance, permanence and ephemerality.\n\nThis review connects Wurm\'s practice to broader questions about instructions as an artistic medium, the role of audience participation, and the philosophical implications of art that exists only as long as someone chooses to perform it.',
			images: []
		},
		{
			slug: 'review-ruin',
			title: 'Ruin by Pannaphan Yodmanee',
			date: '2018',
			author: 'By Romtham Srinaram',
			content: 'A review of Pannaphan Yodmanee\'s "Ruin" — an exhibition exploring themes of decay, memory, and the passage of time through mixed-media paintings and installations.\n\nPannaphan Yodmanee creates works that appear archaeological — layered surfaces built from cement, paint, found materials, and architectural fragments that suggest ruins both ancient and contemporary. Her practice merges painting with construction, creating three-dimensional wall works that hover between image and object.\n\nThe exhibition "Ruin" examined what remains after destruction — physical remnants, cultural memory, and the stories embedded in broken things. Through her distinctive material language, Yodmanee asked viewers to consider ruin not as ending but as a site of potential meaning.',
			images: []
		},
		{
			slug: 'review-the-game-viet-nam-by-le-brothers',
			title: 'The Game | Viet Nam by LE Brothers',
			date: '2017',
			author: '',
			content: 'The Game | Viet Nam was a performance and video installation by Vietnamese artist duo LE Brothers (Le Ngoc Thanh and Le Duc Hai), presented at TENTACLES.\n\nBorn in 1975 in Quang Binh, Vietnam, the twin brothers have developed a collaborative practice spanning performance, video, and installation. "The Game | Viet Nam" explored themes of duality, conflict, and reconciliation through choreographed performances where the brothers engage in ritualized confrontations — neither winning nor losing, but endlessly negotiating.\n\nDrawing on personal and national histories, the work reflects on the Vietnam War\'s legacy and the ongoing process of healing and identity formation in contemporary Vietnamese society.',
			images: []
		},
		{
			slug: 'review-krung-thep-bangkok-venice-biennale-2017-by-somboon-hormtientong',
			title: 'Krung Thep Bangkok @ Venice Biennale 2017 by Somboon Hormtientong',
			date: '2017',
			author: '',
			content: 'A review of Somboon Hormtientong\'s presentation at the Venice Biennale 2017, where the artist represented Bangkok through a multimedia installation exploring the city\'s layered identities.\n\nSomboon Hormtientong is known for his critical examinations of urban space, architecture, and the politics of representation. His Venice Biennale work "Krung Thep Bangkok" deconstructed the mythology of Bangkok as a tourist paradise, revealing instead a complex metropolis shaped by inequality, rapid development, and contested histories.\n\nThrough video, photography, and architectural models, Hormtientong mapped the invisible borders and power structures that define contemporary Bangkok.',
			images: []
		},
		{
			slug: 'review-alive-bangkok-city-city-gallery-by-alex-face',
			title: 'ALIVE @ Bangkok CityCity Gallery by Alex Face',
			date: '2017',
			author: '',
			content: 'A review of Thai street artist Alex Face\'s exhibition "ALIVE" at Bangkok CityCity Gallery.\n\nAlex Face (Patcharapol Tangruen) is one of Thailand\'s most recognized contemporary artists, famous for his iconic three-eyed child character that appears in murals across Bangkok and internationally. The character — wearing an old-fashioned baby costume with a worried expression — has become a symbol of anxiety about the future and the weight placed on younger generations.\n\n"ALIVE" brought the artist\'s street sensibility into the gallery context, featuring paintings, sculptures, and installations that expanded the world of the three-eyed child while reflecting on themes of parenthood, ecology, and social responsibility.',
			images: []
		},
		{
			slug: 'review-occasionally-utiliity',
			title: 'Occasionally Utility',
			date: '2017',
			author: '',
			content: 'A review of "Occasionally Utility" — an exhibition examining the boundary between functional objects and art, utility and aesthetics.\n\nThe exhibition brought together artists and designers whose works occupy the ambiguous space between tool and sculpture. Functional objects were reimagined as aesthetic statements; artworks were repurposed as practical items. Through furniture, lighting, containers, and hybrid objects, "Occasionally Utility" questioned the categorical distinctions we draw between the useful and the beautiful.',
			images: []
		},
		{
			slug: 'review-no-regret-exhibition',
			title: 'No Regret @ Cartel Artspace by Anchalii Anantawat',
			date: '2017',
			author: '',
			content: 'A review of Anchalii Anantawat\'s exhibition "No Regret" at Cartel Artspace, Bangkok.\n\nAnchalii Anantawat presented a deeply personal body of work examining memory, loss, and the impossibility of regret as a productive emotion. Through intimate paintings and mixed-media works, the artist explored how memories transform over time — how painful experiences become integrated into identity, and how the act of making art can be a process of acceptance rather than resolution.\n\nThe exhibition was noted for its emotional honesty and the delicate balance between vulnerability and formal control in Anantawat\'s visual language.',
			images: []
		},
		{
			slug: 'review-photosynthesis-at-tentacles-by-%e0%b8%ad%e0%b8%a0%e0%b8%b4%e0%b8%8a%e0%b8%8d%e0%b8%b2-%e0%b9%84%e0%b8%ab%e0%b8%a1%e0%b8%97%e0%b8%b4%e0%b8%a1',
			title: 'Photosynthesis at Tentacles by Apichaya Hmaitim',
			date: '2017',
			author: 'By Apichaya Hmaitim',
			content: 'A review of the PHOTO.SYNTHESIS exhibition at TENTACLES Gallery.\n\nPhotosynthesis was a photography exhibition exploring light, process, and the alchemy of image-making in the digital age. The exhibition brought together artists working across analog and digital photographic practices, examining how light becomes image and how images shape our perception of reality.\n\nThrough experimental techniques, alternative processes, and conceptual approaches to the photographic medium, the artists in PHOTO.SYNTHESIS questioned photography\'s relationship to truth, memory, and representation in an era of image saturation.',
			images: []
		},
		{
			slug: 'review-novel-without-a-name-%e0%b9%82%e0%b8%94%e0%b8%a2-%e0%b8%aa%e0%b8%b8%e0%b8%97%e0%b8%98%e0%b8%b4%e0%b8%a3%e0%b8%b1%e0%b8%95%e0%b8%99%e0%b9%8c-%e0%b8%a8%e0%b8%b8%e0%b8%a0%e0%b8%9b',
			title: 'Novel Without a Name by Sutthirat Supaparinya',
			date: '2017',
			author: '',
			content: 'A review of "Novel Without a Name" at TENTACLES Gallery.\n\nSutthirat Supaparinya is a Chiang Mai-based artist working across video, installation, and new media, examining the intersection of personal and political memory in contemporary Thailand. Her work often addresses suppressed histories, state violence, and the mechanisms by which narratives are constructed and controlled.\n\n"Novel Without a Name" continued Supaparinya\'s investigation into the gaps between official history and lived experience, drawing on literary forms — the novel and its conventions — to frame an installation that couldn\'t be contained by a single story or perspective.',
			images: []
		},
		{
			slug: 'lreviewl-brand-new2016-bugbangkok-university-gallery',
			title: 'BRAND NEW 2016 @ BUG (Bangkok University Gallery)',
			date: '2016',
			author: '',
			content: 'A review of BRAND NEW 2016, an annual showcase of emerging artists at Bangkok University Gallery (BUG).\n\nBRAND NEW is one of Thailand\'s most important platforms for young and emerging artists, regularly introducing new voices to the contemporary art scene. The 2016 edition featured a diverse range of practices — from painting and sculpture to video, installation, and performance — reflecting the concerns and aesthetics of a new generation of Thai artists.\n\nThe review examines standout works from the exhibition and considers what the selection reveals about the trajectory of contemporary art practice in Thailand.',
			images: []
		},
		{
			slug: 'review-caravaggio-%e0%b8%95%e0%b8%a3%e0%b8%b2%e0%b8%9a%e0%b8%b2%e0%b8%9b%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b8%aa%e0%b8%b3%e0%b9%80%e0%b8%99%e0%b8%b2-%e0%b9%82%e0%b8%94%e0%b8%a2-%e0%b8%a3%e0%b9%88',
			title: 'Caravaggio: ตราบาปของสำเนา โดย ร่มธรรม ศรีนาม',
			date: '2016',
			author: 'By Romtham Srinaram',
			content: 'A review examining the Caravaggio exhibition in Bangkok — "Caravaggio: ตราบาปของสำเนา" (The Sin of the Copy).\n\nThis review by Romtham Srinaram critically examines questions of originality, authenticity, and reproduction raised by an exhibition of Caravaggio\'s works in Bangkok. The text explores how Baroque master Caravaggio\'s dramatic chiaroscuro and radical realism speak across centuries, and what it means to experience his work through reproductions and copies.\n\nThe review connects Baroque art historical concerns to contemporary questions about the aura of artworks, the role of museums, and the experience of viewing "masterpieces" in a non-Western context.',
			images: []
		},
		{
			slug: 'review-un-official-%e0%b8%a0%e0%b8%b2%e0%b8%9e%e0%b8%96%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b8%9a%e0%b8%99%e0%b9%80%e0%b8%a7%e0%b8%97%e0%b8%b5%e0%b8%a5%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%81%e0%b8%b2',
			title: '(Un)official: ภาพถ่ายบนเวทีละครการทูต โดย ร่มธรรม ศรีนาม',
			date: '2016',
			author: 'By Romtham Srinaram',
			content: 'A review by Romtham Srinaram examining the relationship between photography, theatre, and diplomacy — "(Un)official: Photography on the Stage of Diplomatic Theatre."\n\nThis critical essay explores how photography operates within diplomatic contexts — as documentation, propaganda, and performance. Drawing on examples from international relations and visual culture, the review considers how images construct and contest official narratives, and how the stagecraft of diplomacy is inseparable from its visual representation.\n\nThe text offers a sophisticated reading of the political function of images in an era of soft power, photo opportunities, and mediated international relations.',
			images: []
		},
	];

	let slug = $derived($page.params.slug);
	let review = $derived(reviews.find(r => r.slug === slug));
</script>

<svelte:head>
	<title>{review?.title ?? 'Review'} — TENTACLES</title>
</svelte:head>

{#if review}
	<div class="page-header">
		<div class="container narrow">
			<div class="section-label">Review · {review.date}</div>
			<h1>{review.title}</h1>
			{#if review.author}
				<p class="subtitle">{review.author}</p>
			{/if}
		</div>
	</div>

	<div class="container narrow detail-body">
		<div class="prose">
			{#each review.content.split('\n\n') as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<a href="/reviews" class="back-btn">← All reviews</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Review not found</h1>
		<a href="/reviews" class="back-btn">← All reviews</a>
	</div>
{/if}

<style>
	.page-header { padding: 120px 0 1rem; }
	.narrow { max-width: 720px; }
	.detail-body { padding: 0 1.5rem 4rem; }
	.prose { margin-bottom: 2rem; }
	.prose p { font-size: .95rem; line-height: 1.85; color: var(--dark-gray); margin-bottom: 1.25rem; }

	@media (max-width: 640px) {
		.page-header h1 { font-size: 1.5rem; }
	}
</style>
