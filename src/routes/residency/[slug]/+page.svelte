<script lang="ts">
	import { page } from '$app/stores';

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

	let res = $derived(residencies.find(r => r.slug === $page.params.slug));
</script>

<svelte:head>
	<title>{res?.name ?? 'Resident'} — TENTACLES</title>
</svelte:head>

<div class="container page narrow">
	{#if res}
		<div class="section-label">Residency · {res.year}</div>
		<h1>{res.name}</h1>
		<a href="/residency" class="back">&larr; All residents</a>
	{:else}
		<h1>Resident not found</h1>
		<a href="/residency" class="back">&larr; All residents</a>
	{/if}
</div>
