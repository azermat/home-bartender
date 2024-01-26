
export const load = async ({params, fetch}) => {
    const fetchCocktails = async (id) => {
     const res = await fetch(`/api/drinks/${id}`)
     const data = await res.json()
 
     return data.drinks
    }
    
    return {
     drinks: await fetchCocktails(params.categoryId)
    }
 }
 