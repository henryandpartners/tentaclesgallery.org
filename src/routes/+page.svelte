<script lang="ts">
	const residencies = [
		{ slug: 'argya-dhyaksa', name: 'Argya Dhyaksa', year: '2020', country: 'Indonesia' },
		{ slug: 'kong-dara', name: 'Kong Dara', year: '2015', country: 'Cambodia' },
		{ slug: 'kate-bae', name: 'Kate Bae', year: '2017', country: 'South Korea' },
		{ slug: 'hiromi-tsuha', name: 'Hiromi Tsuha', year: '2017', country: 'Japan (Okinawa)' },
		{ slug: 'jane-cheng', name: 'Jane Q Cheng', year: '2018', country: 'Singapore' },
		{ slug: 'ramesh-ramakrishnah', name: 'Ramesh Ramakrishnah', year: '2019', country: 'Mauritius' },
		{ slug: 'ge-yulu', name: 'Ge Yulu', year: '2019', country: 'China' },
		{ slug: 'reza-zefanya-mulia', name: 'Reza Zefanya Mulia', year: '2017', country: 'Indonesia' },
		{ slug: 'hernan-salvo', name: 'Hernan Salvo', year: '2017', country: 'Mexico' },
	];

	const exhibitions = [
		{ slug: 'here-i-come-to-save-the-day', title: 'HERE I COME TO SAVE THE DAY', artist: 'Ho Rui An', year: '2018', cover: 'For-Rui-An_Almost-there-performance-lecture-01642.jpg' },
		{ slug: 'three-cornered-world', title: 'Three-Cornered World', artist: 'Virada Banjurtrungkajorn', year: '2016', cover: 'Three-Cornered-World-1.jpg' },
		{ slug: 'two-young-indonesian-artists', title: 'Two Young Indonesian Artists', artist: 'Ajoon Martia Saputri & Reza Zefanya Mulia', year: '2017', cover: 'two-young-indonesian-1.jpg' },
		{ slug: 'the-invisible-museum', title: 'The Invisible Museum', artist: 'Group exhibition', year: '2016', cover: 'the-invisible-museum-1.jpg' },
		{ slug: 'yaowaraj-as-i-note', title: 'Yaowaraj as I note', artist: 'Solo exhibition', year: '2015', cover: 'yao-wa-raj-76x56-3.jpg' },
	];

	const projects = [
		{ slug: 'tentacles-tv', title: 'TENTACLES TV', year: '2017', cover: '2017.08.07_create-jpg_fb-event-banner-TV-project.jpg' },
		{ slug: 'thetip', title: 'TheTip', year: '2015', cover: 'The-Tip.jpg' },
		{ slug: 'online-party', title: 'Online Party', year: '2020', cover: 'Online-Party.jpg' },
	];

	const venues = [
		{ year: '2014', name: 'Studio Miu, Thonglor 13', img: '/images/timeline/studio-miu-2014.jpg' },
		{ year: '2015', name: 'Studio Miu, Sukhumvit 49', img: '/images/timeline/sukhumvit49-2015.jpg' },
		{ year: '2015', name: 'K.Mutt Space, Ratchaburi', img: '/images/timeline/kmutt-space-2015.jpg' },
		{ year: '2016', name: 'Yet Space, Charansanitwong 11', img: '/images/timeline/yet-space-2016.jpg' },
		{ year: '2016–Now', name: 'Narathiwas 22, Bangkok', img: '/images/timeline/narathiwas-22-2020a.jpg' },
	];

	const team = [
		{ name: 'Henry Tan', role: 'Founder' },
		{ name: 'Be Takerng', role: 'Team Member' },
		{ name: 'Bank Ngamarunchote', role: 'Team Member' },
		{ name: 'Nirinthana Koomanee', role: 'Team Member' },
		{ name: 'Noll', role: 'Team Member' },
		{ name: 'Jib', role: 'Team Member' },
		{ name: 'Kedo', role: 'Team Member' },
		{ name: 'Kuhn', role: 'Team Member' },
	];

	const collabs = [
		{ year: '2015', text: 'K.Mutt Space Residency in Ratchaburi with KMUTT.' },
		{ year: '2016', text: '5 Thai Artists join Taichung ASEAN Square Cultural Exchange, Taiwan.' },
		{ year: '2016', text: 'Co-organised "ศิลป์อยู่เป็น" education programme by BACC.' },
		{ year: '2019', text: '"Common Traces" exhibition in Melbourne with TCB Art Inc.' },
	];

	const heroImages = [
		'/images/exhibitions/IMG_8944-1536x1024.jpg',
		'/images/exhibitions/IMG_8954-1536x1024.jpg',
	];

	// Pick a random hero image on each build
	let heroImg = $derived(heroImages[Math.floor(Math.random() * heroImages.length)]);
