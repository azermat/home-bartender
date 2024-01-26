<script>
	export let data;
</script>

<div class="flex flex-col items-center">
	<h1 class="flex text-3xl font-bold pt-5">BASIC COCKTAILS</h1>
	<p class="pt-3 font-semibold">
		Many foundational cocktails, core recipes representing the four drink families: Slings &
		Sours, Grogs & Nogs.
	</p>
	<h1 class="font-clarendon italic font-semibold pt-3 text-3xl">Drinks</h1>
	<div class="flex flex-wrap pt-6 justify-center lg:w-3/5">
		{#each data.drinks as drink}
			<a sveltekit:prefetch href="/drink/{drink.strDrink}" class="cocktails">
				<img src={drink.strDrinkThumb} alt="" class="w-60 h-60 rounded-xl shadow-md" />
				<h1 class="text-xl font-clarendon font-semibold pt-1 uppercase">{drink.strDrink}</h1>
			</a>
		{/each}
	</div>
</div>
