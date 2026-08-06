<script lang="ts">
	import { page } from '$app/stores';

	const articles = [
		{
			slug: 'article-armpit',
			title: '"พื้นที่เล็กๆ ใต้วงแขนของผู้หญิงบอกเล่าอะไรได้บ้าง?" โดย วรพร พงศ์สุขุมมะ',
			date: 'August 18, 2018',
			author: 'Woraporn Pong',
			content: 'พื้นที่เล็กๆ ใต้วงแขนของผู้หญิงบอกเล่าอะไรได้บ้าง? — "What can the small space under a woman\'s armpit tell us?"\n\nAn essay by Woraporn Pong exploring the cultural politics of the female body through the unexpected lens of the armpit. The essay examines how a seemingly insignificant part of the body becomes a site of intense cultural regulation, beauty standards, and feminist resistance.\n\nDrawing on art history, advertising, and personal narrative, the essay traces how the armpit has been alternately censored, sexualized, commodified, and politicized across different cultural contexts — and what this reveals about the broader policing of women\'s bodies.',
		},
		{
			slug: 'articles-thebrokenladder',
			title: 'Art-Ethnography: The Broken Ladder โดย วันทนีย์ ศรีรัฐ',
			date: 'July 25, 2018',
			author: 'Wantanee Sirirath',
			content: '"Art-Ethnography: The Broken Ladder — เงาสะท้อนในชนชั้น" (Reflections of Class) by Wantanee Sirirath.\n\nAn essay examining the intersection of art practice and ethnographic research methods. Sirirath explores how artists working at the boundaries of anthropology and contemporary art document and intervene in class structures, using "The Broken Ladder" as a metaphor for social mobility and its failures.\n\nThe essay considers how art-ethnography can reveal the lived experiences of class that statistical and sociological approaches miss — the textures, emotions, and contradictions of class identity in contemporary Thailand.',
		},
		{
			slug: 'article-รูปลักษณ์แปลกใหม่และนัยยะตลกร้ายใน-อีโมติคอนซิมโบลิสม์',
			title: 'รูปลักษณ์แปลกใหม่และนัยยะตลกร้ายในอีโมติคอนซิมโบลิสม์',
			date: '2016',
			author: '',
			content: '"รูปลักษณ์แปลกใหม่และนัยยะตลกร้ายในอีโมติคอนซิมโบลิสม์" — "Strange New Appearances and Dark Humor in Emoticon Symbolism."\n\nAn essay examining how emoticons and digital symbols have evolved from simple communication tools into a complex visual language with their own aesthetics, politics, and philosophical implications. The essay traces the journey of emoticons from ASCII characters to emoji to a full-fledged symbolic system that shapes how we express emotion in the digital age.\n\nExploring themes of translation, cultural difference, and the dark humor embedded in reducing human expression to standardized icons, this essay offers a critical perspective on the visual culture of digital communication.',
		},
	];

	let slug = $derived($page.params.slug);
	let article = $derived(articles.find(a => a.slug === slug));
</script>

<svelte:head>
	<title>{article?.title ?? 'Article'} — TENTACLES</title>
</svelte:head>

{#if article}
	<div class="page-header">
		<div class="container narrow">
			<div class="section-label">Article · {article.date}</div>
			<h1>{article.title}</h1>
			{#if article.author}
				<p class="subtitle">{article.author}</p>
			{/if}
		</div>
	</div>

	<div class="container narrow detail-body">
		<div class="prose">
			{#each article.content.split('\n\n') as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<a href="/articles" class="back-btn">← All articles</a>
	</div>
{:else}
	<div class="container page narrow" style="text-align:center;padding-top:4rem">
		<h1>Article not found</h1>
		<a href="/articles" class="back-btn">← All articles</a>
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
