import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HPVPriceTile = ({ prices, imageSource, title, isSingleTile, onPress, residentTitle = "Warganegara", nonResidentTitle = "Bukan Warganegara" }) => {
  const [activeTab, setActiveTab] = useState('resident');
  const [isPressed, setIsPressed] = useState(true);

  const tileStyle = isSingleTile ? { marginRight: 20 } : {};

  const handlePress = () => {
    setIsPressed(isPressed);
    onPress && onPress();
  };

  const formatTitle = (title) => {
    return title.replace(/ /g, '\n'); 
  };

  // console.log('HPVPriceTile imageSource:', imageSource); // Log the image source URL

  return (
    <View style={[styles.tabParentContainer, tileStyle]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image source={{ uri: imageSource }} style={styles.imageAboveOptions} onError={(e) => console.log(e.nativeEvent.error)} />
      </TouchableWithoutFeedback>

      {onPress && isPressed && (
        <View style={styles.overlayContainer}>
          <Image source={require('../../../../assets/LihatTutorialIcon.png')} style={styles.overlayIcon} />
        </View>
      )}

      <Text style={[styles.headerText, { textAlign: 'center', marginRight: 20 }]}>{title}</Text>

      {!isSingleTile && (
        <View style={styles.tabButtonContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'resident' ? styles.buttonActive : styles.buttonInactive
            ]}
            onPress={() => setActiveTab('resident')}
          >
            <Text style={[styles.tabText, activeTab === 'resident' ? styles.tabTextActive : styles.tabTextInactive]}>
            {formatTitle(residentTitle)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'nonResident' ? styles.buttonActive : styles.buttonInactive
            ]}
            onPress={() => setActiveTab('nonResident')}
          >
            <Text style={[styles.tabText, activeTab === 'nonResident' ? styles.tabTextActive : styles.tabTextInactive]}>
            {formatTitle(nonResidentTitle)}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.priceText}>{prices[activeTab]}</Text>
    </View>
  );
};

export default HPVPriceTile;

const styles = StyleSheet.create({
    tabParentContainer: {
        flex: 1,
        backgroundColor: '#F9F3FF',
        width: '89%',
        marginLeft: '10%',
        borderRadius: 10,
        borderColor: '#D6BDF4',
        borderWidth: 1,
        overflow: 'hidden',
        // Add shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 2,
    },
    imageAboveOptions: {
        height: 150, 
        width: '90%', 
        resizeMode: 'cover',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: '5%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    tabButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        marginLeft: '5%',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#777777', 
        borderWidth: 1,
    },
    tabButton: {
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'transparent', 
        // height: 50,
        borderWidth: 1,
        borderLeftWidth: 0, 
        borderRightWidth: 0,
    },
    buttonActive: {
        backgroundColor: '#21CF44',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
    },
    buttonInactive: {
        backgroundColor: 'transparent',
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        color: '#777777',
    },
    tabTextActive: {
        color: '#FFFFFF',
    },
    tabTextInactive: {
        color: '#777777',
    },
    priceText: {
        marginTop: 15,
        marginBottom: 10,
        fontSize: 46,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5D2E86',
    },
    headerText:{
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 15,
        color: '#9448DA',
    },
    overlayContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      pointerEvents: 'none',
    },
    overlayIcon: {
      width: 80,
      height: 60,
      marginBottom: 290,
      resizeMode: 'contain',
      tintColor: '#5C2D86', // Set a contrasting color, such as 'red', to check visibilityr
    },
});
