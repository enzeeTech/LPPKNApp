import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Image, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from './HomeScreenHeader';
import ServiceIcon from '../common/ServiceIcon';
import NewsItem from './customTiles/NewsItem';
import PosterItem from './customTiles/PosterItem';

const screenWidth = Dimensions.get('window').width;

// Array of icons and labels for each row of icons
const iconsData = [
  { iconSource: require('../../assets/subfertiliti.png'), label: 'Subfertiliti' },
  { iconSource: require('../../assets/perancangKeluarga.png'), label: 'Perancang Keluarga' },
  { iconSource: require('../../assets/hpvdna.png'), label: 'HPV DNA' },
  { iconSource: require('../../assets/subsidiMamogram.png'), label: 'Subsidi Mamogram' },
  { iconSource: require('../../assets/saringanKesejahteraan.png'), label: 'Saringan Kesejahteraan' },
  { iconSource: require('../../assets/PEKA.png'), label: 'PEKA' },
  { iconSource: require('../../assets/penyelidikan.png'), label: 'Penyelidikan' },
  { iconSource: require('../../assets/smartstart.png'), label: 'SMARTSTART 2.0' },
  { iconSource: require('../../assets/smartBelanja.png'), label: 'SMARTBelanja' },
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTeen' },
  { iconSource: require('../../assets/keibubapaanDigital.png'), label: 'Keibubapaan Digital' },
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'Ilmu Keluarga' },
];

// Array of image, title, and date for news
const newsData = [
  { title: 'Sambutan Hari Wanita Antarabangsa di Dewan Perdana FELDA, Kuala Lumpur',  date:'9 Mac 2023', imageSource: require('../../assets/homeDummy1.png')},
  { title: 'Program Kempen Kesedaran Kanser Reproduktif Wanita(WCaRe) Kuching',  date:'30 Jan 2023', imageSource: require('../../assets/homeDummy2.png')},
  { title: '850,000 Remaja Sertai Program PPK di Pusat Remaja KafeTEEN',  date:'13 Feb 2023', imageSource: require('../../assets/homeDummy3.png')},
  { title: 'Sambutan Hari Wanita Antarabangsa di Dewan Perdana FELDA, Kuala Lumpur',  date:'9 Mac 2023', imageSource: require('../../assets/homeDummy1.png')},
  { title: 'Program Kempen Kesedaran Kanser Reproduktif Wanita(WCaRe) Kuching',  date:'30 Jan 2023', imageSource: require('../../assets/homeDummy2.png')},
  { title: '850,000 Remaja Sertai Program PPK di Pusat Remaja KafeTEEN',  date:'13 Feb 2023', imageSource: require('../../assets/homeDummy3.png')},
];

// Array of image, title, and date for poster
const posterData = [
  { title: 'Pertandingan KASIH Keluarga Challenge',  date:'20 September 2023', imageSource: require('../../assets/poster1.png')},
  { title: 'Kempen Bulan Perancang Keluarga',  date:'10 September 2023', imageSource: require('../../assets/poster2.png')},
  { title: 'Kajian Kepuasan Pelanggan Klinik LPPKN 2023',  date:'29 Ogos 2023', imageSource: require('../../assets/poster3.png')},
  { title: 'Sambutan Ulangtahun LPPKN ke-57',  date:'15 Jun 2023', imageSource: require('../../assets/poster4.png')},
];

