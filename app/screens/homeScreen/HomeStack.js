// Js file for HomeScreen StackNavigator. Setup all the screens that will be used in Home
// in this stack navigator.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import HubungikamiScreen from './infoPages/HubungiKami'; 
import TetangKamiScreen from './infoPages/TetangKami';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}    
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hubungikami" component={HubungikamiScreen} />
      <Stack.Screen name="Tetangkami" component={TetangKamiScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;