<script lang="ts">
	const residencies = [
		{ slug: 'argya-dhyaksa', name: 'Argya Dhyaksa', year: '2020' },
		{ slug: 'ramesh-ramakrishnah', name: 'Ramesh Ramakrishnah', year: '2019' },
		{ slug: 'li-zhiyong', name: 'Li Zhiyong', year: '2019' },
		{ slug: 'yusuke-shibata', name: 'Yusuke Shibata', year: '2019' },
		{ slug: 'ge-yulu', name: 'Ge Yulu', year: '2019' },
		{ slug: 'magdalena-correa', name: 'Magdalena Correa', year: '2019' },
		{ slug: 'kai-altmann', name: 'Kai Altmann', year: '2019' },
		{ slug: 'ip-wai-lung', name: 'Ip Wai Lung', year: '2019' },
		{ slug: 'gemini-kim', name: 'Gemini Kim', year: '2019' },
		{ slug: 'scott-anderson', name: 'Scott Anderson', year: '2019' },
		{ slug: 'abijan-gupta', name: 'Abijan Gupta', year: '2018' },
		{ slug: 'jane-cheng', name: 'Jane Q Cheng', year: '2018' },
		{ slug: 'yeon-jeong', name: 'Yeon Jeong', year: '2018' },
		{ slug: 'joned', name: 'Joned', year: '2018' },
		{ slug: 'rar-edition', name: 'RAR Edition', year: '2018' },
		{ slug: 'karl-ingar-roys', name: 'Karl Ingar Roys', year: '2018' },
		{ slug: 'liuboda', name: 'LiuBoda', year: '2018' },
		{ slug: 'linh-phuong-nguyen', name: 'Linh Phuong Nguyen', year: '2018' },
		{ slug: 'sunya', name: 'Sunya', year: '2018' },
		{ slug: 'catherine-ellis', name: 'Catherine Ellis', year: '2018' },
		{ slug: 'ajoon-martia-saputri', name: 'Ajoon Martia Saputri', year: '2017' },
		{ slug: 'reza-zefanya-mulia', name: 'Reza Zefanya Mulia', year: '2017' },
		{ slug: 'cyril-shanna', name: 'Cyril & Shanna', year: '2017' },
		{ slug: 'din-chan', name: 'Din Chan', year: '2017' },
		{ slug: 'flounder-lee', name: 'Flounder Lee', year: '2017' },
		{ slug: 'garima-gupta', name: 'Garima Gupta', year: '2017' },
		{ slug: 'hernan-salvo', name: 'Hernan Salvo', year: '2017' },
		{ slug: 'ho-rui-an', name: 'Ho Rui An', year: '2017' },
		{ slug: 'hiromi-tsuha', name: 'Hiromi Tsuha', year: '2017' },
		{ slug: 'justin-loke', name: 'Justin Loke', year: '2017' },
		{ slug: 'kate-bae', name: 'Kate Bae', year: '2017' },
		{ slug: 'yosefa-muhammad', name: 'Yosefa Aulia & Muhammad Vilhamy', year: '2016' },
		{ slug: 'kong-dara', name: 'Kong Dara', year: '2015' },
		{ slug: 'amy-wang', name: 'Amy Wang / Jhong ChengShiu', year: '2015' },
		{ slug: 'david-delgado', name: 'David Delgado', year: '2015' },
		{ slug: 'pohan-chang', name: 'Pohan Chang', year: '2015' },
	];

	let years = $derived([...new Set(residencies.map(r => r.year))].sort().reverse());
	let selected = $state('all');
	let filtered = $derived(selected === 'all' ? residencies : residencies.filter(r => r.year === selected));
</script>

<svelte:head>
	<title>Residency — TENTACLES</title>
</svelte:head>

<div class="container page">
	<div class="section-label">Program</div>
	<h1>Residency</h1>
	<p class="subtitle">International artist-in-residence program</p>

	<div class="filters">
		<button class="filter" class:active={selected === 'all'} onclick={() => selected = 'all'}>All</button>
		{#each years as year}
			<button class="filter" class:active={selected === year} onclick={() => selected = year}>{year}</button>
		{/each}
	</div>

	<div class="grid">
		{#each filtered as res}
			<a href="/residency/{res.slug}" class="card">
				<span class="yr">{res.year}</span>
				<h3>{res.name}</h3>
			</a>
		{/each}
	</div>
</div>

<style>
	.filters { display: flex; gap: .5rem; margin-bottom: 2rem; flex-wrap: wrap; }
	.filter {
		padding: 7px 18px; background: transparent;
		border: 1px solid rgba(255,255,255,.1); color: var(--light);
		font-family: var(--mono); font-size: .7rem;
		cursor: pointer; transition: all .2s;
	}
	.filter:hover { border-color: var(--accent); color: var(--accent); }
	.filter.active { background: var(--accent); border-color: var(--accent); color: var(--black); }

	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
	.card {
		display: block; padding: 1.5rem;
		border: 1px solid rgba(255,255,255,.06);
		background: rgba(255,255,255,.02);
		transition: all .25s;
	}
	.card:hover { border-color: var(--accent); background: rgba(212,160,86,.06); }
	.yr { font-family: var(--mono); font-size: .65rem; color: var(--accent); display: block; margin-bottom: .5rem; }
	.card h3 { font-size: .95rem; font-weight: 400; color: var(--white); margin: 0; }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
