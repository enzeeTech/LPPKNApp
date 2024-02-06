import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

const CustomTile = ({ onPress, title, backgroundImage, openTime, closeTime }) => {
  return (
    <TouchableOpacity style={styles.tileContainer} onPress={onPress} delayLongPress={3}>
        <View style={styles.imageContainer}>
            <Image source={{uri: backgroundImage}} style={styles.image} />
        </View>
        <View style={styles.infoParentContainer}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image source={require('../../assets/timeIcon.png')} style={styles.imageIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.subHeading}>Waktu Operasi</Text>
                    <Text style={styles.infoText}>Isnin - Jumaat</Text>
                    <Text style={styles.infoText}>{openTime} pagi - {closeTime} petang</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#9448DA',
        backgroundColor: 'transparent',
    },
    headerContainer: {
        backgroundColor: 'transparent', 
        zIndex: 5,
    },
    tileContainer: {
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginTop: 10,
        marginLeft: '2.5%',
        height: 134,
        width: '95%',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 10, 
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
        width: '35%',
    },
    image: {
        width: '100%',
        height: 134,
        resizeMode: 'cover',
    },
    imageIcon: {
        width: 15,
        height: 15,
        resizeMode: 'stretch',
        marginLeft: '7.5%',
        marginTop: Platform.OS === 'ios' ? '5%' : '6%',
    },
    infoParentContainer: {
        flexDirection: 'column',
        width: '65%',
        height: 134,
        marginLeft: '35%',
    },
    infoText: {
        color: '#777777',
        fontSize: 12,
        lineHeight: 15,
        marginLeft: '7%',
   },
    titleContainer: {
        width: '90%',
        height: 70,
        marginTop: '-4%',
        marginLeft: '2.5%',
        
    },
    textContainer: {
        width: '70%',
        height: 84,
        marginTop: '-2%', 
        marginLeft: '-1%',
    },
    testTextContainer: {
        marginLeft: 20,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        color: '#9448DA',
        marginTop: '8%',
        marginLeft: '8%',
        
    },
    detailsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 84,
        marginTop: '-4%',
        marginLeft: '2.5%',
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
        fontSize: 16,
        fontWeight: '600',
        color: '#777777',
        marginTop: '9%',
        marginLeft: '6%',
        paddingBottom: '2%',
    },
});

export default CustomTile;