import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

function BottomTabBar(){
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Left side Icons */}
        <View style={styles.iconContainerHome}>
          <TouchableOpacity onPress={() => console.log('Utama Button Pressed!')}>
            <Image source={require('../../assets/utamaIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainerLocation}>
          <TouchableOpacity onPress={() => console.log('Lokasi Button Pressed!')}>
            <Image source={require('../../assets/lokasiIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Center Button */}
        <TouchableOpacity style={styles.centerButtonContainer} onPress={() => console.log('Tanya Kasih Button Pressed!')}  >
          <Image source={require('../../assets/tanyaKasihIcon.png')} style={styles.centerButton} />
        </TouchableOpacity>

        {/* Right side Icons */}
        <View style={styles.iconContainerService}>
          <TouchableOpacity onPress={() => console.log('Perkhidmatan Button Pressed!')}>
            <Image source={require('../../assets/perkhidmatanIcon.png')} style={styles.serviceIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainerFeedback}>
          <TouchableOpacity onPress={() => console.log('Aduan Button Pressed!')}>
            <Image source={require('../../assets/aduanIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    // alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    // shadowRadius: 10,
    // shadowOffset: { width: 5, height: 5 },
    elevation: 10, // for Android shadow
    height: 60,
    // marginHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
  icon: {
    // padding: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  serviceIcon: {
    // padding: 20,
    // paddingLeft: 20,
    width: 75, 
    height: 75, 
    resizeMode: 'contain', 
  },
  iconContainerLocation: {
    paddingRight: 10,
  },
  iconContainerHome: {
    paddingRight: 20,
  },
  centerButtonContainer: {
    width: 60,
    height: 60,
    // resizeMode: 'contain',
    borderRadius: 35, 
    // backgroundColor: '#8A2BE2',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10, // for Android shadow
    // paddingBottom: 40,
    marginBottom: 40,
  },
  centerButton: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    // justifyContent: 'center',
    borderRadius: 35, 
    borderColor: 'white', 
    borderWidth: 3, 
    overflow: 'hidden', 
    backgroundColor: 'white',
  },
});

export default BottomTabBar;