const HomeScreen = ({navigation}) => {
  // Function to render each row of icons
  const renderRow = (slicedIconsRow) => (
    <View style={styles.rowContainer}>
      {slicedIconsRow.map((icon, index) => (
        <ServiceIcon 
          key={`icon-${index}`} 
          iconSource={icon.iconSource} 
          label={icon.label}
          onPress={()=> navigateToService(icon.label)}/>
      ))}
    </View>
  );

  // Navigate to the selected service screen
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
      case 'HPV DNA':
          navigation.navigate('HPVDNA');
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
      case 'Ilmu Keluarga':
          navigation.navigate('Ilmukeluarga');
          break;
      case 'Subfertiliti':
          navigation.navigate('Subfertiliti');
          break;
      case 'Penyelidikan':
          navigation.navigate('Penyelidikan')
          break;
      case 'Saringan Kesejahteraan':
          navigation.navigate('SaringanKesejahteraan');
          break;
      case 'KafeTeen':
          navigation.navigate('KafeTeen');
          break;
      default:
        break;
    }
  }

  // Function to render each news row
  const renderNewsRow = (slicedNewsRow) => (
    <View style={styles.newsRowContainer}>
      {slicedNewsRow.map((news, index) => (
        <NewsItem 
          key={`news-${index}`} 
          title={news.title} 
          date={news.date} 
          imageSource={news.imageSource} />
      ))}
    </View>
  );
  
  // Function to render each poster row
  const renderPosterRow = (posterRow) => (
    <View style={styles.posterRowContainer}>
      {posterRow.map((poster, index) => (
        <PosterItem
          key={`poster-${index}`}
          title={poster.title}
          date={poster.date}
          imageSource={poster.imageSource}
        />
      ))}
    </View>
  );


  
  //////// SEARCH BAR FUNCTIONS AND DECLARATIONS ////////

  // State to store the visibility of the search bar
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle the visibility of the search bar
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchQuery('');
    }
  };

  // Function to hide the search bar
  const hideSearch = () => {
    setSearchVisible(false);
    setSearchQuery('');
  };

  const handleSearchPress = (query) => {
    console.log(`Search query: ${searchQuery}`); // Logging the search query upon button press
  };

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  }

  //////// LIHAT SEMUA NAVIGATION ////////

  const onBulletinLihatSemuaPress = () => {
    navigation.navigate('BulletinHome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header toggleSearch={toggleSearch} />
      </View>
      {searchVisible && (
        <TouchableWithoutFeedback onPress={hideSearch}>
          <View style={styles.searchOverlay} />
        </TouchableWithoutFeedback>
      )}
      {searchVisible && (
        <View style={styles.searchBarContainer}>
        <View style={styles.searchTab}>
          <View style={styles.searchIconContainer}>
            <Image 
              source={require('../../assets/greenSearchIcon.png')}
              style = {styles.searchIcon}
            />
            <View style={styles.seachTextContainer}>
              <TextInput 
                style={styles.searchText}
                placeholder="Masukkan carian"
                placeholderTextColor={'#A6A6A6'}
                value={searchQuery}
                onChangeText={updateSearchQuery}
              >
              </TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.confirmIconContainer} onPress={handleSearchPress}> 
          <Text style={styles.confirmText}>Cari</Text>
        </TouchableOpacity>
      </View>
      )}
      <ScrollView style={{marginTop: -9}} showsVerticalScrollIndicator={false}>
        {/* SLIDING NEWS SECTION */}
        <View style={styles.slidingNewsContainer}>
          <Image source={require('../../assets/newsTileDummy.png')} 
          style={{width: Platform.OS === 'ios' ? 400 : 450, height: 230, resizeMode: 'stretch'}}
          />
        </View>
        {/* PERKHIDMATAN SECTION */}
        <View style={styles.perkhidmatanContainer}>
          <Text style={styles.sectionText}>Perkhidmatan</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.gridContainer}>
              {renderRow(iconsData.slice(0, 7))}
              {renderRow(iconsData.slice(7, 14))}
            </View>
          </ScrollView>
        </View>
        {/* BERITA LPPKN SECTION */}
        <View style={styles.beritaContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sectionText}>Berita LPPKN</Text>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={onBulletinLihatSemuaPress}>
              <Text style={styles.sectionSubText}>Lihat Semua</Text>
              <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrow}/>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.beritaGridContainer}>
                {/* Render the news rows */}
                {renderNewsRow(newsData.slice(0, 2))}
                {renderNewsRow(newsData.slice(2, 4))}
                {renderNewsRow(newsData.slice(4, 6))}
            </View>
          </ScrollView>
        </View>
        {/* SOROTAN SECTION */}
        <View style={styles.sorotanContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sorotanText}>Sorotan</Text>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => console.log('Lihat Semua Button Pressed!')}>
              <Text style={styles.sorotanSubText}>Lihat Semua</Text>
              <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrowSorotan}/>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
                {/* Render the poster row */}
                {renderPosterRow(posterData)}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Stylesheet for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#FFFFFF',

  },
  headerContainer: {
    backgroundColor: '#FFFFFF', 
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 5,
  },
  slidingNewsContainer: {
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
    marginTop: 6,
  },
  rightArrow: {
    width: 8, 
    height: 8, 
    marginTop: Platform.OS === 'ios' ? 8.5 : 10.4, 
    marginRight: 10, 
    marginLeft: 3, 
    resizeMode: 'contain'
  },
  rightArrowSorotan: {
    width: 8, 
    height: 8, 
    marginTop: Platform.OS === 'ios' ? 29.5 : 30.7, 
    marginRight: 10, 
    marginLeft: 3, 
    resizeMode: 'contain'
  },
  sorotanSubText: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#9A9C9E',
    fontSize: 11,
    marginTop: 27,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: Platform.OS === 'ios' ? screenWidth * 1.70 : screenWidth * 1.70, 
    marginLeft: 3,
  },
  beritaGridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: Platform.OS === 'ios' ? screenWidth * 1.65: screenWidth * 1.55, 
  },
  rowContainer: {
    flexDirection: 'row',
    width: screenWidth, 
    justifyContent: 'space-between',
  },
  beritaContainer: {
    flexDirection: 'column',
    height: 450,
    marginTop: 15,
  },
  newsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 10,
  },
  posterRowContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
  },
  sorotanContainer: { 
    backgroundColor: '#ECDDFF',
    flexDirection: 'column',
    height: 470,
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
  searchOverlay: {
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#9448DA',
    height: 100,
    width: '100%',
    marginTop: '-5%',
    zIndex: 2,
  },
  searchTab: {
    width: '75%',
    height: 40,
    marginTop: '9%',
    marginLeft: '6%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: '#CBCBCB',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
  },
  searchIconContainer: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    marginLeft: 8,
  },
  searchIcon: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
    marginTop: '15%',
  },
  seachTextContainer: {
    width: 250,
    height: '100%',
  },
  searchText: {
    color: 'black',
    fontSize: 14,
    marginTop: Platform.OS === 'ios' ? '3.5%' : '2%',
    marginLeft: '8%',
  },
  confirmIconContainer: {
    width: '13%',
    height: '20%',
    marginTop: '11.5%',
    marginLeft: '4%',
  },
  confirmText: {
    color: '#21CF44',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;