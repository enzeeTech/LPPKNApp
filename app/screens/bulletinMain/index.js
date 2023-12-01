import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Header from './BulletinMainHeader';

function BulletinMain() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.subHeaderContainer}>
        <TouchableOpacity style={styles.searchTab} onPress={() => console.log('Search Tab Pressed!')}>
          <View style={styles.searchIconContainer}>
            <Image 
              source={require('../../assets/searchButton.png')}
              style = {styles.searchIcon}
            />
            <View style={styles.seachTextContainer}>
              <Text style={styles.searchText}>
                Masukkan carian
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
  },
  sarineIconContainer: {
    width: '13%',
    height: '65%',
    marginTop: '3%',
    marginLeft: '2%',
  },

});

export default BulletinMain;