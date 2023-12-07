// ServiceIcon.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';

// Calculating the size of the icon container based on the screen width and desired padding/margin
const screenWidth = Dimensions.get('window').width;
const iconsPerRow = 4;
const padding = 10; // Padding on each side of the icon
const iconContainerWidth = (screenWidth / iconsPerRow) - (padding * 2.8); 
const iconSize = iconContainerWidth / 2; 

const ServiceIcon = ({ iconSource, label }) => {

     // Function to handle press event
    const handlePress = () => {
        console.log(`${label} button pressed!`);
    };

    return (
        <TouchableOpacity 
            style={styles.iconWrapper} 
            onPress={handlePress}
            activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.85}
        >
        <View style={styles.iconCircle}>
            <Image source={iconSource} style={styles.icon} />
        </View>
        <Text style={styles.iconLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: iconContainerWidth+7,
    alignItems: 'center',
    margin: Platform.OS === 'ios' ? padding / 1.4 : padding / 2, 
    
  },
  iconCircle: {
    width: iconContainerWidth,
    height: iconContainerWidth,
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
    width: iconSize,
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
