import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isLargeTablet = screenWidth >= 1000;
const isMobile = screenWidth <= 600;

const NewsItem = ({ navigation, id, title, date, imageSource, publishedAt }) => {

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

    // If dateString is in the format "2024-03-25T14:02:02.727Z", extract the date part
    if (dateString.includes('T')) {
      dateString = dateString.split('T')[0];
      return new Date(dateString);
    } 
    else if (dateString.includes(' ')) {
      // Splitting the dateString into [day, monthName, year]
      const parts = dateString.split(' ');
      const day = parts[0];
      const month = monthNames[parts[1]];
      const year = parts[2];

      // Constructing a date format that JavaScript can parse
      return new Date(`${year}-${month}-${day}`);
    }
  };

  // Function to check if the article is within the last 2 days
  const isRecentArticle = () => {
    const articleDate = parseCustomDate(publishedAt);
    const currentDate = new Date();
    // console.log('currentDate:', currentDate);
    // console.log('articleDate:', articleDate);
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
    marginRight: isLargeTablet ? 12 : 0,
    marginLeft: 0,
    marginBottom: isLargeTablet ? -5 : 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 10, 
    overflow: 'hidden', 
    width: isLargeTablet ? 360 : '100%',
    height: isLargeTablet ? 150 : 120,
  },
  imageStyle: {
    width: isMobile ? 120 : '45%',
    height: '100%', 
    resizeMode: 'cover',
  },
  textContainer: {
    padding: isLargeTablet ? 10 : 8,
    justifyContent: 'center',
    width: isLargeTablet ? '55%' : undefined,
    flex: isMobile ? 1 : undefined,
  },
  titleStyle: {
    fontWeight: '700',
    color: '#777777',
    fontSize: isLargeTablet ? 23 : 14,
    textAlign: 'left',
    marginBottom: isLargeTablet ? 8 : 10,
    marginTop: isLargeTablet ? 8 : 20,
  },
  dateStyle: {
    color: '#21CF44',
    fontSize: isLargeTablet ? 22 : 11, 
    fontWeight: '600',  
    // marginTop: -5,
  },
  latestLabelStyle: {
    position: 'absolute',
    marginLeft: 10,
    top: 0,
    left: 0,
    width: isLargeTablet ? 72 : 60,
    height: isLargeTablet ? 34 : 30,
    resizeMode: 'contain',
  },
});

export default NewsItem;
