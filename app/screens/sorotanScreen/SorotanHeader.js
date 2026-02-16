import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 500;

const SorotanHeader = ({onBackPress}) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onBackPress}>
                    <Image 
                        source={require('../../assets/backArrowKey.png')}
                        style = {styles.iconStyleBack}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Utama</Text>
                {/* <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                    <Image 
                        source={require('../../assets/settingsIcon.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#9448DA',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+15: 0,
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        // paddingHorizontal: 15, 
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: isLargeScreen ? 40 : 26,
        width: '20%',
        textAlign: 'center',
        marginRight: '55%',
        marginLeft: isLargeScreen ? -260 : -10,

    },
    iconStyleBack: {
        width: 50, 
        height: 50, 
        marginLeft: isLargeScreen ? -120 : 0,
        resizeMode: 'contain',
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default SorotanHeader;
