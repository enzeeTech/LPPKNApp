// Js file for HomeScreen StackNavigator. Setup all the screens that will be used in Home
// in this stack navigator.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import HubungikamiScreen from './infoPages/HubungiKami'; 
import TetangKamiScreen from './infoPages/TetangKami';
import BulletinHome from '../bulletinMain/index';
import BulletinInfo from '../bulletinInfo/index';
import PerancangKeluarga from '../servicesScreen/screens/PerancangKeluarga';
import Peka from '../servicesScreen/screens/Peka';
import Smartstart from '../servicesScreen/screens/Smartstart';
import SubsidiMamogram from '../servicesScreen/screens/SubsidiMamogram';
import Kaunseling from '../servicesScreen/screens/Kaunseling';
import KeluargaKerja from '../servicesScreen/screens/KeluargaKerja';
import SmartBelanja from '../servicesScreen/screens/SmartBelanja';
import Ilmukeluarga from '../servicesScreen/screens/Ilmukeluarga';
import HPVDNA from '../servicesScreen/screens/HPVDNA';
import Subfertiliti from '../servicesScreen/screens/Subfertiliti';
import Penyelidikan from '../servicesScreen/screens/Penyelidikan';
import SaringanKesejahteraan from '../servicesScreen/screens/SaringanKesejahteraan';
import KafeTeen from '../servicesScreen/screens/KafeTeen';
import SorotanMain from '../sorotanScreen/index';
import SorotanArticle from '../sorotanScreen/sorotanArticleScreen/index';
import LocationCollection from '../servicesScreen/locationCollection/index';
import LocationInfoScreen from '../locationInfoScreen/index';
import Buai from '../servicesScreen/screens/Buai';


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
      <Stack.Screen name="BulletingInfo" component={BulletinInfo} /> 
      <Stack.Screen name="SorotanHome" component={SorotanMain} />
      <Stack.Screen name="SorotanArticle" component={SorotanArticle} />
      <Stack.Screen name="PerancangKeluarga" component={PerancangKeluarga} />
      <Stack.Screen name="Peka" component={Peka} />
      <Stack.Screen name="Smartstart" component={Smartstart} />
      <Stack.Screen name="SubsidiMamogram" component={SubsidiMamogram} />
      <Stack.Screen name="Kaunseling" component={Kaunseling} />
      <Stack.Screen name="KeluargaKerja" component={KeluargaKerja} />
      <Stack.Screen name="SmartBelanja" component={SmartBelanja} />
      <Stack.Screen name="Ilmukeluarga" component={Ilmukeluarga} />
      <Stack.Screen name="Penyelidikan" component={Penyelidikan} />
      <Stack.Screen name="HPVDNA" component={HPVDNA} />
      <Stack.Screen name="Subfertiliti" component={Subfertiliti} />
      <Stack.Screen name="SaringanKesejahteraan" component={SaringanKesejahteraan} />
      <Stack.Screen name="KafeTeen" component={KafeTeen} />
      <Stack.Screen name="LocationCollection" component={LocationCollection} />
      <Stack.Screen name="LocationInfoScreen" component={LocationInfoScreen} />
      <Stack.Screen name="Rawatan Kesuburan" component={Buai} />
    </Stack.Navigator>
  );
};

export default HomeStack;
