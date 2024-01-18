import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMain from './index';
import PerancangKeluarga from './services/PerancangKeluarga';
import Peka from './services/Peka'
import Smartstart from './services/Smartstart';
import SubsidiMamogram from './services/SubsidiMamogram';
import Kaunseling from './services/Kaunseling';

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
      <Stack.Screen name="Peka" component={Peka} />
      <Stack.Screen name="Smartstart" component={Smartstart} />
      <Stack.Screen name="SubsidiMamogram" component={SubsidiMamogram} />
      <Stack.Screen name="Kaunseling" component={Kaunseling} />
    </Stack.Navigator>
  );
};

export default ServicesStack;