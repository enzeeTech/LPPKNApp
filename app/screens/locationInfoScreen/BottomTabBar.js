import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

function BottomTabBar(){
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Left Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('Utama Button Pressed!')}>
            <Image source={require('../../assets/utamaIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Lokasi Button Pressed!')}>
            <Image source={require('../../assets/lokasiIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Center Button */}
        <TouchableOpacity onPress={() => console.log('Tanya Kasih Button Pressed!')} >
          <Image source={require('../../assets/tanyaKasihIcon.png')} style={styles.centerIcon} />
        </TouchableOpacity>

        {/* Right Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('Perkhidmatan Button Pressed!')}>
            <Image source={require('../../assets/perkhidmatanIcon.png')} style={styles.largeIcon} />
          </TouchableOpacity>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    elevation: 10, // for Android shadow
    height: 60,
    // marginHorizontal: 10,
    marginBottom: 20,
  },
  iconContainer: {
    // padding: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sideIconContainer: {
    flexDirection: 'row',
    width: '50%', 
    justifyContent: 'space-evenly',
  },
  icon: {
    padding: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  largeIcon: {
    padding: 20,
    width: 60, 
    height: 80, 
    resizeMode: 'contain', 
  },
  centerButton: {
    backgroundColor: '#8A2BE2',
    borderRadius: 30,
    padding: 10,
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10, // for Android shadow
  },
  centerIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 35, 
    borderColor: 'white', 
    borderWidth: 3, 
    overflow: 'hidden', 
    backgroundColor: 'white',
    marginBottom: 30,
  },
});

export default BottomTabBar;
