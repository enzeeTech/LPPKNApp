import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, Platform, StatusBar, useWindowDimensions } from 'react-native';

function Header() {
    const { width, height } = useWindowDimensions();
    const smallestSide = Math.min(width, height);
    const longestSide = Math.max(width, height);
    const isLargeScreen = smallestSide >= 500 || longestSide >= 960;
    const largeScale = isLargeScreen ? Math.min(Math.max(longestSide / 1280, 1), 1.15) : 1;
    const styles = createStyles(isLargeScreen, largeScale);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Lokasi</Text>
                <View style={styles.iconContainer}>
                    {/* <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                        <Image 
                            source={require('../../assets/settingsIcon.png')}
                            style = {styles.iconStyleSetting}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
}

const createStyles = (isLargeScreen, largeScale) => StyleSheet.create({
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
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: isLargeScreen ? Math.round(30 * largeScale) : 20,
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
