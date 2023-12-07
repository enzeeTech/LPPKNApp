import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, Platform, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';
import Header from './HomeScreenHeader';
import ServiceIcon from './ServiceIcon';

const screenWidth = Dimensions.get('window').width;

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.sectionText}>Perkhidmatan</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.gridContainer}>
              {renderRow(iconsData.slice(0, 8))}
              {renderRow(iconsData.slice(8, 16))}
            </View>
          </ScrollView>
        </View>
        {/* Berita LPPKN SECTION */}
        <View style={styles.beritaContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sectionText}>Berita LPPKN</Text>
            <TouchableOpacity onPress={() => console.log('Lihat Semua Berita LPPKN Button Pressed!')}>
              <Text style={styles.sectionSubText}>Lihat Semua {'>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* <View style={styles.gridContainer}>
              {renderRow(iconsData.slice(0, 8))}
              {renderRow(iconsData.slice(8, 16))}
            </View> */}
          </ScrollView>
        </View>
        {/* Sorotan SECTION */}
        <View style={styles.sorotanContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sorotanText}>Sorotan</Text>
            <TouchableOpacity onPress={() => console.log('Lihat Semua Berita LPPKN Button Pressed!')}>
              <Text style={styles.sorotanSubText}>Lihat Semua {'>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* <View style={styles.gridContainer}>
              {renderRow(iconsData.slice(0, 8))}
              {renderRow(iconsData.slice(8, 16))}
            </View> */}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: 'column',
    height: 280,
    marginTop: 25,
  },
  sectionText: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#9448DA',
    fontWeight: '800',
    height: 30,
    fontSize: 19,
    marginLeft: 13,
  },
  sectionSubText: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#9A9C9E',
    fontSize: 11,
    marginTop: 9,
    marginRight: 20,
  },
  sorotanSubText: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#9A9C9E',
    fontSize: 11,
    marginTop: 28,
    marginRight: 20,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: Platform.OS === 'ios' ? screenWidth * 1.95 : screenWidth * 1.86, 
    marginLeft: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    width: screenWidth, 
    justifyContent: 'space-between',
  },
  beritaContainer: {
    backgroundColor: 'yellow',
    flexDirection: 'column',
    height: 400,
    marginTop: 15,
  },
  sorotanContainer: { 
    backgroundColor: '#ECDDFF',
    flexDirection: 'column',
    height: 350,
    marginTop: 15,
  },
  sorotanText: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#9448DA',
    fontWeight: '800',
    height: 30,
    fontSize: 19,
    marginLeft: 13,
    marginTop: 20,
  },
});

export default HomeScreen;