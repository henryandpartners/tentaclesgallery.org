<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>About — TENTACLES</title>
</svelte:head>

<div class="container page narrow">
	<div class="section-label">About</div>
	<h1>TENTACLES</h1>

	<p>TENTACLES is a Bangkok-based art initiative founded in 2014. We provide platform for experimentation and collaboration through organizing various art events and projects, both locally and internationally. Our artist-in-residence program welcomes artists, looking to develop their practices and expand their networks. We also host regular arts &amp; crafts workshops that allow people to learn new skills and expand their creative minds.</p>

	<h3 class="section-title">Collaborations</h3>
	<ul>
		<li><strong>2015</strong> — K.Mutt Space Residency in Ratchaburi with KMUTT.</li>
		<li><strong>2016</strong> — 5 Thai Artists join Taichung ASEAN Square Cultural Exchange, Taiwan.</li>
		<li><strong>2016</strong> — Co-organised "ศิลป์อยู่เป็น" education programme by BACC.</li>
		<li><strong>2019</strong> — "Common Traces" exhibition in Melbourne with TCB Art Inc.</li>
	</ul>

	<h3 class="section-title">Timeline</h3>
	<div class="timeline">
		<div class="tl-item"><span class="tl-yr">2014</span><span>@Studio Miu, Thonglor 13, Bangkok</span></div>
		<div class="tl-item"><span class="tl-yr">2015</span><span>@Studio Miu, Sukhumvit 49 + @K.Mutt Space, Ratchaburi</span></div>
		<div class="tl-item"><span class="tl-yr">2016</span><span>@Yet Space, Charansanitwong 11, Bangkok</span></div>
		<div class="tl-item"><span class="tl-yr">2016–Now</span><span>Narathiwas 22, Bangkok</span></div>
	</div>
</div>

<style>
	.narrow { max-width: 700px; }
	.section-title { font-family: var(--mono); font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin: 2rem 0 1rem; }
	ul { list-style: none; padding: 0; }
	li { position: relative; padding-left: 1.5rem; margin-bottom: .75rem; color: var(--light); font-size: .9rem; line-height: 1.7; }
	li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

	.timeline { display: flex; flex-direction: column; }
	.tl-item { display: grid; grid-template-columns: 100px 1fr; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,.05); }
	.tl-yr { font-family: var(--mono); font-size: .85rem; color: var(--accent); }
	.tl-item span:last-child { color: var(--light); font-size: .9rem; }
	.tl-item:last-child { border: none; }

	@media (max-width: 768px) { .tl-item { grid-template-columns: 80px 1fr; } }
</style>
