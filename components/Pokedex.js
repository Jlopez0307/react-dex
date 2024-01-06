import React, {useState, useEffect} from 'react'
import { Text, View, TextInput, Button, Alert, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Linking } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

import CharmanderImage from '../images/charmander.png';
import SquirtleImage from '../images/Squirtle.png';
import BulbasaurImage from '../images/Bulbasaur.jpg';

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

    // useEffect(() => {
    //     getKantoPokemon();
    // }, []);

    // const getKantoPokemon = async () => {
    //     try {
    //         const req = await PokemonAPI.getKantoPokemon();
    //         setPokemonList(req.results);
    //         setLoading(false);
    //     } catch (e) {
    //         console.error(e);
    //     };
    // };

    const getPokemon = async () => {
        try{
            const req = await PokemonAPI.getPokemon(search);
            setPokemonRes(req);
        } catch (e) {
            console.error(e);
        }
    }

    const testPokemon = [
        {
            name: 'Bulbasaur',
            image: BulbasaurImage,
            types: {
                0: {
                    name: 'grass',
                    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl0s-d443a3b4-fa4e-47a6-99b4-d2a769785614.png/v1/fill/w_1280,h_1280/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwwcy1kNDQzYTNiNC1mYTRlLTQ3YTYtOTliNC1kMmE3Njk3ODU2MTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6-S1a0_YYhlP6eXW5QqrJk4jtv6b5a3MRuugxqhJ6EA'
                },
                1: {
                    name: 'poison',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'
                }
            }
            
        },
        {
            name: 'Squirtle',
            image: SquirtleImage,
            types: {
                0: {
                    name: 'water',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png'
                },
            }
        },
        {
            name: 'Charmander',
            image: CharmanderImage,
            types: {
                0: {
                    name: 'fire',
                    image: 'https://image.pngaaa.com/886/6175886-middle.png'
                }
            }
        }
    ];

    // if(isLoading) {
    //     return <Text>Loading...</Text>
    // } 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* {pokemonList.map(pokemon => 
                    <Text
                        key={pokemon.name}
                        style={{color: 'blue'}} 
                        onPress={() => Linking.openURL(pokemon.url)}
                    >
                            {pokemon.name}
                    </Text>)} */}
                    {testPokemon.map(pokemon => 
                        <Card key={pokemon.name} styles={styles.cardContainer}>
                            <Card.Title>{pokemon.name}</Card.Title>
                            <Image style={{width: 100, height: 100}} source={`${pokemon.image}`} />
                            <Card.Divider />
                            <Image style={{width: 50, height: 50}} source={{uri: `${pokemon.types[0].image}`}}/>
                        </Card>    
                    )}
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
        borderWidth: 1,
        borderColor: 'red'
    },
    scrollView: {
        backgroundColor: '#E5E4E2',
        borderWidth: 1,
        borderColor: 'red',
        width: '100%',
        
    },
    text: {
        fontSize: 15
    },
    cardContainer: {
        flex: 1
    }
});

export default Pokedex;