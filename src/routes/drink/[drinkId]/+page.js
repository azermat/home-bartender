
export const load = async ({params, fetch}) => {
    const fetchCocktails = async (id) => {
     const res = await fetch(`/api/drinks/${id}`)
     const data = await res.json()

     const drink = data.drinks.find(drink => drink.strDrink === params.drinkId)
 
     return drink
    }
    

   

    return {
     drink: await fetchCocktails(params.drinkId)
    }
 }