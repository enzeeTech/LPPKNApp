import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Image, Platform, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from './HomeScreenHeader';
import ServiceIcon from '../common/ServiceIcon';
import NewsItem from './customTiles/NewsItem';
import PosterItem from './customTiles/PosterItem';
import ContentSlider from './ContentSlider';
import GlobalApi from '../../services/GlobalApi';

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
  { iconSource: require('../../assets/kafeTeen.png'), label: 'KafeTEEN' },
  // { iconSource: require('../../assets/keibubapaanDigital.png'), label: 'Keibubapaan Digital' },
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'IlmuKeluarga' },
];

const HomeScreen = ({navigation}) => {
  const [bulletinItems, setBulletinItems] = useState([]);
  const [posterItems, setPosterItems] = useState([]);
  const [contentData, setContentData] = useState([]);

  // Function to format the date correctly
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    // Create a date object from dateString
    const date = new Date(dateString);
    // Format date to local string with specified options
    const formattedDate = date.toLocaleDateString('ms-MY', options);

    return formattedDate;
  };

    //////// CONTENT SLIDER ////////
  
    useEffect(() => {
      const fetchContent = async () => {
        try {
          const response = await GlobalApi.getHomeSliderContent();
          if (response.data) {
            // Assuming 'data' is the field where your content is returned
            // You might need to adjust the mapping depending on your exact data structure
            const formattedData = response.data.data.map(item => ({
              id: item.id,
              type: item.attributes.Content.data.attributes.mime.includes('video') ? 'video' : 'image',
              source: { uri: item.attributes.Content.data.attributes.url },
              title: item.attributes.Title,
              subtitle: item.attributes.Subtitle
            }));
            setContentData(formattedData);
            // Testing with empty data
            // setContentData([]);
          }
        } catch (error) {
          console.error('Error fetching home slider content:', error);
        }
      };
  
      fetchContent();
    }, []);


  // Calling API to get bulletin posts
  const getBulletinPosts = () => { 
    const query = "&pagination[start]=0&pagination[limit]=6&sort=Date:desc"
    GlobalApi.getBulletinPostWithQuery(query)
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          date: formatDate(item.attributes.Date),
          tileImage: item.attributes.TileImage.data.attributes.url,
        
        }));
        setBulletinItems(formattedData);
        // Testing with empty data
        // setBulletinItems([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Calling API to get sorotan posts
  const getSorotanPosts = () => {
    const query = "&pagination[start]=0&pagination[limit]=4&sort=Date:desc"
    GlobalApi.getSorotanPostWithQuery(query)
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          date: formatDate(item.attributes.Date),
          tileImage: item.attributes.TileImage.data.attributes.url,

        }));
        setPosterItems(formattedData);
        // Testing with empty data
        // setPosterItems([]);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load data when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      getBulletinPosts();
      getSorotanPosts();
    }, [])
  );

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
      case 'IlmuKeluarga':
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
      case 'KafeTEEN':
          navigation.navigate('KafeTeen');
          break;
      case 'Keibubapaan Digital':
          // navigation.navigate('KeibubapaanDigital');
          Alert.alert('Coming Soon!');
          break;
      default:
        break;
    }
  }

  // Function to render each news row
  const renderNewsRow = (newsItems) => {
    // Sort the news items by date in descending order
    const sortedNewsItems = newsItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return sortedNewsItems.map((news, index) => (
      <NewsItem
        key={`news-${index}`}
        navigation={navigation}
        id={news.id}
        title={news.title}
        date={news.date}
        imageSource={{ uri: news.tileImage }}
      />
    ));
  };
  
  // Function to render each poster row
  const renderPosterRow = (posterRow) => (
    <View style={styles.posterRowContainer}>
      {posterRow.map((poster, index) => (
        <PosterItem
          key={`poster-${index}`}
          navigation={navigation}
          id={poster.id}
          title={poster.title}
          date={poster.date}
          imageSource={{uri: poster.tileImage}}
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

  const onSorotanLihatSemuaPress = () => {
    navigation.navigate('SorotanHome');
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
          {/* <Image source={require('../../assets/newsTileDummy.png')} 
          style={{width: Platform.OS === 'ios' ? 400 : 450, height: 230, resizeMode: 'stretch'}}
          /> */}
          {contentData.length > 0 ?(
            <ContentSlider contents={contentData} />
          ) : (
            <View style={{flex: 1, justifyContent: 'flex-end' , backgroundColor: '#F3E9FF', marginBottom: 30}}>
              <View style={{backgroundColor: '#F8F2FF', height: 20, width: '30%', marginBottom: 10, marginLeft: 20}}></View>
              <View style={{backgroundColor: '#F8F2FF', height: 20, width: '70%', marginBottom: 20, marginLeft: 20}}></View>
            </View>
          )}
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.sectionText}>Berita LPPKN</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onBulletinLihatSemuaPress}>
              <Text style={styles.sectionSubText}>Lihat Semua</Text>
              <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrow} />
            </TouchableOpacity>
          </View>
          {bulletinItems.length > 0 ? (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.beritaGridContainer}>
                {/* Render the news rows */}
                {renderNewsRow(bulletinItems.slice(0, 2))}
                {renderNewsRow(bulletinItems.slice(2, 4))}
                {renderNewsRow(bulletinItems.slice(4, 6))}
              </View>
            </ScrollView>
          ) : (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{ fontSize: 24, fontWeight: '800', color: '#9448DA' }}>Content Loading...</Text>
            </View>
          )}
        </View>
        {/* SOROTAN SECTION */}
        {/* SOROTAN SECTION */}
      <View style={styles.sorotanContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.sorotanText}>Highlights</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onSorotanLihatSemuaPress}>
            <Text style={styles.sorotanSubText}>Lihat Semua</Text>
            <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrowSorotan} />
          </TouchableOpacity>
        </View>
        {posterItems && posterItems.length > 0 ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              {/* Render the poster row */}
              {renderPosterRow(posterItems)}
            </View>
          </ScrollView>
        ) : (
          <View style={{ height: 230, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: '800', color: '#9448DA' }}>Content Loading...</Text>
          </View>
        )}
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
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.25,
    shadowRadius: 4, 
    elevation: 5,
  },
  slidingNewsContainer: {
    height: 250,
    marginTop: -6,
    zIndex: 3,
  },
  perkhidmatanContainer: {
    flexDirection: 'column',
    height: 280,
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
    gap: 20,
    marginLeft: 5,
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