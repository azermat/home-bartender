<script>
	export let data;

	const drink = data.drink;

	const ingredients = Array.from({ length: 15 }, (_, i) => ({
		ingredient: drink[`strIngredient${i + 1}`],
		measure: drink[`strMeasure${i + 1}`]
	})).filter(({ ingredient, measure }) => ingredient && measure);
</script>

<div class="flex flex-col pl-8">
	<h1 class="font-clarendon italic font-semibold pt-3 text-3xl">Recipe</h1>
	<div class="flex flex-wrap pt-6 lg:w-2/5">
		<div class="drink">
			<img src={drink.strDrinkThumb} alt="" class="w-[600px] h-[600px] rounded-xl shadow-md" />
			<h1 class="text-xl font-clarendon font-semibold pt-1 uppercase">{drink.strDrink}</h1>
		</div>
		<div class="py-6">
			<h1>INSTRUCTION: <br />{drink.strInstructions}</h1>
			<h1 class="pt-6">INGREDIENTS</h1>
			<ul>
				{#each ingredients as { ingredient, measure }}
					<li>{`${measure} ${ingredient}`}</li>
				{/each}
			</ul>
			<h1 class="pt-6">GLASS: {drink.strGlass}</h1>
			<h1 class="pt-6">{drink.strAlcoholic}</h1>
			<h1 class="pt-6">CATEGORY: {drink.strCategory}</h1>
		</div>
	</div>
</div>
