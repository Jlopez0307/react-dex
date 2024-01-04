import React from 'react';
import { View, Text } from 'react-native'

import Pokedex from '../components/Pokedex';


const DexScreen = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Pokedex/>
        </View>
    )
};

export default DexScreen;