import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, Platform, StatusBar, useWindowDimensions } from 'react-native';

function Header({onBackPress}) {
    const { width, height } = useWindowDimensions();
    const smallestSide = Math.min(width, height);
    const longestSide = Math.max(width, height);
    const isLargeScreen = smallestSide >= 500 || longestSide >= 960;
    const largeScale = isLargeScreen ? Math.min(Math.max(longestSide / 1280, 1), 1.15) : 1;
    const styles = createStyles(isLargeScreen, largeScale);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Image 
                        source={require('../../../assets/backArrowKey.png')}
                        style = {styles.iconStyleBack}
                    />
                </TouchableOpacity>
                <Text allowFontScaling={false} style={styles.headerText}>Perkhidmatan</Text>

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
        height: isLargeScreen ? Math.round(74 * largeScale) : 68,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: isLargeScreen ? 'flex-start' : 'space-evenly',
        paddingHorizontal: isLargeScreen ? Math.max(20, Math.min(40, Math.round(24 * largeScale))) : 0,
    },
    backButton: {
        width: isLargeScreen ? Math.round(52 * largeScale) : 25,
        height: isLargeScreen ? Math.round(52 * largeScale) : 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: isLargeScreen ? Math.round(30 * largeScale) : 20,
        width: isLargeScreen ? 'auto' : '40%',
        textAlign: isLargeScreen ? 'left' : 'center',
        marginRight: isLargeScreen ? 0 : '40%',
        marginLeft: isLargeScreen ? 80 : -10,
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
    iconStyleBack: {
        width: isLargeScreen ? Math.round(34 * largeScale) : 25,
        height: isLargeScreen ? Math.round(34 * largeScale) : 25,
        resizeMode: 'contain',
    },
});

export default Header;
