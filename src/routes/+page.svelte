<script lang="ts">
	let heroImage = '/images/exhibitions/IMG_8944-1536x1024.jpg';
</script>

<svelte:head>
	<title>TENTACLES — Art Community, Bangkok</title>
	<meta name="description" content="TENTACLES is a Bangkok-based art initiative founded in 2014. Platform for experimentation and collaboration through art events and projects." />
</svelte:head>

<section class="hero">
	<div class="hero-bg">
		<img src={heroImage} alt="" />
		<div class="overlay"></div>
	</div>
	<div class="container">
		<div class="hero-content">
			<div class="section-label">Bangkok · Since 2014</div>
			<h1>TENTACLES</h1>
			<p class="lead">
				An art initiative providing platform for experimentation and collaboration
				through various art events and projects, both locally and internationally.
			</p>
			<div class="hero-links">
				<a href="/about" class="btn-primary">About</a>
				<a href="/exhibitions" class="btn-outline">Exhibitions</a>
			</div>
		</div>
	</div>
	<div class="scroll-hint">&#x2193;</div>
</section>

<section class="section alt">
	<div class="container narrow">
		<div class="section-label">About</div>
		<h2>An art initiative in Bangkok</h2>
		<p>TENTACLES provides a platform for experimentation and collaboration. Our artist-in-residence program welcomes artists looking to develop their practices and expand their networks. We host regular arts &amp; crafts workshops that allow people to learn new skills and expand their creative minds.</p>
		<p>We have collaborated with partner organisations in Thailand and overseas to facilitate cultural exchange programmes.</p>
		<a href="/about" class="read-more">Learn more &rarr;</a>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-label">Program</div>
		<h2>What we do</h2>
		<div class="card-grid">
			<a href="/exhibitions" class="card">
				<span class="card-num">01</span>
				<h3>Exhibition</h3>
				<p>Contemporary art from local and international artists</p>
			</a>
			<a href="/residency" class="card">
				<span class="card-num">02</span>
				<h3>Residency</h3>
				<p>International artist residency fostering creative exchange</p>
			</a>
			<a href="/projects" class="card">
				<span class="card-num">03</span>
				<h3>Projects</h3>
				<p>Initiatives, collaborations, and creative works</p>
			</a>
		</div>
	</div>
</section>

<section class="section alt">
	<div class="container">
		<div class="section-label">Timeline</div>
		<h2>Our journey</h2>
		<div class="timeline">
			<div class="tl-item"><span class="tl-yr">2014</span><span>@Studio Miu, Thonglor 13, Bangkok</span></div>
			<div class="tl-item"><span class="tl-yr">2015</span><span>@Studio Miu, Sukhumvit 49 + @K.Mutt Space, Ratchaburi</span></div>
			<div class="tl-item"><span class="tl-yr">2016</span><span>@Yet Space, Charansanitwong 11, Bangkok</span></div>
			<div class="tl-item"><span class="tl-yr">2016–Now</span><span>Narathiwas 22, Bangkok</span></div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 90vh; display: flex; flex-direction: column;
		justify-content: center; padding: 120px 0 60px; position: relative;
		overflow: hidden;
	}
	.hero-bg {
		position: absolute; top: 0; left: 0; right: 0; bottom: 0;
		z-index: 0;
	}
	.hero-bg img {
		width: 100%; height: 100%; object-fit: cover;
		filter: grayscale(60%) brightness(0.3);
	}
	.overlay {
		position: absolute; inset: 0;
		background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4));
	}
	.hero-content { position: relative; z-index: 1; max-width: 640px; }
	.hero h1 {
		font-size: clamp(3rem,8vw,6rem);
		font-weight: 200; letter-spacing: .15em; text-transform: uppercase;
		color: var(--white); line-height: 1; margin-bottom: 1.5rem;
	}
	.lead { font-size: 1rem; line-height: 1.9; color: var(--light); margin-bottom: 2rem; }
	.hero-links { display: flex; gap: 1rem; }

	.btn-primary, .btn-outline {
		display: inline-flex; align-items: center; padding: 11px 28px;
		font-size: .75rem; font-weight: 500; letter-spacing: .1em;
		text-transform: uppercase; transition: all .25s;
	}
	.btn-primary { background: var(--accent); color: var(--black); border: 1px solid var(--accent); }
	.btn-primary:hover { background: transparent; color: var(--accent); opacity: 1; }
	.btn-outline { background: transparent; color: var(--white); border: 1px solid rgba(255,255,255,.2); }
	.btn-outline:hover { border-color: var(--accent); color: var(--accent); opacity: 1; }

	.scroll-hint {
		position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
		font-size: 1.2rem; color: var(--gray); animation: bounce 2s infinite; opacity: .4; z-index: 1;
	}
	@keyframes bounce { 50% { transform: translateX(-50%) translateY(8px); } }

	.section { padding: 5rem 0; }
	.section.alt { background: var(--near-black); }
	.narrow { max-width: 680px; }
	.read-more { font-family: var(--mono); font-size: .75rem; color: var(--accent); }
	.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
	.card { display: block; padding: 2rem; border: 1px solid rgba(255,255,255,.06); background: rgba(255,255,255,.02); transition: all .3s; }
	.card:hover { border-color: var(--accent); background: rgba(212,160,86,.06); }
	.card-num { font-family: var(--mono); font-size: .65rem; color: var(--accent); display: block; margin-bottom: .75rem; }
	.card h3 { color: var(--white); margin-bottom: .5rem; }
	.card p { font-size: .85rem; color: var(--gray); margin: 0; }

	.timeline { display: flex; flex-direction: column; max-width: 600px; }
	.tl-item { display: grid; grid-template-columns: 100px 1fr; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,.05); }
	.tl-yr { font-family: var(--mono); font-size: .85rem; color: var(--accent); }
	.tl-item span:last-child { color: var(--light); font-size: .9rem; }
	.tl-item:last-child { border: none; }

	@media (max-width: 768px) {
		.hero { min-height: auto; padding: 100px 0 40px; }
		.hero-links { flex-direction: column; }
		.tl-item { grid-template-columns: 80px 1fr; }
	}
</style>
