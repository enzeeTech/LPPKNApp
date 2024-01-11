import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList } from 'react-native';
import Header from './ServicesHeaderMain';
import ServiceIcon from '../common/ServiceIcon';

const screenHeight = Dimensions.get('window').height;

// Array of icons and labels for each row of icons
const iconsData = [
  { iconSource: require('../../assets/subfertiliti.png'), label: 'Subfertiliti' },
  { iconSource: require('../../assets/perancangKeluarga.png'), label: 'Perancang Keluarga' },
  { iconSource: require('../../assets/hpvdna.png'), label: 'HPV DNA' },
  { iconSource: require('../../assets/subsidiMamogram.png'), label: 'Subsidi Mamogram' },
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/smartstart.png'), label: 'SMARTSTART 2.0' },
  { iconSource: require('../../assets/smartBelanja.png'), label: 'SMARTBelanja' },
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTeen' },
  { iconSource: require('../../assets/saringanKesejahteraan.png'), label: 'Saringan Kesejahteraan' },
  { iconSource: require('../../assets/PEKA.png'), label: 'PEKA' },
  { iconSource: require('../../assets/penyelidikan.png'), label: 'Penyelidikan & Data Mentah' },
  { iconSource: require('../../assets/keibubapaanDigital.png'), label: 'KASIH Keibubapaan Digital' },
  { iconSource: require('../../assets/mamaCare.png'), label: 'MamaCare' },
  { iconSource: require('../../assets/keibubapaanDatukNenek.png'), label: 'Keibubapaan Datuk Nenek' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'Ilmu Keluarga' },
];

function ServicesScreen({navigation}) {

  // Helper function to render each service icon
  const renderServiceIcon = ({ item }) => (
    <ServiceIcon 
      iconSource={item.iconSource} 
      label={item.label} 
      onPress={() => navigateToService(item.label)}
    />
  );

  // Handle back press navigation
  const handleBackPress = () => {
    navigation.goBack();
  }

  // Navigate to the selected service screen
  const navigateToService = (serviceLabel) => {
    switch (serviceLabel) {
      case 'Perancang Keluarga':
        navigation.navigate('PerancangKeluarga');
        break;
      default:
        break;
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={handleBackPress} />
      <View style={styles.content}>
          <FlatList
            data={iconsData}
            renderItem={renderServiceIcon}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            contentContainerStyle={styles.content}
            scrollEnabled={false}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#9448DA',
  },
  content: {
    alignContent: 'center',
    paddingLeft: 4.5,
    paddingTop: 25,
    height: screenHeight,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: -13,
  },
});

export default ServicesScreen;