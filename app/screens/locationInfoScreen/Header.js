// import React from 'react';
// import { Image, TouchableOpacity } from 'react-native';
// import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView } from 'react-native';

// function Header() {
//     return (
//         <View style={styles.outerContainer}>
//             <View style={styles.headerContainer}>
//                 <TouchableOpacity onPress={() => console.log('Back Button Pressed!')}>
//                     <Image 
//                         source={require('../../assets/backArrowKey.png')}
//                         style = {styles.iconStyleBack}
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
//                 <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
//                     <Image 
//                         source={require('../../assets/settingsIcon.png')}
//                         style = {styles.iconStyleSetting}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     outerContainer: {
//         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, 
//         backgroundColor: '#9448DA',
//         borderBottomLeftRadius: 15,
//         borderBottomRightRadius: 15,
//     },
//     headerContainer: {
//         height: 68, 
//         flexDirection: 'row',
//         alignItems: 'center', 
//         justifyContent: 'space-between',
//         paddingHorizontal: 15, 
//     },
//     headerText: {
//         color: '#F5F5F5',
//         fontWeight: '600',
//         fontSize: 20,
//         fontFamily: 'Roboto-Regular',
//         flex: 1, 
//         textAlign: 'center', 
//     },
//     iconStyleBack: {
//         width: 45, 
//         height: 45, 
//         resizeMode: 'contain',
//     },
//     iconStyleSetting: {
//         width: 45, 
//         height: 45, 
//         resizeMode: 'contain',
//     },
// });
// export default Header;
import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

function Header() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => console.log('Back Button Pressed!')}>
                    <Image 
                        source={require('../../assets/backArrowKey.png')}
                        style = {styles.iconStyleBack}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, 
    },
    headerContainer: {
        height: 68, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 15, 
        paddingTop: 10,
    },
    headerText: {
        color: '#F5F5F5',
        fontWeight: '600',
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        flex: 1, 
        textAlign: 'center', 
    },
    iconStyleBack: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
    },
    iconStyleSetting: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});

export default Header;
