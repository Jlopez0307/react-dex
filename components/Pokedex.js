import React, {useState, useEffect} from 'react'
import { Text, View, TextInput, Button, Alert, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Linking } from 'react-native'

import PokemonAPI from '../helpers/api'

const Pokedex = () => {
    //state for user search of a pokemon
    const [ search, setSearch ] = useState('');
    const [ pokemonRes, setPokemonRes ] = useState([]);

    //state for loading before data renders
    const [ isLoading, setLoading ] = useState(true);

    //List for initial pokemon dex renders
    const [pokemonList, setPokemonList] = useState([]);
    console.log(pokemonList)

    useEffect(() => {
        getKantoPokemon();
    }, []);

    const getKantoPokemon = async () => {
        try {
            const req = await PokemonAPI.getKantoPokemon();
            setPokemonList(req.results);
            setLoading(false);
        } catch (e) {
            console.error(e);
        };
    };

    const getPokemon = async () => {
        try{
            const req = await PokemonAPI.getPokemon(search);
            setPokemonRes(req);
        } catch (e) {
            console.error(e);
        }
    }

    if(isLoading) {
        return <Text>Loading...</Text>
    } 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {pokemonList.map(pokemon => 
                    <Text 
                        style={{color: 'blue'}} 
                        onPress={() => Linking.openURL(pokemon.url)}
                    >
                            {pokemon.name}
                    </Text>)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 15
    }
});

export default Pokedex;