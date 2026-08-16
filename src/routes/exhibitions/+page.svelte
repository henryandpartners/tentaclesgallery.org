<script lang="ts">
	import { exhibitions, type Exhibition } from '$lib/exhibitions';

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
