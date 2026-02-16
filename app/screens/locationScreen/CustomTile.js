import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Pressable, Dimensions } from 'react-native';


const defaultImage = '../../assets/backgroundLPPKNHQ.png';
const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 500;
const CARD_HEIGHT = isLargeScreen ? 230 : 150;

const CustomTile = ({onPress, title, backgroundImage, operationTime}) => {

    const imageSource = backgroundImage ? {uri: backgroundImage} : require(defaultImage);

  return (
    <Pressable style={({pressed}) => [styles.tileContainer, { opacity: pressed ? 1 : 1 }]}onPress={onPress}>
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.infoParentContainer}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image source={require('../../assets/timeIcon.png')} style={styles.imageIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.subHeading}>Waktu Operasi</Text>
                    <Text style={styles.infoText}>{operationTime}</Text>
                </View>
            </View>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        // borderColor: '#DDDDDD',
        // borderWidth: 1,
        // borderRadius: 12,
        marginTop: 10,
        marginLeft: '2.5%',
        height: CARD_HEIGHT,
        width: '95%',
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        // overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
        width: '35%',
    },
    image: {
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    imageIcon: {
        width: isLargeScreen ? 20 : 15,
        height: isLargeScreen ? 20 : 15,
        resizeMode: 'stretch',
        marginLeft: isLargeScreen ? 12 : '7.5%',
        marginTop: isLargeScreen ? 6 : '6%',
    },
    infoParentContainer: {
        flexDirection: 'column',
        width: '65%',
        height: CARD_HEIGHT,
        marginLeft: '35%',
    },
    infoText: {
        color: '#777777',
        fontSize: isLargeScreen ? 18 : 12,
        lineHeight: isLargeScreen ? 28 : 15,
        marginLeft: isLargeScreen ? 10 : '7%',
   },
    titleContainer: {
        width: '90%',
        marginTop: isLargeScreen ? 10 : '-4%',
        marginLeft: isLargeScreen ? 8 : '2.5%',
        
    },
    textContainer: {
        width: isLargeScreen ? '92%' : '80%',
        height: isLargeScreen ? 110 : 84,
        marginTop: isLargeScreen ? 4 : '-2%', 
        marginLeft: isLargeScreen ? 0 : '-1%',
    },
    testTextContainer: {
        marginLeft: 20,
    },
    title: {
        fontSize: isLargeScreen ? 25 : 17,
        fontWeight: '700',
        color: '#9448DA',
        marginTop: isLargeScreen ? 0 : '8%',
        marginLeft: isLargeScreen ? 8 : '8%',
        
    },
    detailsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: isLargeScreen ? 120 : 84,
        marginTop: isLargeScreen ? 8 : '-2%',
        marginLeft: isLargeScreen ? 8 : '2.5%',
    },
    titleTest: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9a9a9a',
        marginTop: 5,
    },
    subHeading: {
        fontSize: isLargeScreen ? 20 : 16,
        fontWeight: '600',
        color: '#777777',
        marginTop: isLargeScreen ? 0 : '9%',
        marginLeft: isLargeScreen ? 8 : '6%',
        paddingBottom: '2%',
    },
});

export default CustomTile;
