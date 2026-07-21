<script lang="ts">
	const team = [
		{ name: 'Henry Tan', role: 'Founder', img: '' },
		{ name: 'Be Takerng', role: 'Team Member', img: '' },
		{ name: 'Bank Ngamarunchote', role: 'Team Member', img: '' },
		{ name: 'Nirinthana Koomanee', role: 'Team Member', img: '' },
		{ name: 'Noll', role: 'Team Member', img: '' },
		{ name: 'Jib', role: 'Team Member', img: '' },
		{ name: 'Kedo', role: 'Team Member', img: '' },
		{ name: 'Kuhn', role: 'Team Member', img: '' },
	];

	function initials(name: string): string {
		return name.split(' ').map(w => w[0]).join('');
	}
</script>

<svelte:head>
	<title>About — TENTACLES</title>
</svelte:head>

<div class="page-header">
	<div class="container narrow">
		<div class="section-label">About</div>
		<h1>TENTACLES</h1>
	</div>
</div>

<div class="container narrow about-body">
	<p>TENTACLES is a Bangkok-based art initiative founded in 2014. We provide a platform for experimentation and collaboration through organizing various art events and projects, both locally and internationally. Our artist-in-residence program welcomes artists looking to develop their practices and expand their networks. We also host regular arts &amp; crafts workshops that allow people to learn new skills and expand their creative minds.</p>

	<!-- Timeline -->
	<h3 class="section-title">Timeline</h3>
	<div class="timeline">
		<div class="tl-item"><span class="tl-yr">2014</span><span>Founded at Studio Miu, Thonglor 13, Bangkok</span></div>
		<div class="tl-item"><span class="tl-yr">2015</span><span>Expanded to Studio Miu, Sukhumvit 49 + K.Mutt Space, Ratchaburi</span></div>
		<div class="tl-item"><span class="tl-yr">2016</span><span>Moved to Yet Space, Charansanitwong 11, Bangkok</span></div>
		<div class="tl-item"><span class="tl-yr">2016–Now</span><span>Narathiwas 22 — current home</span></div>
	</div>

	<!-- Team -->
	<h3 class="section-title">Team</h3>
	<div class="team-grid">
		{#each team as m}
			<div class="team-card">
				<div class="team-img">
					<div class="team-initials">{initials(m.name)}</div>
				</div>
				<h4 class="team-name">{m.name}</h4>
				<p class="team-role">{m.role}</p>
			</div>
		{/each}
	</div>

	<!-- Collaborations -->
	<h3 class="section-title">Collaborations</h3>
	<ul>
		<li><strong>2015</strong> — K.Mutt Space Residency in Ratchaburi with KMUTT.</li>
		<li><strong>2016</strong> — 5 Thai Artists join Taichung ASEAN Square Cultural Exchange, Taiwan.</li>
		<li><strong>2016</strong> — Co-organised "ศิลป์อยู่เป็น" education programme by BACC.</li>
		<li><strong>2019</strong> — "Common Traces" exhibition in Melbourne with TCB Art Inc.</li>
	</ul>

	<a href="mailto:tentaclesgallery@gmail.com" class="contact-btn">tentaclesgallery@gmail.com</a>
</div>

<style>
	.page-header { padding: 120px 0 1rem; }
	.about-body { padding-bottom: 5rem; max-width: 680px; }
	.about-body > p { font-size: .95rem; line-height: 1.7; color: var(--dark-gray); }

	.section-title { font-family: var(--mono); font-size: .6rem; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin: 2.5rem 0 1rem; }

	/* Timeline */
	.timeline { display: flex; flex-direction: column; }
	.tl-item { display: grid; grid-template-columns: 90px 1fr; gap: 1rem; padding: .85rem 0; border-bottom: 1px solid var(--light-gray); }
	.tl-yr { font-family: var(--mono); font-size: .8rem; color: var(--accent); }
	.tl-item span:last-child { color: var(--dark-gray); font-size: .85rem; }
	.tl-item:last-child { border: none; }

	/* Team */
	.team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
	.team-card { text-align: center; }
	.team-img { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto .5rem; border: 2px solid var(--light-gray); }
	.team-initials { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: var(--accent); color: #fff; font-size: 1rem; font-weight: 600; font-family: var(--mono); }
	.team-name { font-size: .8rem; font-weight: 600; color: var(--black); margin: 0 0 .1rem; }
	.team-role { font-size: .7rem; color: var(--mid-gray); margin: 0; font-family: var(--mono); }

	ul { list-style: none; padding: 0; margin-bottom: 2rem; }
	li { position: relative; padding-left: 1.5rem; margin-bottom: .65rem; color: var(--dark-gray); font-size: .85rem; line-height: 1.6; }
	li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

	.contact-btn {
		display: inline-block;
		padding: 12px 28px;
		font-family: var(--mono);
		font-size: .7rem;
		letter-spacing: .04em;
		background: var(--accent);
		color: var(--black);
		border: 1px solid var(--accent);
		transition: all .25s;
	}
	.contact-btn:hover { background: #d4a94a; opacity: 1; color: var(--black); }

	@media (max-width: 640px) {
		.team-grid { grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); }
		.tl-item { grid-template-columns: 70px 1fr; }
	}
</style>