</script>

<svelte:head>
	<title>TENTACLES — Art Community, Bangkok</title>
	<meta name="description" content="TENTACLES is a Bangkok-based art initiative founded in 2014. A platform for experimentation and collaboration through exhibitions, residencies, and projects." />
</svelte:head>

<!-- === HERO: Full-bleed dark === -->
<section class="hero">
	<div class="hero-bg">
		<img src={heroImg} alt="" class="hero-img" />
		<div class="hero-overlay"></div>
	</div>
	<div class="hero-content">
		<p class="hero-pre">Bangkok · Since 2014</p>
		<h1 class="hero-title">
			TENTACLES
			<span class="hero-gold">Gallery</span>
		</h1>
		<p class="hero-desc">An art space, residency, and community gallery. A platform for experimentation and collaboration through exhibitions, artist residencies, and projects.</p>
		<div class="hero-actions">
			<a href="/exhibitions" class="btn-primary">View exhibitions</a>
			<a href="/about" class="btn-outline">About</a>
		</div>
	</div>
</section>

<!-- === ABOUT === -->
<section class="section">
	<div class="container narrow">
		<div class="section-label">About</div>
		<h2>An art initiative in Bangkok</h2>
		<p>TENTACLES provides a platform for experimentation and collaboration. Our artist-in-residence program welcomes artists looking to develop their practices and expand their networks. We host regular arts &amp; crafts workshops that allow people to learn new skills and expand their creative minds.</p>
		<p>We have collaborated with partner organisations in Thailand and overseas to facilitate cultural exchange programmes.</p>
		<a href="/about" class="read-more">More about us →</a>
	</div>
</section>

