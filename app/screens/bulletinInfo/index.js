import React from 'react';
import { useState, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Header from './BulletinInfoHeader';
import InfoSection from './BulletinInfoSection';
import { ScrollView } from 'react-native';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

const BulletinInfoMain = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const bottomNavBarHeight = insets.bottom;

    const infoContainerStyle = {
        flex: 1, 
        paddingBottom: bottomNavBarHeight, 
    };

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header onBackPress={handleBackPress} />
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                style={{marginTop: -13}}
            >
                <View style={[styles.infoContainer, infoContainerStyle]}>
                        <InfoSection/>
                </View>
            </ScrollView>
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
        backgroundColor: '#9448DA', 
        zIndex: 5,
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    image: {
        width: '100%',
        height: screenHeight * 0.3,
        // marginTop: 0,
    },
    infoContainer: {
        flex:1,
        
    },
});

export default BulletinInfoMain;