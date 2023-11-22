import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView } from 'react-native';

function Header() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => console.log('Back Button Pressed!')}>
                    <Image 
                        source={require('../../assets/backArrowKey.png')}
                        style = {styles.iconStyleBack}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
                <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                    <Image 
                        source={require('../../assets/settingsIcon.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, // adjusted for status bar
        backgroundColor: '#9448DA',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerContainer: {
        height: 68, // Ensures enough space for the content
        flexDirection: 'row',
        alignItems: 'center', // Centers content vertically
        justifyContent: 'space-between', // Spaces out the back button, title, and settings icon
        paddingHorizontal: 15, // Adds horizontal padding within the container
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '600',
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        flex: 1, 
        textAlign: 'center', 
    },
    iconStyleBack: {
        width: 45, 
        height: 45, 
        resizeMode: 'contain',
    },
    iconStyleSetting: {
        width: 45, 
        height: 45, 
        resizeMode: 'contain',
    },
});
export default Header;