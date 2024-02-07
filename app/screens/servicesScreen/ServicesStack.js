import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMain from './index';
import PerancangKeluarga from './screens/PerancangKeluarga';
import Peka from './screens/Peka'
import Smartstart from './screens/Smartstart';
import SubsidiMamogram from './screens/SubsidiMamogram';
import Kaunseling from './screens/Kaunseling';
import KeluargaKerja from './screens/KeluargaKerja';
import SmartBelanja from './screens/SmartBelanja';
import Ilmukeluarga from './screens/Ilmukeluarga';
import Penyelidikan from './screens/Penyelidikan';
import HPVDna from './screens/HPVDNA';
import Subfertiliti from './screens/Subfertiliti';
import SaringanKesejahteraan from './screens/SaringanKesejahteraan';
import KafeTeen from './screens/KafeTeen';

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
      <Stack.Screen name="KeluargaKerja" component={KeluargaKerja} />
      <Stack.Screen name="SmartBelanja" component={SmartBelanja} />
      <Stack.Screen name="Ilmukeluarga" component={Ilmukeluarga} />
      <Stack.Screen name="Penyelidikan" component={Penyelidikan} />
      <Stack.Screen name="HPVDNA" component={HPVDna} />
      <Stack.Screen name="Subfertiliti" component={Subfertiliti} />
      <Stack.Screen name="SaringanKesejahteraan" component={SaringanKesejahteraan} />
      <Stack.Screen name="KafeTeen" component={KafeTeen} />
    </Stack.Navigator>
  );
};

export default ServicesStack;