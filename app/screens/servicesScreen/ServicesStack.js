import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMain from './index';
import PerancangKeluarga from './services/PerancangKeluarga';

const Stack = createNativeStackNavigator();

const ServicesStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}    
    >
      <Stack.Screen name="ServiceMain" component={ServiceMain} />
      <Stack.Screen name="PerancangKeluarga" component={PerancangKeluarga} />
    </Stack.Navigator>
  );
};

export default ServicesStack;