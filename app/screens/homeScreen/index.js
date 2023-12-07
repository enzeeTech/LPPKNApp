import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, Platform} from 'react-native';
import { ScrollView } from 'react-native';
import Header from './HomeScreenHeader';
import ServiceIcon from './ServiceIcon';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Array of icons and labels
const iconsData = [
  { iconSource: require('../../assets/subfertiliti.png'), label: 'Subfertiliti' },
  { iconSource: require('../../assets/perancangKeluarga.png'), label: 'Perancang Keluarga' },
  { iconSource: require('../../assets/hpvdna.png'), label: 'HPV DNA' },
  { iconSource: require('../../assets/subsidiMamogram.png'), label: 'Subsidi Mamogram' },
  { iconSource: require('../../assets/saringanKesejahteraan.png'), label: 'Saringan Kesejahteraan' },
  { iconSource: require('../../assets/PEKA.png'), label: 'PEKA' },
  { iconSource: require('../../assets/mamaCare.png'), label: 'MamaCare' },
  { iconSource: require('../../assets/penyelidikan.png'), label: 'Penyelidikan' },
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/smartstart.png'), label: 'SMARTSTART 2.0' },
  { iconSource: require('../../assets/smartBelanja.png'), label: 'SMARTBelanja' },
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTeen' },
  { iconSource: require('../../assets/keibubapaanDigital.png'), label: 'Keibubapaan Digital' },
  { iconSource: require('../../assets/keibubapaanDatukNenek.png'), label: 'Keibubapaan Datuk Nenek' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'Ilmu Keluarga' },
];

const HomeScreen = () => {

  // Function to render each row
  const renderRow = (iconsForRow) => (
    <View style={styles.rowContainer}>
      {iconsForRow.map((icon, index) => (
        <ServiceIcon key={`icon-${index}`} iconSource={icon.iconSource} label={icon.label} />
      ))}
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: screenHeight * 2}}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        {/* SLIDING NEWS SECTION */}
        <View style={styles.slidingNewsContainer}>
          {/* <Text style={{textAlign: 'center', paddingTop: 110, fontWeight: 'bold'}}>Sliding news here</Text> */}
          <Image source={require('../../assets/newsTileDummy.png')} 
          style={{width: Platform.OS === 'ios' ? 400 : 450, height: 230, resizeMode: 'stretch'}}
          />
        </View>
        {/* PERKHIDMATAN SECTION */}
        <View style={styles.perkhidmatanContainer}>
          <Text style={styles.perkhidmatanText}>Perkhidmatan</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.gridContainer}>
              {renderRow(iconsData.slice(0, 8))}
              {renderRow(iconsData.slice(8, 16))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 2,
    backgroundColor: '#FFFFFF',

  },
  headerContainer: {
    backgroundColor: 'transparent', 
    zIndex: 5,
  },
  slidingNewsContainer: {
    backgroundColor: 'red',
    height: 230,
    marginTop: -13,
  },
  perkhidmatanContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    height: 280,
    marginTop: 15,
  },
  perkhidmatanText: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#9448DA',
    fontWeight: 'bold',
    height: 30,
    fontSize: 19,
    marginLeft: 10,
  },
  gridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: Platform.OS === 'ios' ? screenWidth * 1.87 : screenWidth * 1.8, 
    marginLeft: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    width: screenWidth, 
    justifyContent: 'space-between',
  },
});

export default HomeScreen;