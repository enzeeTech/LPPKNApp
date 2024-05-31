// GallerySection.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const GalleryBasic = ({ title, images }) => {
  return (
    <View>
      <View style={styles.subTextOneContainer}>
        <Text style={styles.subTextStyle}>{title}</Text>
      </View>
      <View style={styles.galleryParentContainer}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          style={styles.galleryScrollStyle}
        >
          <View style={styles.galeriContainer}>
            {images.map((item, index) => (
              <View key={index} style={styles.galeriItemContainer}>
                <Image source={{ uri: item.url }} style={styles.galeriImage}/>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTextOneContainer: {
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  subTextStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#5C2D86',
  },
  galleryParentContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 10,
  },
  galleryScrollStyle: {
    width: '100%',
    height: 250,
  },
  galeriContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    marginLeft: 10,
  },
  galeriItemContainer: {
    width: 280,
    height: 230,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: "#000000",
    backgroundColor: '#fff',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },    
  galeriImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  }
});

export default GalleryBasic;
