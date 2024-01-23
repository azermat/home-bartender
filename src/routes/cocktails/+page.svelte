<script>
	export let data;
	console.log(data.drinks);
</script>

<div class="flex flex-col items-center">
	<h1 class="flex text-3xl font-bold pt-5">BASIC COCKTAILS</h1>
	<p class="pt-3 font-semibold">
		Fifteen foundational cocktails, core recipes representing the four drink families: Slings &
		Sours, Grogs & Nogs.
	</p>
	<h1 class="font-clarendon italic font-semibold pt-3 text-3xl">Drinks</h1>
	<div class="flex flex-wrap pt-6 justify-center lg:w-3/5">
		{#each data.drinks as cocktail}
			<a
				href="/"
				class="bg-image relative p-2 my-3 mx-3 h-72 rounded-xl text-center shadow-sm transform duration-300 transition-transform hover:scale-105 hover:text-red-900 hover:bg-black"
			>
				<img src={cocktail.strDrinkThumb} alt="" class="w-60 h-60 rounded-xl shadow-md" />
				<h1 class="text-xl font-clarendon font-semibold pt-1 uppercase">{cocktail.strDrink}</h1>
			</a>
		{/each}
	</div>
</div>
