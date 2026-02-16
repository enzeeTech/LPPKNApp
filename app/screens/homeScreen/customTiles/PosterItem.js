import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const isLargeTablet = screenWidth >= 1000;
const CARD_WIDTH = isLargeTablet ? Math.floor((screenWidth - 70) / 4) : 190;
const CARD_HEIGHT = isLargeTablet ? Math.floor(CARD_WIDTH * 1.45) : 290;

const PosterItem = ({ navigation, id, title, date, imageSource }) => {
  
    // Handle press event for the news item
    const handlePress = () => {
      navigation.navigate('SorotanArticle', {itemId: id});
    };

    return (
      <Pressable style={({pressed}) => [styles.cardContainer, { opacity: pressed ? 1 : 1 }]} onPress={handlePress}>
        <Image source={imageSource} style={styles.cardImage} />
        <LinearGradient
          colors={['#9448DA', 'rgba(148,72,218,0.7)', 'transparent']}
          style={styles.gradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.24 }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.cardSubtitle}>{date}</Text>
            <Text style={styles.cardTitle} numberOfLines={2}>{title}</Text>
          </View>
        </LinearGradient>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    margin: isLargeTablet ? 6 : 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT, 
  },
  cardImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: 10,
    height: 70, 
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
    width: '95%',
  },
  cardTitle: {
    fontWeight: '800',
    fontSize: isLargeTablet ? 26 : 14,
    color: '#21CF44', 
  },
  cardSubtitle: {
    fontSize: isLargeTablet ? 22 : 11,
    fontWeight: '500',
    color: '#FFF', 
  },
  gradient: {
    width: '100%',
    height: '100%', 
    justifyContent: 'flex-end', 
    borderRadius: 12, 
    position: 'absolute',
  }
  });

export default PosterItem;
