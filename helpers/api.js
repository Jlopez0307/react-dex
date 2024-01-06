//API calls in an API class

//Pokemon searched should be at the end of link
const BASE_API = `https://pokeapi.co/api/v2/pokemon/`

class PokemonAPI {
    static async getPokemon(pokemon) {
        try{
            const req = await fetch(
                `${BASE_API}/${pokemon}`
            );
            const json = await req.json();
            return json;
        } catch(e) {
            console.error(e);
        };
    };

    static async getKantoPokemon() {
        try{
            const req = await fetch(
                `${BASE_API}/?limit=151`
            );
            const json = await req.json();
            return json;
        } catch (e) {
            console.error(e);
        };
    };
};

export default PokemonAPI;