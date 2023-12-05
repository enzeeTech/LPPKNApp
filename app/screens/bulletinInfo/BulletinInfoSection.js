import React from 'react';
import { Platform } from 'react-native';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const InfoSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    SAMBUTAN HARI WANITA ANTARABANGSA DI DEWAN PERDANA FELDA
                </Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <Image source={require('../../assets/calendarIcon.png')} style={styles.calendarIcon} />
                <Text style={styles.subHeaderText}>
                    9 Mac 2023
                </Text>
                <TouchableOpacity style={styles.shareIcon} onPress={() => console.log('Share Button Pressed!')}>
                    <Image source={require('../../assets/shareIcon.png')} style={styles.shareIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        // height: 68, 
        flexDirection: 'column',
        // alignItems: 'center',
        marginLeft: 15,
        marginTop: '3%', 
        width: '95%',
        justifyContent: 'space-evenly',
        // paddingHorizontal: 15, 
        // backgroundColor: 'yellow',
    },
    headerText: {
        color: '#9448DA',
        fontWeight: 'bold',
        fontSize: 24,
    },
    subHeaderContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: '2%', 
        width: '94%',
        height: '20%',
        // backgroundColor: 'red',
    },
    subHeaderText: {
        color: '#777777',
        fontSize: Platform.OS === 'ios' ? 15 : 16,
        fontWeight: '600',
        marginLeft: '4.5%',
        marginTop: Platform.OS === 'ios' ? 14 : 11,
    },
    calendarIcon: {
        width: 25,
        height: 25,
        // marginRight: 10,
        marginTop: '2.5%',
        // marginLeft: '2%',
        resizeMode: 'contain',
    },
    shareIcon: {
        width: 23,
        height: 23,
        marginLeft: 'auto',
        marginRight: '2%',
        marginTop: '2.5%',
        resizeMode: 'contain',
    },
});

export default InfoSection;

