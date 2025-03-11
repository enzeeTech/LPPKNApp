import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, Alert } from 'react-native';
import Header from './ServicesHeaderMain';
import ServiceIcon from '../common/ServiceIcon';
import GlobalApi from '../../services/GlobalApi';

const screenHeight = Dimensions.get('window').height;

// Array of icons and labels for each row of icons
const iconsData = [
  { iconSource: require('../../assets/buai.png'), label: 'Rawatan Kesuburan' },
  // { iconSource: require('../../assets/buai2.png'), label: 'BUAI' },
  { iconSource: require('../../assets/subfertiliti.png'), label: 'Subfertiliti' },
  { iconSource: require('../../assets/perancangKeluarga.png'), label: 'Perancang Keluarga' },
  { iconSource: require('../../assets/hpvdna.png'), label: 'HPV DNA' },
  { iconSource: require('../../assets/subsidiMamogram.png'), label: 'Subsidi Mamogram' },
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/smartstart.png'), label: 'SMARTSTART 2.0' },
  { iconSource: require('../../assets/smartBelanja.png'), label: 'SMARTBelanja' },
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTEEN' },
  { iconSource: require('../../assets/saringanKesejahteraan.png'), label: 'Saringan Kesejahteraan' },
  { iconSource: require('../../assets/PEKA.png'), label: 'PEKA' },
  { iconSource: require('../../assets/penyelidikan.png'), label: 'Penyelidikan' },
  // { iconSource: require('../../assets/keibubapaanDigital.png'), label: 'KASIH Keibubapaan Digital' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'IlmuKeluarga' },
];

function ServicesScreen({navigation}) {
  // const [perkhidmatanOptions, setPerkhidmatanOptions] = React.useState([]);

  // const serviceOrder = [
  //   'Subfertiliti',
  //   'Perancang Keluarga',
  //   'HPV DNA',
  //   'Subsidi Mamogram',
  //   'Kaunseling',
  //   'SMARTSTART 2.0',
  //   'SMARTBelanja',
  //   'KafeTEEN',
  //   'Saringan Kesejahteraan',
  //   'PEKA',
  //   'Penyelidikan & Data Mentah',
  //   'KASIH Keibubapaan Digital',
  //   'Keluarga@Kerja',
  //   'IlmuKeluarga',
  // ]

  // // Fetch perkhidmatan options from API
  // const fetchPerkhidmatanOptions = () => {
  //   GlobalApi.getPerkhidmatanOptions()
  //     .then((response) => {
  //       const perkhidmatanOptions = response.data.data.map((item) => ({
  //         id: item.id,
  //         label: item.attributes.Title,
  //         imageSource: item.attributes.Icon.data.attributes.url,
  //       }));

  //       const sortedOptions = perkhidmatanOptions.sort((a, b) => {
  //         return serviceOrder.indexOf(a.label) - serviceOrder.indexOf(b.label);
  //       });
        
  //       setPerkhidmatanOptions(perkhidmatanOptions);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // // Fetch perkhidmatan options on focus
  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchPerkhidmatanOptions();
  //   }, [])
  // );

  // Helper function to render each service icon
  const renderServiceIcon = ({ item }) => (
    <ServiceIcon 
      iconSource={item.iconSource} 
      label={item.label} 
      onPress={() => navigateToService(item.label)}
    />
  );

  // const renderServiceIcon = ({ item }) => (
  //   <ServiceIcon 
  //     iconSource={{uri: item.imageSource}} 
  //     label={item.label} 
  //     onPress={() => navigateToService(item.label)}
  //   />
  // );

  // Handle back press navigation
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
      case 'Rawatan Kesuburan':
        navigation.navigate('Rawatan Kesuburan');
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
            // data={perkhidmatanOptions}
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
    // paddingLeft: 0.5,
    paddingTop: 25,
    height: screenHeight,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: -13,
  },
});

export default ServicesScreen;