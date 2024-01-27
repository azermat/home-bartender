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
			<ul class="bg-root flex flex-col items-center p-4 mt-4 rounded-md shadow-md border border-gray-300 w-[300px] transform duration-1000 
			transition-transform xl:hover:scale-150 xl:hover:translate-x-24 xl:hover:shadow-none xl:hover:border-none">
				<h1 class="font-bold pb-2">INGREDIENT LIST</h1>
				<div class="w-full">
					{#each ingredients as { ingredient, measure }}
						<li class="flex items-center pt-3">
							<img
								src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-small.png`}
								alt=""
								class="w-20 h-20 pr-1"
							/>
							<span class="font-semibold overflow-hidden">{`${measure} ${ingredient}`}</span>
						</li>
					{/each}
				</div>
			</ul>
			<h1 class="pt-6">GLASS: {drink.strGlass}</h1>
			<h1 class="pt-6">{drink.strAlcoholic}</h1>
			<h1 class="pt-6">CATEGORY: {drink.strCategory}</h1>
		</div>
	</div>
</div>
