import React from 'react';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Header from './BulletinInfoHeader';
import InfoSection from './BulletinInfoSection';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

const BulletinInfoMain = () => {
    const insets = useSafeAreaInsets();
    const bottomNavBarHeight = insets.bottom;

    const infoContainerStyle = {
        flex: 1, 
        paddingBottom: bottomNavBarHeight, 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header/>
            </View>
            <ImageBackground
                source={require('../../assets/beritaInfoImage.png')}
                style={styles.image}
                resizeMode="cover"
            ></ImageBackground>
            <View style={[styles.infoContainer, infoContainerStyle]}>
                <InfoSection/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#9448DA',
        // backgroundColor: 'transparent',

        },
        headerContainer: {
            backgroundColor: 'transparent', 
            zIndex: 1,
            justifyContent: 'center',
        },
        image: {
            width: '100%',
            height: screenHeight * 0.3,
            marginTop: -10,

        },
        infoContainer: {
            // flex: 1,
            backgroundColor: '#FFF', 
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // paddingTop: '10%',
            marginTop: '-5%',
          },
});

export default BulletinInfoMain;