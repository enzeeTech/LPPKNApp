import React, { useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, View, TextInput, Platform, StatusBar, Dimensions } from 'react-native';
import DropdownMenu from './menuScreens/DropDownMenu';
import SettingsScreen from './menuScreens/SettingsMenu';
import { useNavigation } from '@react-navigation/native';


function Header({toggleSearch}) {
    const navigation = useNavigation();

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // Logo button pressed handler
    const handleMenuItemSelect = (item) => {
        setMenuVisible(false); // Closes the menu after selection
    
        // Navigate based on the item selected
        if (item === 'Tentang Kami') {
            navigation.navigate('Tetangkami');
        } else if (item === 'Hubungi Kami') {
            navigation.navigate('Hubungikami'); 
        }
    };

    // Open the settings overlay
    const openSettings = () => {
        setShowSettings(true);
    };

    // Close the settings overlay
    const closeSettings = () => {
        setShowSettings(false);
    };

    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                {/* SEARCH BUTTON */}
                <TouchableOpacity onPress={toggleSearch}>
                    <Image 
                        source={require('../../assets/searchIconHome.png')}
                        style = {styles.iconStyleSearch}
                    />
                </TouchableOpacity>
                {/* LOGO BUTTON */}
                <TouchableWithoutFeedback onPress={() => setMenuVisible(!isMenuVisible)}>
                    <Image 
                        source={require('../../assets/lppknLogoHome.png')}
                        style = {styles.iconStyleHome}
                    />
                </TouchableWithoutFeedback>
                <DropdownMenu 
                    isVisible={isMenuVisible} 
                    onItemSelect={handleMenuItemSelect}
                    onClose={() => setMenuVisible(false)}
                />
                {/* SETTINGS BUTTON */}
                <TouchableOpacity onPress={openSettings}>
                    <Image 
                        source={require('../../assets/settingsIconHome.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity>
                {/* Settings Overlay */}
                {showSettings && (
                    <SettingsScreen onClose={closeSettings} />
                )}
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
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation: 5,
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#FFF',
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
        height: 70, 
        resizeMode: 'contain',  
    },
    iconStyleSetting: {
        width: 22, 
        height: 22, 
        marginRight: 5,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
    searchBarMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9448DA',
        width: '100%',
        height: 40,
        alignSelf: 'center',
        marginTop: 107,
    },
});

export default Header;
