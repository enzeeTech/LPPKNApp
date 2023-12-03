import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Header from './BulletinMainHeader';
import { Platform } from 'react-native';

function BulletinMain() {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Search query: ${query}`); // Logging the search query
  };

  const handleBackPress = () => {
    setSearchQuery(''); // Clear the search query
    Keyboard.dismiss(); // Dismiss the keyboard if it's open
  };

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
              style = {styles.searchIcon}
            />
            <View style={styles.seachTextContainer}>
              <TextInput 
                style={styles.searchText}
                placeholder="Masukkan carian"
                value={searchQuery}
                onChangeText={handleSearch}
              >
              </TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.sarineIconContainer} onPress={() => console.log('Sarine Button Pressed!')}> 
          <Image
              source={require('../../assets/sarineButton.png')}
              style = {styles.sarineIcon}
            />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#9448DA',
    backgroundColor: 'transparent',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: '8%',
    width: '100%',
  },
  searchTab: {
    width: '75%',
    height: '65%',
    marginTop: '3%',
    marginLeft: '5%',
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
    marginTop: '3%',
    marginLeft: '2%',
  },

});

export default BulletinMain;