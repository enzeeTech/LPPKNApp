import React, { useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, View, TextInput, Platform, StatusBar, Dimensions } from 'react-native';
import DropdownMenu from './menuScreens/DropDownMenu';
import SettingsScreen from './menuScreens/SettingsMenu';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth > 600;

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
                {/* <TouchableOpacity onPress={toggleSearch}>
                    <Image 
                        source={require('../../assets/searchIconHome.png')}
                        style = {styles.iconStyleSearch}
                    />
                </TouchableOpacity> */}
                {/* LOGO BUTTON */}
                {/* <TouchableWithoutFeedback 
                    onPress={() => setMenuVisible(!isMenuVisible)}>
                    <Image 
                        source={require('../../assets/lppknLogoHome.png')}
                        style = {styles.iconStyleHome}
                    />
                </TouchableWithoutFeedback>
                <DropdownMenu 
                    isVisible={isMenuVisible} 
                    onItemSelect={handleMenuItemSelect}
                    onClose={() => setMenuVisible(false)}
                /> */}
                <View style={{
                    flex: 1, 
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // marginLeft: 20,
                    marginTop: -15,
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setMenuVisible(!isMenuVisible)}>
                    <Image 
                        source={require('../../assets/lppknLogoHome.png')}
                        style = {styles.iconStyleHome}
                    />
                    </TouchableWithoutFeedback>
                    <View style={{marginTop: -15, marginLeft: 10, justifyContent: 'center', width: 15, height: 15}}>
                        <Image
                            source={require('../../assets/downArrowButton.png')}
                            style={{width:15, height:15, resizeMode: 'contain'}}
                        />
                    </View>
                    <DropdownMenu 
                        isVisible={isMenuVisible} 
                        onItemSelect={handleMenuItemSelect}
                        onClose={() => setMenuVisible(false)}
                    />
                </View>
                {/* SETTINGS BUTTON */}
                {/* <TouchableOpacity onPress={openSettings}>
                    <Image 
                        source={require('../../assets/settingsIconHome.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity> */}
                {/* Settings Overlay */}
                {/* {showSettings && (
                    <SettingsScreen onClose={closeSettings} />
                )} */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+15: 0,
        // paddingTop: 40,
        
    },
    headerContainer: {
        height: isLargeScreen ? 104 : 68, 
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
        width: isLargeScreen ? 280 : 150, 
        height: isLargeScreen ? 115 : 70, 
        resizeMode: 'contain',
        // marginRight: 10,  
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
        // marginRight: 5,
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
