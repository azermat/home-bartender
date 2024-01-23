<script>
	import '../styles.css';
</script>

<div class="top-bg"><img src="./src/lib/assets/image.png" alt="" class="w-full h-72"></div>

<nav class="navbar">
	<div class="absolute left-1">
		<form>
			<input
				type="search"
				placeholder="Mix it up: Suche ein Drink!"
				class="search-input peer"
				id="searchInput"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="search-svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</form>
	</div>

	<div class="flex items-center">
		<ul class="navbar-list">
			<li><a href="/">HOME</a></li>
			<li><a href="/cocktails">COCKTAILS</a></li>
			<li><a href="/">SETTINGS</a></li>
		</ul>
	</div>
</nav>

<slot />
