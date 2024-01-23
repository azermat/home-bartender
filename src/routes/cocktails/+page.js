export const load = async ({fetch}) => {
   const fetchCocktails = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()

    return data.drinks
   }
   
   return {
    drinks: await fetchCocktails()
   }
}
