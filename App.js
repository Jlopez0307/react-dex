import { StatusBar } from 'expo-status-bar';

import React, {
  useState,
} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import DexScreen from './Screens/DexScreen';
import TypesScreen from './Screens/TypesScreen';

import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TextInput
} from 'react-native'

//images
import DexIcon from './images/pokemon_pokecenter_icon-icons.com_67517.svg'


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Pokedex'
        activeColor='#E44D2E'
        inactiveColor='white'
        barStyle={{
          backgroundColor: '#2A3439',
        }}
      >
        <Tab.Screen 
          name="DexScreen" 
          component={DexScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return <Image 
                style={{width: size, height: size}}
                source={{uri: `${DexIcon}`}}
              />
            }
          }}
        />
        <Tab.Screen name="TypesScreen" component={TypesScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
