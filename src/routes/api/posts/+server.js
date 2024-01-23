import { API_KEY } from '$env/static/private'

export const GET = async ({ request, url }) => {
    const authHeader = request.headers.get('Authorization')

    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    const data = await res.json()

    const drinks = data.drinks;

    return new Response(JSON.stringify({drinks}), { status: 200 })
} 
