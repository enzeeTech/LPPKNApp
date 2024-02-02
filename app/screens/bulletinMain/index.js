import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Header from './BulletinMainHeader';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import BulletinDetailsSection from './BulletinDetailsSection';
import SarinBottomSheet from './SarinBottomSheet';
import GlobalApi from '../../services/GlobalApi';

function BulletinMain({navigation}) {

  {/*Definitions for load more feature*/}
  const [bulletinItems, setBulletinItems] = useState([]); 
  const [allBulletinItems, setAllBulletinItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(false);

  // Function to format the date correctly
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    // Create a date object from dateString
    const date = new Date(dateString);
    // Format date to local string with specified options
    const formattedDate = date.toLocaleDateString('id-ID', options);

    return formattedDate;
  };

  // Calling API to get bulletin posts
  const getBulletinPosts = () => {
    GlobalApi.getBulletinPost()
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Title,
          date: formatDate(item.attributes.Date), 
          image: item.attributes.image.data.attributes.url, 
        }));
        setAllBulletinItems(formattedData);
        setBulletinItems(formattedData.slice(0, 4));
        // check and set if there are more items to load
        if (formattedData.length > 4) {
          setHasMoreItems(true);
        } else {
          setHasMoreItems(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBulletinPosts();
  }, []);

  const loadMoreItems = () => {
    if (bulletinItems.length <= 5) {
      setBulletinItems(allBulletinItems);
      setHasMoreItems(false);
    }
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

  {/*Pressable button functions*/}
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Search query: ${query}`); // Logging the search query
  };

  const handleBackPress = () => {
      navigation.goBack();
  };

  {/*Definitions for bottom sheet visibility*/}
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onBackPress={handleBackPress} />
      </View>
      <ScrollView 
          style={styles.detailsContainer}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={styles.contentContainer}
      >
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
                  placeholderTextColor="#A6A6A6"
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
        <BulletinDetailsSection navigation={navigation} items={bulletinItems} onLoadMore={hasMoreItems ? loadMoreItems : null } />
      </ScrollView>
      <SarinBottomSheet
            isVisible={isBottomSheetVisible}
            onClose={() => setBottomSheetVisible(false)}
          />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    height: 60,
    width: '100%',
    marginTop: '5%',
  },
  searchTab: {
    width: '75%',
    height: '65%',
    marginTop: '3%',
    marginLeft: '6%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: '#CBCBCB',
  },
  searchIconContainer: {
    width: '15%',
    height: '100%',
    flexDirection: 'row',
  },
  searchIcon: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    marginLeft: '25%',
    marginTop: '15%',
  },
  sarineIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  seachTextContainer: {
    width: 200,
    height: '100%',
  },
  searchText: {
    color: '#A6A6A6',
    fontSize: 14,
    marginTop: '5%',
    marginLeft: '8%',
    marginBottom: Platform.OS === 'android' ? '4.5%' : 0,
  },
  sarineIconContainer: {
    width: '13%',
    height: '65%',
    marginTop: '3.5%',
    marginLeft: '2%',
  },
  detailsContainer: {
    flex: 1, 
    backgroundColor: '#FFFF',
    marginTop: -13,
  },
});

export default BulletinMain;