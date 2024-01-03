import { StatusBar } from 'expo-status-bar';

import React, {
  useState,
} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import DexScreen from './Screens/DexScreen';
import TypesScreen from './Screens/TypesScreen';

import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TextInput
} from 'react-native';

import Pokedex from './components/Pokedex';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if(route.name === "Dex") {
              iconName = focused ? 'dex' : 'dex-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTineColor: 'tomato',
          inactiveTineColor: 'gray',
        }}
      >
        <Tab.Screen name="Dex" component={DexScreen}/>
        <Tab.Screen name="Types" component={TypesScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
