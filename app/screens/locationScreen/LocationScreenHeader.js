import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

function Header() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Lokasi</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                        <Image 
                            source={require('../../assets/settingsIcon.png')}
                            style = {styles.iconStyleSetting}
                        />
                    </TouchableOpacity>
                </View>
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
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1, 
        textAlign: 'center', 
    },
    iconContainer: {
        marginLeft: '65%',
        paddingRight: 15,
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
    },
});

export default Header;
