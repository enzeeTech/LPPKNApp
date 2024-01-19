// Js file for HomeScreen StackNavigator. Setup all the screens that will be used in Home
// in this stack navigator.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import HubungikamiScreen from './infoPages/HubungiKami'; 
import TetangKamiScreen from './infoPages/TetangKami';
import BulletinHome from '../bulletinMain/index';
import BulletingInfo from '../bulletinInfo/index';
import PerancangKeluarga from '../servicesScreen/services/PerancangKeluarga';
import Peka from '../servicesScreen/services/Peka';
import SubsidiMamogram from '../servicesScreen/services/SubsidiMamogram';
import Kaunseling from '../servicesScreen/services/Kaunseling';
import KeluargaKerja from '../servicesScreen/services/KeluargaKerja';
import SmartBelanja from '../servicesScreen/services/SmartBelanja';
import Ilmukeluarga from '../servicesScreen/services/Ilmukeluarga';
import HpvDna from '../servicesScreen/services/HPVDNA';
import Subfertiliti from '../servicesScreen/services/Subfertiliti';


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
      <Stack.Screen name="BulletinHome" component={BulletinHome} />
      <Stack.Screen name="BulletingInfo" component={BulletingInfo} /> 
      <Stack.Screen name="PerancangKeluarga" component={PerancangKeluarga} />
      <Stack.Screen name="Peka" component={Peka} />
      <Stack.Screen name="SubsidiMamogram" component={SubsidiMamogram} />
      <Stack.Screen name="Kaunseling" component={Kaunseling} />
      <Stack.Screen name="KeluargaKerja" component={KeluargaKerja} />
      <Stack.Screen name="SmartBelanja" component={SmartBelanja} />
      <Stack.Screen name="Ilmukeluarga" component={Ilmukeluarga} />
      <Stack.Screen name="HPVDNA" component={HpvDna} />
      <Stack.Screen name="Subfertiliti" component={Subfertiliti} />
    </Stack.Navigator>
  );
};

export default HomeStack;
