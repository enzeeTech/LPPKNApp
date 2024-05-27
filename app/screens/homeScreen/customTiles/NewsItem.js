import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const NewsItem = ({ navigation, id, title, date, imageSource }) => {

  // Function to navigate to the BulletingInfo screen
  const handlePress = () => {
    navigation.navigate('BulletingInfo', {itemId: id});
  };

  // Helper function to parse the date in the format "4 Mac 2024"
  const parseCustomDate = (dateString) => {
    const monthNames = {
      'Januari': '01',
      'Februari': '02',
      'Mac': '03',
      'April': '04',
      'Mei': '05',
      'Jun': '06',
      'Julai': '07',
      'Ogos': '08',
      'September': '09',
      'Oktober': '10',
      'November': '11',
      'Disember': '12'
    };

    // Splitting the dateString into [day, monthName, year]
    const parts = dateString.split(' ');
    const day = parts[0];
    const month = monthNames[parts[1]];
    const year = parts[2];

    // Constructing a date format that JavaScript can parse
    return new Date(`${year}-${month}-${day}`);
  };

  // Function to check if the article is within the last 2 days
  const isRecentArticle = () => {
    const articleDate = parseCustomDate(date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - articleDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays <= 2;
  };

  return (
    <Pressable style={({pressed}) => [styles.newsItemContainer, { opacity: pressed ? 1 : 1 }]} onPress={handlePress}>
      <Image source={imageSource} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        {isRecentArticle() && (
          <Image
            source={require('../../../assets/latestLabel.png')}
            style={styles.latestLabelStyle}
          />
        )}
        <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
        <Text style={styles.dateStyle}>{date}</Text>
      </View>
    </Pressable>
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
    justifyContent: 'center',
    width: '55%',
  },
  titleStyle: {
    fontWeight: '700',
    color: '#777777',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 20,
  },
  dateStyle: {
    color: '#21CF44',
    fontSize: 12, 
    fontWeight: '600',  
    // marginTop: -5,
  },
  latestLabelStyle: {
    position: 'absolute',
    marginLeft: 10,
    top: 0,
    left: 0,
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
});

export default NewsItem;
