import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PenyelidikanList = ({ title, imageSource, additionalText, titleStyle }) => {
  return (
    <View style={[styles.parentContainer]}>
      <Image source={imageSource} style={styles.imageAboveTitle} />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{additionalText}</Text>
      </View>
    </View>
  );
};

export default PenyelidikanList;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    height: 438, 
    backgroundColor: '#F9F3FF',
    width: 299,
    marginLeft: 16,  
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
  imageAboveTitle: {
    width: '85%',
    height: 170,
    borderRadius: 14,
    marginBottom: 10,
    marginTop: 25,
    marginLeft: 25,
    shadowColor: "#000000",
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 15, 
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9448DA',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
    color: '#777777',
    paddingHorizontal: 15,
  },
});
