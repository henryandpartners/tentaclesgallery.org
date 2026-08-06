<script lang="ts">
	const articles = [
		{ slug: 'article-armpit', title: '"พื้นที่เล็กๆ ใต้วงแขนของผู้หญิงบอกเล่าอะไรได้บ้าง?" โดย วรพร พงศ์สุขุมมะ', date: '2018', author: 'Woraporn Pong' },
		{ slug: 'articles-thebrokenladder', title: 'Art-Ethnography: The Broken Ladder โดย วันทนีย์ ศรีรัฐ', date: '2018', author: 'Wantanee Sirirath' },
		{ slug: 'article-รูปลักษณ์แปลกใหม่และนัยยะตลกร้ายใน-อีโมติคอนซิมโบลิสม์', title: 'รูปลักษณ์แปลกใหม่และนัยยะตลกร้ายในอีโมติคอนซิมโบลิสม์', date: '2016', author: '' },
	];
</script>

<svelte:head>
	<title>Articles — TENTACLES</title>
	<meta name="description" content="Long-form articles and essays from TENTACLES Gallery, Bangkok — critical writing on art, culture, and society." />
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">Writing</div>
		<h1>Articles</h1>
		<p class="subtitle">Long-form essays and critical writing on contemporary art, culture, and society from the TENTACLES community.</p>
	</div>
</div>

<div class="container">
	<div class="grid">
		{#each articles as article}
			<a href="/articles/{article.slug}" class="card">
				<div class="card-body">
					<span class="yr">{article.date}</span>
					<h3>{article.title}</h3>
					{#if article.author}
						<span class="author">{article.author}</span>
					{/if}
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
	.card-body h3 { font-size: .9rem; font-weight: 400; color: var(--black); margin: 0 0 .2rem; line-height: 1.5; }
	.author { font-size: .7rem; color: var(--mid-gray); }

	@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>
