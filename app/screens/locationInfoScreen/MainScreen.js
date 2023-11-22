import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Header from './Header';
import BottomTabBar from './BottomTabBar';
import InfoScreen from './InfoScreen';
import { View } from 'react-native';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

function MainScreen() {
    return (
        <View style={styles.container}>
            {/* Creating header */}
            <View style={styles.headerContainer}>
                <Header />
            </View>
            {/* Creating image background */}
            <View style={styles.imageContainer}>
                <ImageBackground 
                    source={require('../../assets/negiriPerlisBackground.png')} 
                    style={styles.backgroundImage}
                    resizeMode='stretch'
                >
                </ImageBackground>
            </View>
            {/* Creating Info Screen background */}
            <View style={styles.infoContainer}>
                <InfoScreen />
            </View>
            <BottomTabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFFFFF', 
    },
    headerContainer: {
        position: 'absolute',
        width: '100%',
        // height: '100%',
        zIndex: 10, 
    },
    imageContainer: {
        width: '100%', 
        height: screenHeight / 3.5, 
        marginTop: 95,
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
   infoContainer: {
        zIndex: 10,
        width: '100%',
        position: 'relative',
        marginTop: -16,
   }
});

export default MainScreen;