import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Keyboard, useWindowDimensions } from 'react-native';
import Header from './SorotanHeader';
import { ScrollView } from 'react-native';
import SorotanDetailsSection from './SorotanDetailsSection';
import SarinBottomSheet from '../bulletinMain/SarinBottomSheet';
import GlobalApi from '../../services/GlobalApi';

function SorotanMain({navigation}) {
  const { width, height } = useWindowDimensions();
  const smallestSide = Math.min(width, height);
  const longestSide = Math.max(width, height);
  const isLargeScreen = smallestSide >= 500 || longestSide >= 960;
  const largeScale = isLargeScreen ? Math.min(Math.max(longestSide / 1280, 1), 1.15) : 1;
  const styles = createStyles(isLargeScreen, largeScale, width);

  {/*Definitions for load more feature*/}
  const [posterItems, setPosterItems] = useState([]); 
  const [allPosterItems, setAllPosterItems] = useState([]);

  const monthList = [
    'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
    'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
  ];

  // Function to format the date correctly
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    // Create a date object from dateString
    const date = new Date(dateString);
    // Format date to local string with specified options
    const formattedDate = date.toLocaleDateString('ms-MY', options);

    return formattedDate;
  };


  // Calling API to get bulletin posts
  const getSorotanPosts = () => {
    GlobalApi.getSorotanPost()
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          date: formatDate(item.attributes.Date), 
          tileImage: item.attributes.TileImage.data.attributes.url, 
          information: item.attributes.Information,
          images: item.attributes.PostImages.data.map((image) => ({
            id: image.id,
            url: image.attributes.url,
          })),
        }));
        setPosterItems(formattedData);
        setAllPosterItems(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // Load the bulletin posts when the screen is loaded
  useEffect(() => {
    getSorotanPosts();
  }, []);

  // Handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      // If the search query is empty, reset to initial items
      setPosterItems(allPosterItems);
  } else {
      // Filter the allBulletinItems based on the query and update bulletinItems
      const filteredItems = allPosterItems.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosterItems(filteredItems);
  }
};


  // Functions for filtering the bulletin items
  const fetchFilteredArticles = async (selectedYear, monthIndex) => {
    let query = '';
    let startDate = '';
    let endDate = '';

    if (selectedYear===null && monthIndex===null) {
      getSorotanPosts();
      return;
    }

    if (selectedYear && !monthIndex) {
        startDate = `${selectedYear}-01-01`;
        endDate = `${selectedYear}-12-31`;

        query += `&filters[Date][$gte]=${startDate}&filters[Date][$lte]=${endDate}`;
    }
    else if (selectedYear && monthIndex) {
        startDate = `${selectedYear}-${monthIndex}-01`;
        endDate = new Date(selectedYear, monthIndex, 0).toISOString().split('T')[0];

        query += `&filters[Date][$gte]=${startDate}&filters[Date][$lte]=${endDate}`;
    }

    try {
        query += '&sort=Date:asc';
        const response = await GlobalApi.getSorotanPostWithQuery(query);
        const formattedData = response.data.data.map((item) => ({
            id: item.id,
            title: item.attributes.Title,
            date: formatDate(item.attributes.Date), 
            tileImage: item.attributes.TileImage.data.attributes.url, 
            information: item.attributes.Information,
            images: item.attributes.PostImages.data.map((image) => ({
            id: image.id,
            url: image.attributes.url,
            })),
        }));

        setPosterItems(formattedData);
    } catch (error) {
        console.log(error);
    }
  };

  // Function to handle the selected year and month, passed from the SarinBottomSheet
  const handleConfirmSelection = (selectedYear, selectedMonth) => {
        // Convert the selected month name to a number
        const monthIndex = selectedMonth ? (monthList.indexOf(selectedMonth) + 1).toString().padStart(2, '0') : null;
        fetchFilteredArticles(selectedYear, monthIndex);
  };


  {/*Definitions keyboard detection and dissmissal*/}
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
    });

    return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
    };
  }, []);

  const handleBackPress = () => {
      navigation.goBack();
  };


  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Header onBackPress={handleBackPress} />
        </View>
      {/* <ScrollView 
          style={styles.detailsContainer}
          showsVerticalScrollIndicator={false}
      > */}
        <View style={styles.detailsContainer}>
            <View style={styles.subHeaderContainer}>
            <View style={styles.searchTab}>
                <View style={styles.searchIconContainer}>
                <Image 
                    source={require('../../assets/searchButton.png')}
                    style = {styles.searchIcon}
                />
                <View style={styles.seachTextContainer}>
                    <TextInput 
                    style={styles.searchText}
                    placeholder="Masukkan carian"
                    placeholderTextColor="#8A8A8A"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    >
                    </TextInput>
                </View>
                </View>
            </View>
            <TouchableOpacity style={styles.sarineIconContainer} onPress={() => setBottomSheetVisible(true)}> 
                <Image
                    source={require('../../assets/sarineButton.png')}
                    style = {styles.sarineIcon}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
              <SorotanDetailsSection navigation={navigation} items={posterItems}/>
            </View>
        </View>
        {/* </ScrollView> */}
        <SarinBottomSheet
            isVisible={isBottomSheetVisible}
            onClose={() => setBottomSheetVisible(false)}
            onConfirmSelection={handleConfirmSelection}
        />
    </SafeAreaView>
  );
}

