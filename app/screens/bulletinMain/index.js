import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Keyboard, Dimensions } from 'react-native';
import Header from './BulletinMainHeader';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import BulletinDetailsSection from './BulletinDetailsSection';
import SarinBottomSheet from './SarinBottomSheet';
import GlobalApi from '../../services/GlobalApi';

  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth > 600;
  const isLargeScreen = screenWidth >= 500;

function BulletinMain({navigation}) {

  {/*Definitions for load more feature*/}
  const ITEMS_PER_PAGE = 10;
  const [bulletinItems, setBulletinItems] = useState([]); 
  const [allBulletinItems, setAllBulletinItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
  const getBulletinPosts = () => {
    GlobalApi.getBulletinPost()
      .then((response) => {
        const responseData = response.data.data;  
        if (!responseData) {
          console.error('No data received from getBulletinPost');
          return; // Exit the function if data is not available
        }
        const formattedData = responseData.map((item) => ({
          id: item.id,
          title: item.attributes?.Title,
          date: formatDate(item.attributes?.Date), 
          tileImage: item.attributes?.TileImage?.data?.attributes?.url, 
          information: item.attributes?.Information,
          images: item.attributes?.PostImages?.data?.map((image) => ({
            id: image.id,
            url: image.attributes?.url,
          })) || [], // Use empty array if data is null
        }));
        // console.log(formattedData);
        setAllBulletinItems(formattedData);
        setBulletinItems(formattedData.slice(0, ITEMS_PER_PAGE)); // Loads the first 10 items
        setHasMoreItems(formattedData.length > ITEMS_PER_PAGE);
      })
      .catch((error) => {
        console.error(error);
      });
};


  // Load the bulletin posts when the screen is loaded
  useEffect(() => {
    getBulletinPosts();
  }, []);


  // Function to load more items
  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    const newItemsToShow = allBulletinItems.slice(0, ITEMS_PER_PAGE * nextPage);
    setBulletinItems(newItemsToShow);
    
    // Check if there are more items to load after this set
    setHasMoreItems(newItemsToShow.length < allBulletinItems.length);
    setCurrentPage(nextPage);
  };


  // Handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      // If the search query is empty, reset to initial items
      setBulletinItems(allBulletinItems.slice(0, 6));
      setHasMoreItems(allBulletinItems.length > 6);
  } else {
      // Filter the allBulletinItems based on the query and update bulletinItems
      const filteredItems = allBulletinItems.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
      );
      setBulletinItems(filteredItems);
      // Adjust whether more items can be loaded based on the filtered list
      setHasMoreItems(false);
  }
};


  // Functions for filtering the bulletin items
  const fetchFilteredArticles = async (selectedYear, monthIndex) => {
    let query = '';
    let startDate = '';
    let endDate = '';

    if (selectedYear===null && monthIndex===null) {
      getBulletinPosts();
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
      const response = await GlobalApi.getBulletinPostWithQuery(query);
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

      setBulletinItems(formattedData);
      setHasMoreItems(false); 
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
      <View style={styles.subHeaderContainer}>
        <View style={styles.searchTab}>
          <View style={styles.searchIconContainer}>
            <Image 
              source={require('../../assets/searchButton.png')}
              style={styles.searchIcon}
            />
            <View style={styles.seachTextContainer}>
              <TextInput 
                style={styles.searchText}
                placeholder="Masukkan carian"
                placeholderTextColor="#A6A6A6"
                value={searchQuery}
                onChangeText={handleSearch}
                allowFontScaling={false}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.sarineIconContainer} onPress={() => setBottomSheetVisible(true)}> 
          <Image
              source={require('../../assets/sarineButton.png')}
              style={styles.sarineIcon}
            />
        </TouchableOpacity>
      </View>
      <ScrollView 
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}
      >
        <BulletinDetailsSection 
          navigation={navigation} 
          items={bulletinItems} 
          onLoadMore={hasMoreItems ? loadMoreItems : null } 
        />
      </ScrollView>

      <SarinBottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        onConfirmSelection={handleConfirmSelection}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF', 
  },
  headerContainer: {
    backgroundColor: '#9448DA', 
    zIndex: 10,
  },
subHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: isLargeScreen ? 110 : undefined,
    paddingVertical: isLargeScreen ? 0 : 15, 
    width: '100%',
    alignItems: 'center',
    justifyContent: isLargeScreen ? 'flex-start' : 'center', 
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    zIndex: 10,
    marginTop: isLargeScreen ? '1%' : 0,
  },
  searchTab: {
  width: isLargeScreen ? '80%' : (isTablet ? '87%' : '75%'),
  height: isLargeScreen ? '80%' : 45,
    marginTop: isLargeScreen ? '2%' : 0,
    marginLeft: isLargeScreen ? '4%' : 0,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CBCBCB',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIconContainer: {
    width: isLargeScreen ? '25%' : undefined,
    height: isLargeScreen ? '100%' : undefined,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: isLargeScreen ? 'center' : 'flex-start',
    flex: isLargeScreen ? undefined : 1, 
  },
  searchIcon: {
    width: isLargeScreen ? 30 : 20,
    height: isLargeScreen ? 30 : 20,
    resizeMode: 'contain',
    marginLeft: isLargeScreen ? '85%' : 0,
    marginTop: isLargeScreen ? 0 : 0,
  },
  seachTextContainer: {
    width: isLargeScreen ? 400 : undefined,
    height: isLargeScreen ? '100%' : undefined,
    flex: isLargeScreen ? undefined : 1,
    marginLeft: isLargeScreen ? '15%' : 10,
    justifyContent: isLargeScreen ? 'center' : 'flex-start',
  },
  searchText: {
    color: '#333333',
    fontSize: isLargeScreen ? 29 : 15,
    padding: 0,
    marginTop: isLargeScreen ? 0 : 0,
    marginLeft: isLargeScreen ? 0 : 0,
    marginBottom: isLargeScreen ? 0 : 0,
    textAlignVertical: 'center',
  },
  sarineIconContainer: {
    width: isLargeScreen ? 70 : 45,
    height: isLargeScreen ? 70 : 45,
    marginLeft: isLargeScreen ? 30 : 10, 
    marginTop: isLargeScreen ? '3%' : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sarineIcon: {
    width: isLargeScreen ? 73 : 30,
    height: isLargeScreen ? 73 : 30,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
  },
});

export default BulletinMain;
