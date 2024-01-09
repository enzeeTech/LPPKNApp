import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

function Header() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Perkhidmatan</Text>
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
        backgroundColor: '#9448DA',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight-20: 0,
        zIndex: 1,
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
        width: '40%',
        textAlign: 'center', 
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default Header;