const createStyles = (isLargeScreen, largeScale, width) => StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#9448DA',
  },
  headerContainer: {
    backgroundColor: 'transparent', 
    zIndex: 1,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: isLargeScreen ? Math.round(86 * largeScale) : undefined,
    paddingVertical: isLargeScreen ? 0 : 15,
    width: '100%',
    marginTop: isLargeScreen ? 6 : 0,
    justifyContent: isLargeScreen ? 'flex-start' : 'center',
    alignItems: 'center',
    paddingHorizontal: isLargeScreen ? Math.max(16, Math.min(42, Math.round(width * 0.03))) : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    zIndex: 10,
  },
  searchTab: {
    width: isLargeScreen ? '86%' : '75%',
    height: isLargeScreen ? '72%' : 45,
    marginTop: isLargeScreen ? 0 : 0,
    marginLeft: isLargeScreen ? 0 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CBCBCB',
    backgroundColor: '#FFFFFF',
  },
  searchIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    width: isLargeScreen ? Math.round(24 * largeScale) : 20,
    height: isLargeScreen ? Math.round(24 * largeScale) : 20,
    resizeMode: 'contain',
    marginLeft: isLargeScreen ? 2 : 0,
    marginTop: 0,
  },
  seachTextContainer: {
    flex: 1,
    width: isLargeScreen ? 'auto' : undefined,
    height: '100%',
    marginLeft: isLargeScreen ? 8 : 10,
    justifyContent: isLargeScreen ? 'center' : 'flex-start',
  },
  searchText: {
    color: '#333333',
    fontSize: isLargeScreen ? Math.round(22 * largeScale) : 15,
    padding: 0,
    marginTop: isLargeScreen ? 0 : 10,
    marginLeft: isLargeScreen ? 20 : 0,
    marginBottom: 0,
    textAlignVertical: 'center',
  },
  sarineIconContainer: {
    width: isLargeScreen ? Math.round(62 * largeScale) : 45,
    height: isLargeScreen ? Math.round(62 * largeScale) : 45,
    marginTop: 0,
    marginLeft: isLargeScreen ? 12 : 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sarineIcon: {
    width: isLargeScreen ? Math.round(62 * largeScale) : 30,
    height: isLargeScreen ? Math.round(62 * largeScale) : 30,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    marginTop: isLargeScreen ? 6 : 0,
  },
  listContainer: {
    marginTop: isLargeScreen ? 6 : 0,
  },
});

export default SorotanMain;
