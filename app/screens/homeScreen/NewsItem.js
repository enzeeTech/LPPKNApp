import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsItem = ({ title, date, imageSource: imageSource }) => {
  // Handle press event for the news item
  const handlePress = () => {
    console.log(`${title} pressed!`);
  };

  return (
    <TouchableOpacity style={styles.newsItemContainer} onPress={handlePress}>
      <Image source={imageSource} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
        <Text style={styles.dateStyle}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsItemContainer: {
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 5,
    marginBottom: -5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10, 
    overflow: 'hidden', 
    width: 290, 
    height: 120,
  },
  imageStyle: {
    width: '45%',
    height: '100%', 
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
    justifyContent: 'space-evenly',
    width: '55%',
  },
  titleStyle: {
    fontWeight: '700',
    color: '#777777',
    fontSize: 15,
    textAlign: 'left',
  },
  dateStyle: {
    color: '#21CF44',
    fontSize: 12, 
    fontWeight: '600',  
  },
});

export default NewsItem;
