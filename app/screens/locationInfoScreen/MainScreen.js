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
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground 
                    source={require('../../assets/negiriPerlisBackground.png')} 
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                </ImageBackground>
            </View>
            <InfoScreen />
            {/* <BottomTabBar /> */}
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
        zIndex: 10, 
    },
    imageContainer: {
        width: '100%', 
        height: screenHeight / 4, 
        marginTop: 95,
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
   
});

export default MainScreen;