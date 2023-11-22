import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Header from './Header';
import BottomTabBar from './BottomTabBar';
import { View } from 'react-native';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

function MainScreen() {
    return (
        <View>
            <ImageBackground 
                source={require('../../assets/negiriPerlisBackground.png')} // Update with the correct path to your image
                style={styles.backgroundImage}
                resizeMode= "contain"
            >
                <Header />
            </ImageBackground>
            <BottomTabBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        height: screenHeight / 2, // Set the height of the background image to half of the screen height
        width: '100%', // Set the width to span the full width of the screen

    },
   
});

export default MainScreen;