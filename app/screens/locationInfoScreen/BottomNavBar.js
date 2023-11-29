import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BottomTabBar() {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleLocationPress = () => {
    navigation.navigate('LocationInfoScreen');
  };

  const handleChatPress = () => {
    navigation.navigate('ChatScreen');
  };

  const handleSupportPress = () => {
    navigation.navigate('SupportScreen');
  };

  const handleFeedbackPress = () => {
    navigation.navigate('FeedbackScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Left side Icons */}
        <View style={styles.iconContainerHome}>
          <TouchableOpacity onPress={handleHomePress}>
            <Image source={require('../../assets/utamaIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainerLocation}>
          <TouchableOpacity onPress={handleLocationPress}>
            <Image source={require('../../assets/lokasiIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Center Button */}
        <TouchableOpacity
          style={styles.centerButtonContainer}
          onPress={handleChatPress}
        >
          <Image source={require('../../assets/tanyaKasihIcon.png')} style={styles.centerButton} />
        </TouchableOpacity>

        {/* Right side Icons */}
        <View style={styles.iconContainerService}>
          <TouchableOpacity onPress={handleSupportPress}>
            <Image source={require('../../assets/perkhidmatanIcon.png')} style={styles.serviceIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainerFeedback}>
          <TouchableOpacity onPress={handleFeedbackPress}>
            <Image source={require('../../assets/aduanIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10,
    height: 60,
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  serviceIcon: {
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
    borderRadius: 35,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    marginBottom: 40,
  },
  centerButton: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});

export default BottomTabBar;
