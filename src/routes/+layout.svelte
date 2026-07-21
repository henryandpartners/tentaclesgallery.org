<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();

	let navOpen = $state(false);

	let isHome = $derived($page.url.pathname === '/');
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Fixed nav -->
<nav class="nav" class:nav-dark={!isHome}>
	<div class="container nav-inner">
		<a href="/" class="logo">
			<span class="logo-icon">◈</span>
			<span class="logo-text">TENTACLES</span>
			<span class="logo-dot">•</span>
			<small class="logo-sub">Gallery</small>
		</a>
		<button class="nav-toggle" aria-label="Toggle navigation" onclick={() => navOpen = !navOpen}>
			<span class="hamburger" class:open={navOpen}></span>
		</button>
		<div class="nav-menu" class:nav-menu-open={navOpen}>
			<a href="/about" class="nav-link">About</a>
			<a href="/exhibitions" class="nav-link">Exhibitions</a>
			<a href="/residency" class="nav-link">Residency</a>
			<a href="/projects" class="nav-link">Projects</a>
		</div>
	</div>
</nav>

<!-- Spacer for fixed nav -->
<div class="nav-spacer"></div>

<main>
	{@render children()}
</main>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<span class="footer-icon">◈</span>
				<p class="footer-title">TENTACLES</p>
				<p class="footer-sub">Art space, residency, and community gallery in Bangkok since 2014.</p>
			</div>
			<div class="footer-links">
				<p class="footer-heading">Navigate</p>
				<a href="/about">About</a>
				<a href="/exhibitions">Exhibitions</a>
				<a href="/residency">Residency</a>
				<a href="/projects">Projects</a>
			</div>
			<div class="footer-links">
				<p class="footer-heading">Venue</p>
				<a href="https://maps.google.com/?q=Narathiwas+22+Bangkok" target="_blank" rel="noopener">Narathiwas 22, Bangkok</a>
				<a href="mailto:tentaclesgallery@gmail.com">tentaclesgallery@gmail.com</a>
			</div>
		</div>
		<div class="footer-bottom">
			<p>TENTACLES Gallery • Est. 2014</p>
		</div>
	</div>
</footer>

<style>
	/* === NAV === */
	.nav {
		position: fixed; top: 0; left: 0; right: 0; z-index: 100;
		background: rgba(255,255,255,.92);
		backdrop-filter: blur(14px);
		border-bottom: 1px solid rgba(0,0,0,.06);
		transition: background .3s, border-color .3s;
	}
	.nav-dark {
		background: rgba(26,26,26,.95);
		border-bottom: 1px solid rgba(255,255,255,.08);
	}
	.nav-dark .logo-text,
	.nav-dark .logo-sub,
	.nav-dark .nav-link { color: rgba(255,255,255,.85); }
	.nav-dark .logo-icon { color: var(--accent); }
	.nav-dark .nav-link:hover { color: var(--accent); opacity: 1; }
	.nav-dark .hamburger,
	.nav-dark .hamburger::before,
	.nav-dark .hamburger::after { background: rgba(255,255,255,.85); }

	.nav-inner {
		display: flex; align-items: center; justify-content: space-between;
		height: 64px;
	}
	.logo { display: flex; align-items: baseline; gap: .25rem; }
	.logo-icon { color: var(--accent); font-size: .8rem; }
	.logo-text { font-size: .85rem; font-weight: 500; letter-spacing: .15em; text-transform: uppercase; color: var(--black); }
	.logo-dot { color: var(--accent); font-size: .5rem; }
	.logo-sub { font-size: .65rem; color: var(--mid-gray); letter-spacing: .04em; }

	.nav-menu { display: flex; align-items: center; gap: 2rem; }
	.nav-link {
		font-size: .7rem; letter-spacing: .1em; text-transform: uppercase;
		color: var(--dark-gray); transition: color .2s;
	}
	.nav-link:hover { color: var(--accent); opacity: 1; }

	.nav-toggle { display: none; background: none; border: none; cursor: pointer; }
	.hamburger {
		display: block; width: 20px; height: 1.5px; background: var(--black);
		position: relative; transition: background .2s;
	}
	.hamburger::before, .hamburger::after {
		content: ''; position: absolute; left: 0; width: 100%; height: 1.5px;
		background: var(--black); transition: transform .25s;
	}
	.hamburger::before { top: -6px; }
	.hamburger::after { top: 6px; }
	.hamburger.open { background: transparent; }
	.hamburger.open::before { transform: translateY(6px) rotate(45deg); }
	.hamburger.open::after { transform: translateY(-6px) rotate(-45deg); }

	.nav-spacer { height: 64px; }

	/* === FOOTER === */
	.footer {
		background: var(--black);
		color: rgba(255,255,255,.7);
		padding: 4rem 0 2rem;
		margin-top: 6rem;
	}
	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 3rem;
	}
	.footer-icon { color: var(--accent); font-size: .9rem; }
	.footer-title { font-size: 1.1rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--white); margin: .5rem 0 .25rem; }
	.footer-sub { font-size: .8rem; color: rgba(255,255,255,.5); line-height: 1.6; }
	.footer-heading { font-family: var(--mono); font-size: .6rem; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
	.footer-links { display: flex; flex-direction: column; gap: .5rem; }
	.footer-links a { font-size: .8rem; color: rgba(255,255,255,.6); transition: color .2s; }
	.footer-links a:hover { color: var(--accent); opacity: 1; }
	.footer-bottom { border-top: 1px solid rgba(255,255,255,.08); padding-top: 1.5rem; margin-top: 3rem; text-align: center; }
	.footer-bottom p { font-family: var(--mono); font-size: .65rem; color: rgba(255,255,255,.35); }

	@media (max-width: 768px) {
		.nav-inner { height: 56px; }
		.nav-spacer { height: 56px; }
		.nav-toggle { display: block; }
		.nav-menu {
			position: fixed; top: 56px; left: 0; right: 0;
			background: rgba(255,255,255,.98);
			backdrop-filter: blur(14px);
			flex-direction: column; gap: 0; padding: 1rem 0;
			border-bottom: 1px solid var(--light-gray);
			transform: translateY(-110%); opacity: 0;
			transition: all .3s;
		}
		.nav-dark .nav-menu { background: rgba(26,26,26,.98); border-color: rgba(255,255,255,.08); }
		.nav-menu-open { transform: translateY(0); opacity: 1; }
		.nav-link {
			padding: .85rem 1.5rem; font-size: .75rem;
			border-bottom: 1px solid rgba(0,0,0,.04);
		}
		.nav-dark .nav-link { border-color: rgba(255,255,255,.04); }
		.nav-link:last-child { border: none; }

		.footer-grid { grid-template-columns: 1fr; gap: 2rem; }
	}
</style>
