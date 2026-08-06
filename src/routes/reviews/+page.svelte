<script lang="ts">
	const reviews = [
		{ slug: 'review-you-never-really-know-people-even-the-ones-you-love-future-factory-bangkok', title: 'You Never Really Know People Even The Ones You Love @ Future Factory Bangkok', date: '2018' },
		{ slug: 'review-early-years-project-1-thisorder', title: 'EARLY YEARS PROJECT #1: Thisorder @ TENTACLES', date: '2018' },
		{ slug: 'review-displaced-bacc-by-jakkai-siributr', title: 'Displaced @ BACC by Jakkai Siributr', date: '2018' },
		{ slug: 'review-human-alienation', title: 'Human AlieNation', date: '2018' },
		{ slug: 'review-another-world', title: 'Another World', date: '2018' },
		{ slug: 'review-erwin-wurm-the-philosophy-of-instructions', title: 'Erwin Wurm: The Philosophy of Instructions', date: '2018' },
		{ slug: 'review-ruin', title: 'Ruin by Pannaphan Yodmanee', date: '2018' },
		{ slug: 'review-the-game-viet-nam-by-le-brothers', title: 'The Game | Viet Nam by LE Brothers', date: '2017' },
		{ slug: 'review-krung-thep-bangkok-venice-biennale-2017-by-somboon-hormtientong', title: 'Krung Thep Bangkok @ Venice Biennale 2017', date: '2017' },
		{ slug: 'review-alive-bangkok-city-city-gallery-by-alex-face', title: 'ALIVE @ Bangkok CityCity Gallery by Alex Face', date: '2017' },
		{ slug: 'review-occasionally-utiliity', title: 'Occasionally Utility', date: '2017' },
		{ slug: 'review-no-regret-exhibition', title: 'No Regret @ Cartel Artspace', date: '2017' },
		{ slug: 'review-photosynthesis-at-tentacles-by-%e0%b8%ad%e0%b8%a0%e0%b8%b4%e0%b8%8a%e0%b8%8d%e0%b8%b2-%e0%b9%84%e0%b8%ab%e0%b8%a1%e0%b8%97%e0%b8%b4%e0%b8%a1', title: 'Photosynthesis at Tentacles', date: '2017' },
		{ slug: 'review-novel-without-a-name-%e0%b9%82%e0%b8%94%e0%b8%a2-%e0%b8%aa%e0%b8%b8%e0%b8%97%e0%b8%98%e0%b8%b4%e0%b8%a3%e0%b8%b1%e0%b8%95%e0%b8%99%e0%b9%8c-%e0%b8%a8%e0%b8%b8%e0%b8%a0%e0%b8%9b', title: 'Novel Without a Name', date: '2017' },
		{ slug: 'lreviewl-brand-new2016-bugbangkok-university-gallery', title: 'BRAND NEW 2016 @ BUG (Bangkok University Gallery)', date: '2016' },
		{ slug: 'review-caravaggio-%e0%b8%95%e0%b8%a3%e0%b8%b2%e0%b8%9a%e0%b8%b2%e0%b8%9b%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b8%aa%e0%b8%b3%e0%b9%80%e0%b8%99%e0%b8%b2-%e0%b9%82%e0%b8%94%e0%b8%a2-%e0%b8%a3%e0%b9%88', title: 'Caravaggio: ตราบาปของสำเนา', date: '2016' },
		{ slug: 'review-un-official-%e0%b8%a0%e0%b8%b2%e0%b8%9e%e0%b8%96%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b8%9a%e0%b8%99%e0%b9%80%e0%b8%a7%e0%b8%97%e0%b8%b5%e0%b8%a5%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%81%e0%b8%b2', title: '(Un)official: ภาพถ่ายบนเวทีละครการทูต', date: '2016' },
	];
</script>

<svelte:head>
	<title>Reviews — TENTACLES</title>
	<meta name="description" content="Art reviews and critical writing from TENTACLES Gallery, Bangkok. Exhibition reviews, artist profiles, and cultural commentary." />
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Writing</div>
		<h1>Reviews</h1>
		<p class="subtitle">Critical writing on contemporary art in Bangkok and beyond — exhibition reviews, artist profiles, and cultural commentary from the TENTACLES community.</p>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each reviews as review}
			<a href="/reviews/{review.slug}" class="card">
				<div class="card-body">
					<span class="yr">{review.date}</span>
					<h3>{review.title}</h3>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.page-header { padding: 120px 0 2rem; }

	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; padding-bottom: 5rem; }
	.card {
		display: block; padding: 1.5rem;
		border: 1px solid var(--light-gray);
		background: var(--white);
		transition: all .25s;
	}
	.card:hover { border-color: var(--accent); box-shadow: 0 2px 12px rgba(0,0,0,.06); }
	.yr { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .4rem; }
	.card-body h3 { font-size: .95rem; font-weight: 400; color: var(--black); margin: 0; line-height: 1.45; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
