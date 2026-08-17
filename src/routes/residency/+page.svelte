<script lang="ts">
	import { residencies } from '$lib/residencies';

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
		<p class="subtitle">International artist-in-residence program — 16 artists from 12 countries since 2015.</p>

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
