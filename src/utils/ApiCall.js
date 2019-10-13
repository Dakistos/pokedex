import axios from 'axios'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=100'

export async function pokemonList(){
    const response = await axios.get(API)
    return response;
}
