import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, FlatList, Alert } from 'react-native';
import Header from './ServicesHeaderMain';
import ServiceIcon from '../common/ServiceIcon';

const { width: screenWidth } = Dimensions.get('window');
const isTablet = screenWidth > 600;

const iconsData = [
  { iconSource: require('../../assets/buai.png'), label: 'Bantuan Rawatan Kesuburan' },
  { iconSource: require('../../assets/Subfertiliti.webp'), label: 'Subfertiliti' },
  { iconSource: require('../../assets/Perancang_Keluarga.webp'), label: 'Perancang Keluarga' },
  { iconSource: require('../../assets/HPV_DNA.webp'), label: 'HPV DNA' },
  { iconSource: require('../../assets/Subsidi_Mamogram.webp'), label: 'Subsidi Mamogram' },
  { iconSource: require('../../assets/Saringan_Kesejahteraan.webp'), label: 'Saringan Kesejahteraan' },
  { iconSource: require('../../assets/PEKA.webp'), label: 'PEKA' },
  { iconSource: require('../../assets/Penyelidikan__Data_Mentah.webp'), label: 'Penyelidikan' },
  { iconSource: require('../../assets/SMARTSTART_2.0.webp'), label: 'SMARTSTART 2.0' },
  { iconSource: require('../../assets/SMARTBelanja.webp'), label: 'SMARTBelanja' },
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTEEN' },
  { iconSource: require('../../assets/Kaunseling.webp'), label: 'Kaunseling' },
  { iconSource: require('../../assets/KeluargaKerja.webp'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.webp'), label: 'IlmuKeluarga' },
];

function ServicesScreen({ navigation }) {

  const renderServiceIcon = ({ item }) => (
    <ServiceIcon 
      iconSource={item.iconSource} 
      label={item.label} 
      onPress={() => navigateToService(item.label)}
    />
  );

  const handleBackPress = () => {
    navigation.goBack();
  }

  const navigateToService = (serviceLabel) => {
    switch (serviceLabel) {
      case 'Perancang Keluarga':
        navigation.navigate('PerancangKeluarga');
        break;
      case 'PEKA':
        navigation.navigate('Peka');
        break;
      case 'SMARTSTART 2.0':
        navigation.navigate('Smartstart');
        break;
      case 'Subsidi Mamogram':
        navigation.navigate('SubsidiMamogram');
        break;
      case 'Kaunseling':
        navigation.navigate('Kaunseling');
        break;
      case 'Keluarga@Kerja':
        navigation.navigate('KeluargaKerja');
        break;
      case 'SMARTBelanja':
        navigation.navigate('SmartBelanja');
        break;
      case 'IlmuKeluarga':
        navigation.navigate('Ilmukeluarga');
        break;
      case 'HPV DNA':
        navigation.navigate('HPVDNA');
        break;
      case 'Subfertiliti':
        navigation.navigate('Subfertiliti');
        break;
      case 'Penyelidikan':
        navigation.navigate('Penyelidikan');
        break;
      case 'Saringan Kesejahteraan':
        navigation.navigate('SaringanKesejahteraan');
        break;
      case 'KafeTEEN':
        navigation.navigate('KafeTeen');
        break;
      case 'KASIH Keibubapaan Digital':
        Alert.alert('Coming Soon!');
        break;
      case 'Bantuan Rawatan Kesuburan':
        navigation.navigate('Bantuan Rawatan Kesuburan');
        break;
      default:
        break;
    }
  }   

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={handleBackPress} />
      <View style={styles.contentContainer}>
          <FlatList
            data={iconsData}
            renderItem={renderServiceIcon}
            keyExtractor={(item, index) => index.toString()}
            numColumns={isTablet ? 5 : 4}
            key={isTablet ? 'tablet-grid' : 'mobile-grid'} 
            contentContainerStyle={styles.listContent}
            scrollEnabled={true} 
            showsVerticalScrollIndicator={false}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9448DA',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  listContent: {
    paddingTop: 30,
    paddingBottom: 60,
    alignItems: 'center', 
  },
});

export default ServicesScreen;