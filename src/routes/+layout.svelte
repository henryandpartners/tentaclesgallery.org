<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<div class="container nav-inner">
		<a href="/" class="logo">TENTACLES</a>
		<div class="nav-links">
			<a href="/about">About</a>
			<a href="/exhibitions">Exhibitions</a>
			<a href="/residency">Residency</a>
			<a href="/projects">Projects</a>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<footer>
	<div class="container footer-inner">
		<p>TENTACLES — Art Community, Bangkok</p>
		<p class="small">tentaclesgallery.com since 2014</p>
	</div>
</footer>

<style>
	nav {
		position: fixed; top: 0; left: 0; right: 0; z-index: 100;
		background: rgba(10,10,10,.95);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255,255,255,.06);
	}
	.nav-inner {
		display: flex; align-items: center; justify-content: space-between;
		height: 60px;
	}
	.logo {
		font-size: .9rem; font-weight: 500; letter-spacing: .2em;
		color: var(--white); text-transform: uppercase;
	}
	.nav-links { display: flex; gap: 1.5rem; }
	.nav-links a {
		font-size: .75rem; letter-spacing: .08em; text-transform: uppercase;
		color: var(--light); transition: color .2s;
	}
	.nav-links a:hover { color: var(--accent); opacity: 1; }

	footer {
		border-top: 1px solid rgba(255,255,255,.06);
		padding: 3rem 0;
		margin-top: 4rem;
	}
	footer p { color: var(--gray); font-size: .85rem; margin: 0; }
	footer .small { font-family: var(--mono); font-size: .7rem; color: var(--gray); margin-top: .25rem; }

	@media (max-width: 768px) {
		.nav-links { gap: 1rem; }
		.nav-links a { font-size: .7rem; }
	}
</style>
