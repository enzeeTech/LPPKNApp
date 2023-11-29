import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Header from './Header';
import InfoScreen from './InfoScreen';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

function LocationInfoScreen() {
    const insets = useSafeAreaInsets();
    const bottomNavBarHeight = insets.bottom;

    const infoContainerStyle = {
        flex: 1, // Make the infoContainer expand to fill the remaining space
        paddingBottom: bottomNavBarHeight, // Add padding to accommodate the bottom navigation bar
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <ImageBackground
                source={require('../../assets/negiriPerlisBackground.png')}
                style={styles.image}
                resizeMode="stretch"
            >
            </ImageBackground>
            <View style={[styles.infoContainer, infoContainerStyle]}>
                <InfoScreen />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: '#FFFFFF', 
        backgroundColor: '#9448DA',
        // postion: 'relative',
    },
    headerContainer: {
        backgroundColor: 'transparent', // Make the header background transparent
        zIndex: 5,
        // marginTop: 20,
    },
    imageContainer: {
        width: '100%',
        height: screenHeight / 3.2,
        position: 'absolute', // Position the image container absolutely
        zIndex: -1,
    },
    image: {
        width: '100%',
        height: screenHeight / 3.2,
        marginTop: -15,
        marginBottom: -20,
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
    infoContainer: {
        // flex: 1,
        backgroundColor: '#FFF', // Adjust the background color as needed
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
      },
      bottomBarContainer: {
        // zIndex: 15, // Adjust the z-index if needed
      },
});

export default LocationInfoScreen;