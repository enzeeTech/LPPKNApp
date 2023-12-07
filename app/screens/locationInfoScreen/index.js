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
        flex: 1, 
        paddingBottom: bottomNavBarHeight, 
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
        backgroundColor: '#9448DA',

    },
    headerContainer: {
        backgroundColor: 'transparent', 
        zIndex: 5,
        shadowOffset: {width: 0, height: 6.7},
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation: 5,
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.3,
        position: 'absolute', 
        zIndex: -1,
    },
    image: {
        width: '100%',
        height: screenHeight * 0.3,
        marginTop: -15,
        marginBottom: -20,
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
    infoContainer: {
        // flex: 1,
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // paddingTop: '10%',
      },
});

export default LocationInfoScreen;