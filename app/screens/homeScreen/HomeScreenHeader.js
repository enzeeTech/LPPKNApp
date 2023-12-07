import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, Platform, StatusBar } from 'react-native';

function Header() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => console.log('Search Button Pressed!')}>
                    <Image 
                        source={require('../../assets/searchIconHome.png')}
                        style = {styles.iconStyleSearch}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Logo Button Pressed!')}>
                    <Image 
                        source={require('../../assets/lppknLogoHome.png')}
                        style = {styles.iconStyleHome}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                    <Image 
                        source={require('../../assets/settingsIconHome.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight-20: 0,
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 15, 
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: 20,
        flex: 1, 
        textAlign: 'center', 
    },
    iconStyleSearch: {
        width: 22, 
        height: 22, 
        marginLeft: 5,
        resizeMode: 'contain',
    },
    iconStyleHome: {
        width: 150, 
        height: 150, 
        marginLeft: 5,
        resizeMode: 'contain',  
    },
    iconStyleSetting: {
        width: 22, 
        height: 22, 
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default Header;
