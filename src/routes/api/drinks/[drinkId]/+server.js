import { API_SEARCHNAME, API_SEARCHFIRSTLETTER, API_SEARCHINGREDIENT } from '$env/static/private'
import { CATEGORIES } from '$lib/constants';

export const GET = async ({ params }) => {

    let filter = 'filter';
    let key = 'a';

    if (params.drinkId === 'Alcoholic' || params.drinkId === 'Non Alcoholic') {
        filter = 'filter';
        key = 'a';
    }
    else if (CATEGORIES.includes(params.drinkId)) {
        filter = 'filter';
        key = 'c';
    }
    else {
        filter = 'search';
        key = 's';
    }


    const APIKEY = params.drinkId.length === 1 ? API_SEARCHFIRSTLETTER : API_SEARCHNAME;

    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${filter}.php?${key}=${params.drinkId}`)

    const data = await res.json()

    const drinks = data.drinks;

    return new Response(JSON.stringify({ drinks }))
} 
