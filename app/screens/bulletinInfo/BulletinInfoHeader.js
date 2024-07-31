import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

const BulletingInfoHeader = ({onBackPress}) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onBackPress}>
                    <Image 
                        source={require('../../assets/backArrowKey.png')}
                        style = {styles.iconStyleBack}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Berita LPPKN</Text>
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

const styles = StyleSheet.create({
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
        justifyContent: 'space-evenly',
        paddingHorizontal: 15, 
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '700',
        fontSize: 20,
        width: '40%',
        // textAlign: 'center',
        marginRight: '40%', 
        marginLeft: '2%',
        marginTop: 2,

    },
    iconStyleBack: {
        width: 25, 
        height: 25, 
        marginTop: 2,
        resizeMode: 'contain',
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        marginTop: 2,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default BulletingInfoHeader;
