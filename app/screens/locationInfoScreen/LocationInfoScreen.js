import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Header from './Header';
import BottomTabBar from './BottomTabBar';
import InfoScreen from './InfoScreen';
import BottomNavBar from './BottomNavBar';
import { View } from 'react-native';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

function LocationInfoScreen() {
    return (
        // <View style={styles.container}>
        //     {/* Creating header */}
        //     <View style={styles.headerContainer}>
        //         <Header />
        //     </View>
        //     {/* Creating image background */}
        //     <View style={styles.imageContainer}>
        //         <ImageBackground 
        //             source={require('../../assets/negiriPerlisBackground.png')} 
        //             style={styles.backgroundImage}
        //             resizeMode='stretch'
        //         >
        //         </ImageBackground>
        //     </View>
        //     {/* Creating Info Screen background */}
        //     <View style={styles.infoContainer}>
        //         <InfoScreen />
        //     </View>
        //     <BottomTabBar />
        // </View>
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../../assets/negiriPerlisBackground.png')}
                    style={styles.image}
                    resizeMode="stretch"
                ></ImageBackground>
            </View>
            <View style={styles.infoContainer}>
                <InfoScreen />
            </View>
            <View style={styles.bottomBarContainer}>
                {/* <BottomTabBar /> */}
                <BottomNavBar />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: '#FFFFFF', 
        backgroundColor: '#9448DA',
        postion: 'relative',
    },
    headerContainer: {
        width: '100%',
        zIndex: 15, 
    },
    imageContainer: {
        width: '100%',
        height: screenHeight / 3.3,
    },
    image: {
        width: '100%', 
        height: screenHeight / 3.3, 
        position: 'absolute',
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
    infoContainer: {
        flex: 1,
        zIndex: 10,
      },
      bottomBarContainer: {
        // zIndex: 15, // Adjust the z-index if needed
      },
});

export default LocationInfoScreen;