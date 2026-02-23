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
                <Text allowFontScaling={false} style={styles.headerText}>Perkhidmatan</Text>
                {/* <TouchableOpacity onPress={()=>{console.log("settings button pressed")}}>
                    <Image 
                        source={require('../../assets/settingsIcon.png')}
                        style = {styles.iconStyleSetting}
                    />
                </TouchableOpacity> */}
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
        zIndex: 1,
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        paddingHorizontal: 15, 
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: isLargeScreen ? Math.round(30 * largeScale) : 20,
        width: '40%',
        textAlign: 'center',
        marginRight: '55%',
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        marginLeft: 11,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default Header;
