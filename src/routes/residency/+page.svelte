<script lang="ts">
	const residencies = [
		{ slug: 'argya-dhyaksa', name: 'Argya Dhyaksa', year: '2020', country: 'Indonesia' },
		{ slug: 'ramesh-ramakrishnah', name: 'Ramesh Ramakrishnah', year: '2019', country: 'Mauritius' },
		{ slug: 'li-zhiyong', name: 'Li Zhiyong', year: '2019', country: 'China' },
		{ slug: 'yusuke-shibata', name: 'Yusuke Shibata', year: '2019', country: 'Japan' },
		{ slug: 'ge-yulu', name: 'Ge Yulu', year: '2019', country: 'China' },
		{ slug: 'magdalena-correa', name: 'Magdalena Correa', year: '2019', country: 'Colombia' },
		{ slug: 'kai-altmann', name: 'Kai Altmann', year: '2019', country: 'USA' },
		{ slug: 'ip-wai-lung', name: 'Ip Wai Lung', year: '2019', country: 'Hong Kong' },
		{ slug: 'gemini-kim', name: 'Gemini Kim', year: '2019', country: 'South Korea / USA' },
		{ slug: 'scott-anderson', name: 'Scott Anderson', year: '2018', country: 'New Zealand' },
		{ slug: 'abijan-gupta', name: 'Abijan Gupta', year: '2018', country: 'India' },
		{ slug: 'jane-cheng', name: 'Jane Q Cheng', year: '2018', country: 'Singapore' },
		{ slug: 'yeon-jeong', name: 'Yeon Jeong', year: '2018', country: 'South Korea' },
		{ slug: 'joned', name: 'Joned', year: '2018', country: 'Thailand' },
		{ slug: 'rar-edition', name: 'RAR Edition', year: '2018', country: 'Thailand' },
		{ slug: 'karl-ingar-roys', name: 'Karl Ingar Roys', year: '2018', country: 'Norway' },
		{ slug: 'liuboda', name: 'LiuBoda', year: '2018', country: 'China' },
		{ slug: 'linh-phuong-nguyen', name: 'Linh Phuong Nguyen', year: '2018', country: 'Vietnam' },
		{ slug: 'sunya', name: 'Sunya', year: '2018', country: 'Thailand' },
		{ slug: 'catherine-ellis', name: 'Catherine Ellis', year: '2018', country: 'USA' },
		{ slug: 'ajoon-martia-saputri', name: 'Ajoon Martia Saputri', year: '2017', country: 'Indonesia' },
		{ slug: 'reza-zefanya-mulia', name: 'Reza Zefanya Mulia', year: '2017', country: 'Indonesia' },
		{ slug: 'cyril-shanna', name: 'Cyril & Shanna', year: '2017', country: 'International' },
		{ slug: 'din-chan', name: 'Din Chan', year: '2017', country: 'Thailand' },
		{ slug: 'flounder-lee', name: 'Flounder Lee', year: '2017', country: 'USA' },
		{ slug: 'garima-gupta', name: 'Garima Gupta', year: '2017', country: 'India' },
		{ slug: 'hernan-salvo', name: 'Hernan Salvo', year: '2017', country: 'Mexico' },
		{ slug: 'ho-rui-an', name: 'Ho Rui An', year: '2017', country: 'Singapore' },
		{ slug: 'hiromi-tsuha', name: 'Hiromi Tsuha', year: '2017', country: 'Japan (Okinawa)' },
		{ slug: 'justin-loke', name: 'Justin Loke', year: '2017', country: 'Singapore' },
		{ slug: 'kate-bae', name: 'Kate Bae', year: '2017', country: 'South Korea' },
		{ slug: 'yosefa-muhammad', name: 'Yosefa Aulia & Muhammad Vilhamy', year: '2016', country: 'Indonesia' },
		{ slug: 'kong-dara', name: 'Kong Dara', year: '2015', country: 'Cambodia' },
		{ slug: 'amy-wang', name: 'Amy Wang / Jhong ChengShiu', year: '2015', country: 'Taiwan' },
		{ slug: 'david-delgado', name: 'David Delgado', year: '2015', country: 'Colombia' },
		{ slug: 'pohan-chang', name: 'Pohan Chang', year: '2015', country: 'Taiwan' },
	];

	let years = $derived([...new Set(residencies.map(r => r.year))].sort().reverse());
	let selected = $state('all');
	let filtered = $derived(selected === 'all' ? residencies : residencies.filter(r => r.year === selected));
</script>

<svelte:head>
	<title>Residency — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Program</div>
		<h1>Residency</h1>
		<p class="subtitle">International artist-in-residence program — 36 artists from 15+ countries since 2015.</p>

		<div class="filters">
			<button class="filter" class:active={selected === 'all'} onclick={() => selected = 'all'}>All</button>
			{#each years as year}
				<button class="filter" class:active={selected === year} onclick={() => selected = year}>{year}</button>
			{/each}
		</div>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each filtered as res}
			<a href="/residency/{res.slug}" class="card">
				<span class="yr">{res.year}</span>
				<h3>{res.name}</h3>
				<span class="country">{res.country}</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.page-header { padding: 120px 0 2rem; }

	.filters { display: flex; gap: .5rem; margin-bottom: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
	.filter {
		padding: 7px 18px; background: transparent;
		border: 1px solid var(--light-gray); color: var(--dark-gray);
		font-family: var(--mono); font-size: .65rem;
		cursor: pointer; transition: all .2s;
	}
	.filter:hover { border-color: var(--accent); color: var(--accent); }
	.filter.active { background: var(--accent); border-color: var(--accent); color: var(--white); }

	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; padding-bottom: 5rem; }
	.card {
		display: block; padding: 1.5rem;
		border: 1px solid var(--light-gray);
		background: var(--white);
		transition: all .25s;
	}
	.card:hover { border-color: var(--accent); box-shadow: 0 2px 12px rgba(0,0,0,.06); }
	.yr { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .4rem; }
	.card h3 { font-size: .95rem; font-weight: 500; color: var(--black); margin: 0 0 .2rem; }
	.country { font-size: .75rem; color: var(--mid-gray); }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