<!-- === TIMELINE: Venues as backbone === -->
<section class="section section-light">
	<div class="container">
		<div class="section-label">Timeline</div>
		<h2>Our journey</h2>
		<p class="section-sub">From Thonglor to Narathiwas — five spaces that shaped TENTACLES.</p>
		<div class="timeline-grid">
			{#each venues as v, i}
				<div class="tl-card" style="--tl-delay: {i * 150}ms">
					<div class="tl-img">
						<img src={v.img} alt={v.name} loading="lazy" />
					</div>
					<div class="tl-info">
						<span class="tl-yr">{v.year}</span>
						<h3>{@html v.name.replace(', ', '<br>')}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- === RESIDENCY PREVIEW === -->
<section class="section">
	<div class="container">
		<div class="section-label">Residency</div>
		<div class="section-head-row">
			<h2>International artists</h2>
			<a href="/residency" class="read-more">View all →</a>
		</div>
		<p class="section-sub">Since 2015, TENTACLES has hosted 36 artists from 15+ countries.</p>
		<div class="artist-grid">
			{#each residencies as r}
				<a href="/residency/{r.slug}" class="artist-card">
					<div class="artist-yr">{r.year}</div>
					<h3 class="artist-name">{r.name}</h3>
					<span class="artist-country">{r.country}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- === EXHIBITION PREVIEW === -->
<section class="section section-light">
	<div class="container">
		<div class="section-label">Exhibitions</div>
		<div class="section-head-row">
			<h2>Past shows</h2>
			<a href="/exhibitions" class="read-more">View all →</a>
		</div>
		<p class="section-sub">From 2014 to today — group shows, solos, and collaborations.</p>
		<div class="exhibition-grid">
			{#each exhibitions as ex}
				<a href="/exhibitions/{ex.slug}" class="ex-card">
					{#if ex.cover}
						<div class="ex-card-cover">
							<img src="/images/exhibitions/{ex.cover}" alt={ex.title} loading="lazy" />
						</div>
					{/if}
					<div class="ex-card-body">
						<span class="ex-year">{ex.year}</span>
						<h3>{ex.title}</h3>
						<span class="ex-artist">{ex.artist}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- === PROJECTS PREVIEW === -->
<section class="section section-light">
	<div class="container">
		<div class="section-label">Projects</div>
		<div class="section-head-row">
			<h2>Initiatives & collaborations</h2>
			<a href="/projects" class="read-more">View all →</a>
		</div>
		<p class="section-sub">Special projects, community television, and artist-run spaces.</p>
		<div class="exhibition-grid">
			{#each projects as p}
				<a href="/projects/{p.slug}" class="ex-card">
					{#if p.cover}
						<div class="ex-card-cover">
							<img src="/images/projects/{p.cover}" alt={p.title} loading="lazy" />
						</div>
					{/if}
					<div class="ex-card-body">
						<span class="ex-year">{p.year}</span>
						<h3>{p.title}</h3>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- === TEAM === -->
<section class="section">
	<div class="container narrow">
		<div class="section-label">Team</div>
		<h2>People</h2>
		<p class="section-sub">The team behind TENTACLES.</p>
		<div class="team-grid">
			{#each team as m}
				<div class="team-card">
					<div class="team-avatar">{m.name.split(' ').map(w => w[0]).join('')}</div>
					<h4 class="team-name">{m.name}</h4>
					<p class="team-role">{m.role}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- === COLLABORATIONS === -->
<section class="section section-light">
	<div class="container narrow">
		<div class="section-label">Collaborations</div>
		<h2>Partners & exchanges</h2>
		<p class="section-sub">We have collaborated with partner organisations in Thailand and overseas to facilitate cultural exchange programmes.</p>
		<ul class="collab-list">
			{#each collabs as c}
				<li><strong>{c.year}</strong> — {c.text}</li>
			{/each}
		</ul>
	</div>
</section>

<!-- === CTA === -->
<section class="section section-dark cta-section">
	<div class="container narrow" style="text-align:center">
		<div class="section-label" style="justify-content:center">Get in touch</div>
		<h2 style="margin-bottom:1rem">Want to collaborate?</h2>
		<p style="margin-bottom:2rem">TENTACLES is always open to new collaborations — from exhibitions to residencies, workshops to exchanges. Reach out if you'd like to work with us.</p>
		<a href="mailto:tentaclesgallery@gmail.com" class="btn-primary">tentaclesgallery@gmail.com</a>
	</div>
</section>

<style>
	/* === HERO === */
	.hero {
		position: relative;
		min-height: 80vh;
		display: flex;
		align-items: center;
		background: var(--black);
		overflow: hidden;
	}
	.hero-bg {
		position: absolute; inset: 0;
	}
	.hero-img {
		width: 100%; height: 100%;
		object-fit: cover;
		opacity: .45;
	}
	.hero-overlay {
		position: absolute; inset: 0;
		background: linear-gradient(135deg, rgba(26,26,26,.85) 0%, rgba(26,26,26,.5) 60%, transparent 100%);
	}
	.hero-content {
		position: relative; z-index: 2;
		max-width: 620px;
		padding: 6rem 1.5rem;
	}
	.hero-pre {
		font-family: var(--mono);
		font-size: .65rem;
		letter-spacing: .15em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 1rem;
	}
	.hero-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.8rem, 7vw, 5rem);
		font-weight: 400;
		font-style: italic;
		line-height: 1.05;
		color: var(--white);
		margin-bottom: 1.5rem;
	}
	.hero-gold {
		font-style: normal;
		font-weight: 400;
		color: var(--accent);
		display: block;
	}
	.hero-desc {
		font-size: 1rem;
		line-height: 1.65;
		color: rgba(255,255,255,.7);
		margin-bottom: 2rem;
		max-width: 480px;
	}
	.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

	.btn-primary, .btn-outline {
		display: inline-block;
		padding: 12px 28px;
		font-family: var(--mono);
		font-size: .7rem;
		letter-spacing: .08em;
		text-transform: uppercase;
		transition: all .25s;
		cursor: pointer;
	}
	.btn-primary {
		background: var(--accent);
		color: var(--black);
		border: 1px solid var(--accent);
	}
	.btn-primary:hover { background: #d4a94a; color: var(--black); opacity: 1; }
	.btn-outline {
		background: transparent;
		color: var(--white);
		border: 1px solid rgba(255,255,255,.3);
	}
	.btn-outline:hover { border-color: var(--accent); color: var(--accent); opacity: 1; }

	/* === SECTIONS === */
	.section { padding: 5rem 0; }
	.section-light { background: var(--white); }
	.section-dark { background: var(--black); }
	.section-sub { font-size: .9rem; color: var(--mid-gray); margin-bottom: 2.5rem; max-width: 500px; }
	.narrow { max-width: 680px; }
	.read-more { font-family: var(--mono); font-size: .7rem; color: var(--accent); display: inline-flex; align-items: center; gap: .25rem; white-space: nowrap; }
	.read-more:hover { opacity: 1; gap: .5rem; }
	.section-head-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: .25rem; }
	.section-head-row h2 { margin-bottom: 0; }

	/* === TIMELINE === */
	.timeline-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
	.tl-card {
		border: 1px solid var(--light-gray);
		background: var(--off-white);
		overflow: hidden;
		transition: all .3s;
	}
	.tl-card:hover { border-color: var(--accent); box-shadow: 0 2px 16px rgba(0,0,0,.06); }
	.tl-img { aspect-ratio: 4/3; overflow: hidden; }
	.tl-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
	.tl-card:hover .tl-img img { transform: scale(1.04); }
	.tl-info { padding: 1rem; }
	.tl-yr { font-family: var(--mono); font-size: .65rem; color: var(--accent); display: block; margin-bottom: .25rem; }
	.tl-info h3 { font-size: .85rem; font-weight: 500; color: var(--black); margin: 0; line-height: 1.45; }

	/* === RESIDENCY GRID === */
	.artist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: .75rem; }
	.artist-card {
		display: block;
		padding: 1.25rem;
		border: 1px solid var(--light-gray);
		background: var(--white);
		transition: all .25s;
	}
	.artist-card:hover { border-color: var(--accent); background: var(--off-white); }
	.artist-yr { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .4rem; }
	.artist-name { font-size: .9rem; font-weight: 500; color: var(--black); margin: 0 0 .2rem; line-height: 1.3; }
	.artist-country { font-size: .7rem; color: var(--mid-gray); }

	/* === EXHIBITION GRID === */
	.exhibition-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
	.ex-card {
		display: block;
		border: 1px solid var(--light-gray);
		background: var(--white);
		transition: all .3s;
		overflow: hidden;
	}
	.ex-card:hover { border-color: var(--accent); box-shadow: 0 2px 20px rgba(0,0,0,.06); }
	.ex-card-cover { aspect-ratio: 16/10; overflow: hidden; background: var(--off-white); }
	.ex-card-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
	.ex-card:hover .ex-card-cover img { transform: scale(1.04); }
	.ex-card-body { padding: 1.1rem; }
	.ex-year { font-family: var(--mono); font-size: .6rem; color: var(--accent); display: block; margin-bottom: .3rem; }
	.ex-card-body h3 { font-size: .95rem; font-weight: 500; color: var(--black); margin: 0 0 .15rem; line-height: 1.35; }
	.ex-artist { font-size: .75rem; color: var(--mid-gray); }

	/* === TEAM === */
	.team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1.25rem; text-align: center; }
	.team-card { }
	.team-avatar {
		width: 56px; height: 56px; border-radius: 50%;
		display: flex; align-items: center; justify-content: center;
		background: var(--accent); color: #fff;
		font-family: var(--mono); font-size: .75rem; font-weight: 600;
		margin: 0 auto .5rem;
	}
	.team-name { font-size: .75rem; font-weight: 600; color: var(--black); margin: 0 0 .1rem; }
	.team-role { font-size: .65rem; color: var(--mid-gray); margin: 0; font-family: var(--mono); }

	/* === COLLABORATIONS === */
	.collab-list { list-style: none; padding: 0; }
	.collab-list li { position: relative; padding-left: 1.5rem; margin-bottom: .65rem; color: var(--dark-gray); font-size: .85rem; line-height: 1.6; }
	.collab-list li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

	/* === CTA === */
	.cta-section { padding: 6rem 0; }

	@media (max-width: 768px) {
		.hero { min-height: 70vh; }
		.hero-content { padding: 5rem 1.25rem; }
		.artist-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
		.exhibition-grid { grid-template-columns: 1fr; }
		.timeline-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
	}
</style>
