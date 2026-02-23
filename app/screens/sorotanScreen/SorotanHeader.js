import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, Platform, StatusBar, useWindowDimensions } from 'react-native';

const SorotanHeader = ({onBackPress}) => {
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

const createStyles = (isLargeScreen, largeScale) => StyleSheet.create({
    outerContainer: {
        backgroundColor: '#9448DA',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+15: 0,
    },
    headerContainer: {
        height: isLargeScreen ? Math.round(74 * largeScale) : 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingHorizontal: isLargeScreen ? Math.max(20, Math.min(40, Math.round(24 * largeScale))) : 12,
    },
    backButton: {
        width: isLargeScreen ? Math.round(52 * largeScale) : 28,
        height: isLargeScreen ? Math.round(52 * largeScale) : 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: isLargeScreen ? Math.round(30 * largeScale) : 20,
        textAlign: 'left',
        marginLeft: isLargeScreen ? 100 : 8,
    },
    iconStyleBack: {
        width: isLargeScreen ? Math.round(34 * largeScale) : 25, 
        height: isLargeScreen ? Math.round(34 * largeScale) : 25, 
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
