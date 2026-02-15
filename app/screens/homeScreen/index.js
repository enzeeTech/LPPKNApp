import React, { useEffect, useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, 
  Image, Platform, TouchableOpacity, TouchableWithoutFeedback, Alert 
} from 'react-native';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from './HomeScreenHeader';
import ServiceIcon from '../common/ServiceIcon';
import NewsItem from './customTiles/NewsItem';
import PosterItem from './customTiles/PosterItem';
import ContentSlider from './ContentSlider';
import GlobalApi from '../../services/GlobalApi';
import LottieView from 'lottie-react-native';

const screenWidth = Dimensions.get('window').width;
const isTablet = screenWidth > 600;

const iconsData = [
  { iconSource: require('../../assets/buai.png'), label: 'Bantuan Rawatan Kesuburan' },
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
  { iconSource: require('../../assets/kaunseling.png'), label: 'Kaunseling' },
  { iconSource: require('../../assets/keluargaKerja.png'), label: 'Keluarga@Kerja' },
  { iconSource: require('../../assets/IlmuKeluarga.png'), label: 'IlmuKeluarga' },
];

const HomeScreen = ({ navigation }) => {
  const [bulletinItems, setBulletinItems] = useState([]);
  const [posterItems, setPosterItems] = useState([]);
  const [contentData, setContentData] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const rowOne = iconsData.slice(0, 8);
  const rowTwo = iconsData.slice(8, iconsData.length);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ms-MY', options);
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await GlobalApi.getHomeSliderContent();
        if (response.data) {
          const formattedData = response.data.data.map(item => ({
            id: item.id,
            publishedAt: item.attributes.publishedAt,
            type: item.attributes.Content.data.attributes.mime.includes('video') ? 'video' : 'image',
            source: { uri: item.attributes.Content.data.attributes.url },
            title: item.attributes.Title,
            subtitle: item.attributes.Subtitle,
            link: item.attributes.Link,
          }));
          setContentData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching home slider content:', error);
      }
    };
    fetchContent();
  }, []);

  const getBulletinPosts = () => {
    const query = "&pagination[start]=0&pagination[limit]=9&sort=publishedAt:desc"; // Limit 9 agar pas 3x3
    GlobalApi.getBulletinPostWithQuery(query)
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          publishedDate: item.attributes.publishedAt,
          date: formatDate(item.attributes.Date),
          tileImage: item.attributes.TileImage.data.attributes.url,
        }));
        setBulletinItems(formattedData);
      })
      .catch((error) => console.log(error));
  };

  const getSorotanPosts = () => {
    const query = "&filters[PinPost][$eq]=true&sort=publishedAt:desc";
    GlobalApi.getSorotanPostWithQuery(query)
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          date: formatDate(item.attributes.Date),
          tileImage: item.attributes.TileImage.data.attributes.url,
        }));
        setPosterItems(formattedData);
      })
      .catch((error) => console.log(error));
  };

  useFocusEffect(
    React.useCallback(() => {
      getBulletinPosts();
      getSorotanPosts();
    }, [])
  );

  const navigateToService = (serviceLabel) => {
    const routes = {
      'Perancang Keluarga': 'PerancangKeluarga',
      'PEKA': 'Peka',
      'SMARTSTART 2.0': 'Smartstart',
      'Subsidi Mamogram': 'SubsidiMamogram',
      'HPV DNA': 'HPVDNA',
      'Kaunseling': 'Kaunseling',
      'Keluarga@Kerja': 'KeluargaKerja',
      'SMARTBelanja': 'SmartBelanja',
      'IlmuKeluarga': 'Ilmukeluarga',
      'Subfertiliti': 'Subfertiliti',
      'Penyelidikan': 'Penyelidikan',
      'Saringan Kesejahteraan': 'SaringanKesejahteraan',
      'KafeTEEN': 'KafeTeen',
      'Bantuan Rawatan Kesuburan': 'Bantuan Rawatan Kesuburan'
    };
    
    if (serviceLabel === 'Keibubapaan Digital') {
      Alert.alert('Coming Soon!');
    } else if (routes[serviceLabel]) {
      navigation.navigate(routes[serviceLabel]);
    }
  };

  // MODIFIKASI: Render News Item dengan pembungkus Column
  const renderNewsContent = (newsItems) => {
    return newsItems.map((news, index) => (
      <View key={`news-${index}`} style={isTablet ? styles.newsItemTablet : styles.newsItemMobile}>
        <NewsItem
          navigation={navigation}
          id={news.id}
          title={news.title}
          date={news.date}
          publishedAt={news.publishedDate}
          imageSource={{ uri: news.tileImage }}
        />
      </View>
    ));
  };

  const renderPosterRow = (posterRow) => (
    <View style={styles.posterRowContainer}>
      {posterRow.map((poster, index) => (
        <PosterItem
          key={`poster-${index}`}
          navigation={navigation}
          id={poster.id}
          title={poster.title}
          date={poster.date}
          imageSource={{ uri: poster.tileImage }}
        />
      ))}
    </View>
  );

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) setSearchQuery('');
  };

  const hideSearch = () => {
    setSearchVisible(false);
    setSearchQuery('');
  };

  const updateSearchQuery = (query) => setSearchQuery(query);

  const onBulletinLihatSemuaPress = () => navigation.navigate('BulletinHome');
  const onSorotanLihatSemuaPress = () => navigation.navigate('SorotanHome');

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

      <ScrollView style={{ flex: 1, marginTop: 0 }} showsVerticalScrollIndicator={false}>        
        {searchVisible && (
          <View style={styles.searchBarContainer}>
            <View style={styles.searchTab}>
              <Image 
                source={require('../../assets/greenSearchIcon.png')}
                style={styles.searchIcon}
              />
              <TextInput 
                style={styles.searchText}
                placeholder="Masukkan carian"
                placeholderTextColor={'#A6A6A6'}
                value={searchQuery}
                onChangeText={updateSearchQuery}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity style={styles.confirmIconContainer} onPress={() => console.log(searchQuery)}> 
              <Text style={styles.confirmText}>Cari</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.slidingNewsContainer}>
          {contentData.length > 0 ? (
            <ContentSlider contents={contentData} />
          ) : (
            <View style={styles.loadingPlaceholder} />
          )}
        </View>

        <View style={styles.perkhidmatanContainer}>
          <Text style={styles.sectionText}>Perkhidmatan</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
            <View style={styles.rowsWrapper}>
              <View style={styles.rowContainer}>
                {rowOne.map((icon, index) => (
                  <ServiceIcon key={`r1-${index}`} iconSource={icon.iconSource} label={icon.label} onPress={() => navigateToService(icon.label)} />
                ))}
              </View>
              <View style={styles.rowContainer}>
                {rowTwo.map((icon, index) => (
                  <ServiceIcon key={`r2-${index}`} iconSource={icon.iconSource} label={icon.label} onPress={() => navigateToService(icon.label)} />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* SECTION BERITA LPPKN - DISESUAIKAN MENJADI 3 BARIS/KOLOM */}
        <View style={styles.beritaContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>Berita LPPKN</Text>
            <TouchableOpacity style={styles.lihatSemua} onPress={onBulletinLihatSemuaPress}>
              <Text style={styles.sectionSubText}>Lihat Semua</Text>
              <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrow} />
            </TouchableOpacity>
          </View>
          {bulletinItems.length > 0 ? (
            <View style={styles.beritaGridContainer}>
              {renderNewsContent(bulletinItems)}
            </View>
          ) : (
            <View style={styles.lottieContainer}>
              <LottieView source={require('../../assets/Json/loadingAnimation.json')} autoPlay loop style={styles.lottie} />
            </View>
          )}
        </View>

        <View style={styles.sorotanContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sorotanText}>Highlights</Text>
            <TouchableOpacity style={styles.lihatSemua} onPress={onSorotanLihatSemuaPress}>
              <Text style={styles.sorotanSubText}>Lihat Semua</Text>
              <Image source={require('../../assets/rightArrow.png')} style={styles.rightArrowSorotan} />
            </TouchableOpacity>
          </View>
          {posterItems.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {renderPosterRow(posterItems)}
            </ScrollView>
          ) : (
            <View style={styles.lottieContainer}>
              <LottieView source={require('../../assets/Json/loadingAnimation.json')} autoPlay loop style={styles.lottie} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  headerContainer: {
    backgroundColor: '#FFFFFF', 
    borderBottomRightRadius: 15, 
    borderBottomLeftRadius: 15,
    zIndex: 20, 
    elevation: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#9448DA',
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 0,
    position: 'relative',
    zIndex: 999,
    elevation: 10,
  },
  searchTab: {
    flex: 1, 
    height: 45, 
    borderRadius: 8,
    backgroundColor: '#FFFFFF', 
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 12,
  },
  searchIcon: { width: 20, height: 20, resizeMode: 'contain' },
  searchText: { 
    flex: 1, 
    color: 'black', 
    fontSize: 15, 
    paddingLeft: 10, 
    height: '100%', 
    textAlignVertical: 'center' 
  },
  confirmIconContainer: { marginLeft: 15 },
  confirmText: { color: '#21CF44', fontSize: 16, fontWeight: 'bold' },
  searchOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 25 },
  slidingNewsContainer: { width: '100%', zIndex: 3, marginTop: 0 },
  loadingPlaceholder: { flex: 1, height: 200, backgroundColor: '#F3E9FF' },
  perkhidmatanContainer: { paddingTop: 15, backgroundColor: '#FFFFFF' },
  scrollContentContainer: { paddingHorizontal: 10 },
  rowsWrapper: { flexDirection: 'column' },
  rowContainer: { flexDirection: 'row', marginBottom: 10 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 10 },
  sectionText: { fontWeight: '800', color: '#9448DA', fontSize: 19, marginLeft: 13, marginBottom: 5 },
  sectionSubText: { fontWeight: '600', color: '#9A9C9E', fontSize: 11 },
  lihatSemua: { flexDirection: 'row', alignItems: 'center' },
  rightArrow: { width: 8, height: 8, marginLeft: 3, resizeMode: 'contain' },
  
  // MODIFIKASI BERITA LPPKN
  beritaContainer: { 
    flexDirection: "column", 
    marginTop: 20, 
    paddingBottom: 10 
  },
  beritaGridContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: '100%', 
    paddingHorizontal: 10,
    justifyContent: 'flex-start'
  },
  newsItemTablet: {
    width: '32%', // 3 kolom
    marginRight: '1%',
    marginBottom: 15,
  },
  newsItemMobile: {
    width: '100%',
    marginBottom: 10,
  },

  sorotanContainer: { backgroundColor: '#ECDDFF', marginTop: 5, paddingBottom: 80 },
  sorotanText: { fontWeight: '800', color: '#9448DA', fontSize: 19, marginLeft: 13, marginTop: 20 },
  sorotanSubText: { fontWeight: '600', color: '#9A9C9E', fontSize: 11, marginTop: 20 },
  rightArrowSorotan: { width: 8, height: 8, marginLeft: 3, marginTop: 20, resizeMode: 'contain' },
  posterRowContainer: { flexDirection: 'row', paddingHorizontal: 10 },
  lottieContainer: { height: 200, justifyContent: 'center', alignItems: 'center', width: screenWidth },
  lottie: { width: 150, height: 150 },
});

export default HomeScreen;