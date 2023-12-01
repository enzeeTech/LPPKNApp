import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Header from './LocationScreenHeader';

function CustomTile() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Header />
        </View>
        <View style={styles.testTextContainer}>
            <Text style={styles.titleTest}>Dummy Text</Text>
            <Text style={styles.subtitle}>Seperation</Text>
        </View>
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
    </SafeAreaView>
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
        // flex: 1,
        backgroundColor: '#FFFF',
        // marginTop: -12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        margin:'5%',
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
        // backgroundColor: 'blue',
        width: '35%',
    },
    image: {
        width: '100%',
        height: 134,
        resizeMode: 'stretch',
        // borderRadius: 30,
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
        // backgroundColor: 'yellow',
        width: '65%',
        height: 134,
        marginLeft: '35%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    infoText: {
        color: '#777777',
        // fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        // paddingLeft: 5,
        marginLeft: '7%',
   },
    titleContainer: {
        // flex: 1,
        // backgroundColor: 'red',
        width: '100%',
        height: 50,
        // marginLeft: '35%',
        // marginBottom: 84,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    textContainer: {
        // flex: 1,
        // backgroundColor: 'yellow',
        width: '65%',
        height: 84,
        // marginLeft: '35%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    testTextContainer: {
        // flex: 1,
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
        // flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
        width: '100%',
        height: 84,
        // marginLeft: '35%',
        // justifyContent: 'center',
        // alignItems: 'center',
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