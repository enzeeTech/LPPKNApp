import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Header from './LocationScreenHeader';

function CustomTile() {
  return (
    <View style={styles.tileContainer}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/dummyImage.png')} style={styles.image} />
        </View>
        <View style={styles.infoParentContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>LOCATION HEADING</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image source={require('../../assets/timeIcon.png')} style={styles.imageIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.subHeading}>Waktu Operasi</Text>
                    <Text style={styles.infoText}>Isnin - Jumaat</Text>
                    <Text style={styles.infoText}>8.00 pagi - 5.30 petang</Text>
                </View>
            </View>
        </View>
    </View>
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
        marginLeft: '5%',
        height: 134,
        width: '90%',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    imageContainer: {
        flex: 1,
        width: '35%',
    },
    image: {
        width: '100%',
        height: 134,
        resizeMode: 'stretch',
    },
    imageIcon: {
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginLeft: '7%',
        marginTop: '6%',
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
        width: '100%',
        height: 50,
    },
    textContainer: {
        width: '65%',
        height: 84,
    },
    testTextContainer: {
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#9448DA',
        marginTop: '8%',
        marginLeft: '8%',
    },
    detailsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 84,
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