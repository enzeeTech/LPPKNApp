import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PosterItem = ({ title, date, imageSource }) => {
    // Handle press event for the news item
    const handlePress = () => {
      console.log(`${title} pressed!`);
    };

    return (
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.cardImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardSubtitle}>{date}</Text>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: 190, // Adjust width based on your design needs
    height: 290, // Adjust height based on your design needs
  },
  imageContainer: {
    width: '100%',
    height: '100%', // Adjust based on your design, leaving space for title and subtitle
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: 10,
    height: 70, // Remaining space for title and subtitle
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
    width: '95%',
  },
  cardTitle: {
    fontWeight: '800',
    fontSize: 14,
    color: '#21CF44', // Make sure this color is visible over the imageContainer
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#FFF', // Make sure this color is visible over the imageContainer
  },
  });

export default PosterItem;