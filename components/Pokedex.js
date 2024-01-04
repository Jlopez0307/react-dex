import React, {useState, useEffect} from 'react'
import { Text, View, TextInput, Button, Alert, Image, StyleSheet } from 'react-native'

import PokemonAPI from '../helpers/api'

const Pokedex = () => {
    const [search, setSearch] = useState('')
    const [pokemonRes, setPokemonRes] = useState([]);

    useEffect(() => {
        const getStartingPokemon = async () => {
            try {
                const req = await PokemonAPI.getStartingPokemon();
                setPokemonRes(req);
                console.log(pokemonRes)
            } catch (e) {
                console.error(e);
            };
        };

        getStartingPokemon();
    }, []);

    const getPokemon = async () => {
        try{
            const req = await PokemonAPI.getPokemon(search);
            setPokemonRes(req);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <View style={styles.container}>
            <Text>POKEDEX</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Pokedex;