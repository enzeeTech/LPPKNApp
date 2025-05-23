// ServiceIcon.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions, Platform } from 'react-native';

// Calculating the size of the icon container based on the screen width and desired padding/margin
const screenWidth = Dimensions.get('window').width;
const iconsPerRow = 4;
const padding = 10; // Padding on each side of the icon
const iconContainerWidth = (screenWidth / iconsPerRow) - (padding * 2.4); 
const iconSize = iconContainerWidth / 2; 

const ServiceIcon = ({ iconSource, label, onPress }) => {

    return (
        <Pressable 
            style={({pressed}) => [styles.iconWrapper, { opacity: pressed ? 1 : 1 }]}
            onPress={onPress}
        >
        <View style={styles.iconCircle}>
            <Image source={iconSource} style={styles.icon} />
        </View>
        <Text allowFontScaling={false} style={styles.iconLabel}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: iconContainerWidth+11,
    marginTop: 10,
    alignItems: 'center',
    margin: Platform.OS === 'ios' ? padding / 1.5 : padding / 2, 
    
  },
  iconCircle: {
    width: iconContainerWidth/1.1,
    height: iconContainerWidth/1.1,
    borderRadius: iconContainerWidth / 2, 
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#9648DC",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.30,
    shadowRadius: 8, 
    elevation: 5,
  },
  icon: {
    width: iconSize*1.4,
    height: iconSize,
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },
  iconLabel: {
    marginTop: 7, 
    fontSize: Platform.OS === 'android' ? 10 : 9, 
    color: '#777777', 
    textAlign: 'center', 
    fontWeight: '700', 
  },
});

export default ServiceIcon;
