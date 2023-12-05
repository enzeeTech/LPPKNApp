import React from 'react';
import { Platform } from 'react-native';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const InfoSection = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    SAMBUTAN HARI WANITA ANTARABANGSA DI DEWAN PERDANA FELDA
                </Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <Image source={require('../../assets/calendarIcon.png')} style={styles.calendarIcon} />
                <Text style={styles.subHeaderText}>
                    9 Mac 2023
                </Text>
                <TouchableOpacity style={styles.shareIcon} onPress={() => console.log('Share Button Pressed!')}>
                    <Image source={require('../../assets/shareIcon.png')} style={styles.shareIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.body} numberOfLines={expanded ? null : Platform.OS === 'ios' ? 8 : 12}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis sed risus sollicitudin cursus. Nam a congue nibh. Etiam ullamcorper, sem in sollicitudin imperdiet, odio nisi cursus erat, pellentesque interdum lorem ipsum sit amet urna. Fusce sit amet nibh ut nisi auctor dictum. Pellentesque tortor lacus, dignissim id orci ut, cursus dignissim eros. Integer aliquet malesuada leo et maximus. Donec fermentum justo vel leo egestas cursus. Integer iaculis tincidunt velit vitae posuere. Sed fermentum consectetur orci, quis lobortis nisl pretium vitae. Fusce eu accumsan purus. Vivamus et lacinia eros, ac faucibus urna. Nunc eget ante lacus. Cras placerat facilisis malesuada.\n\n' +  
                'Nulla facilisi. Etiam iaculis, elit non iaculis sollicitudin, libero erat tincidunt felis, auctor facilisis mi ex nec lectus. Praesent accumsan sem id metus rutrum varius. Quisque porta, justo et pulvinar elementum, ante orci malesuada velit, et viverra massa quam eu mauris. Morbi consequat elit diam, vel gravida mi vestibulum et. Mauris pharetra imperdiet ullamcorper. Praesent auctor enim tellus, id vulputate velit tincidunt sit amet. Integer ut iaculis est, eu blandit libero. Aliquam ultrices urna at lacinia mollis. Ut faucibus elementum dui et tempus.\n\n' +'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis sed risus sollicitudin cursus. Nam a congue nibh. Etiam ullamcorper, sem in sollicitudin imperdiet, odio nisi cursus erat, pellentesque interdum lorem ipsum sit amet urna. Fusce sit amet nibh ut nisi auctor dictum. Pellentesque tortor lacus, dignissim id orci ut, cursus dignissim eros. Integer aliquet malesuada leo et maximus. Donec fermentum justo vel leo egestas cursus. Integer iaculis tincidunt velit vitae posuere. Sed fermentum consectetur orci, quis lobortis nisl pretium vitae. Fusce eu accumsan purus. Vivamus et lacinia eros, ac faucibus urna. Nunc eget ante lacus. Cras placerat facilisis malesuada. \n\n' + 
                'Nulla facilisi. Etiam iaculis, elit non iaculis sollicitudin, libero erat tincidunt felis, auctor facilisis mi ex nec lectus. Praesent accumsan sem id metus rutrum varius. Quisque porta, justo et pulvinar elementum, ante orci malesuada velit, et viverra massa quam eu mauris. Morbi consequat elit diam, vel gravida mi vestibulum et. Mauris pharetra imperdiet ullamcorper. Praesent auctor enim tellus, id vulputate velit tincidunt sit amet.Integer ut iaculis est, eu blandit libero. Aliquam ultrices urna at lacinia mollis. Ut faucibus elementum dui et tempus.'}
                </Text>

                {!expanded && (
                    <LinearGradient
                        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
                        style={styles.gradient}
                        locations={[0, 0.5, 1]}
                    >
                        <TouchableOpacity style={styles.loadMoreItemContainer} onPress={() => setExpanded(true)}>
                            <Image source={require('../../assets/downArrow.png')} style={styles.downArrowIcon} />
                            <Text style={styles.loadMoreText}>Selanjutnya</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        // height: 68, 
        flexDirection: 'column',    
        // alignItems: 'center',
        marginLeft: 15,
        marginTop: '3%', 
        width: '95%',
        justifyContent: 'space-evenly',
        // paddingHorizontal: 15, 
        // backgroundColor: 'yellow',
    },
    headerText: {
        color: '#9448DA',
        fontWeight: 'bold',
        fontSize: 24,
    },
    subHeaderContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: '2%', 
        width: '94%',
        height: 50,
        // backgroundColor: 'red',
    },
    subHeaderText: {
        color: '#777777',
        fontSize: Platform.OS === 'ios' ? 15 : 16,
        fontWeight: '600',
        marginLeft: '4.5%',
        
        marginTop: Platform.OS === 'ios' ? 14 : 11,
    },
    calendarIcon: {
        width: 25,
        height: 25,
        // marginRight: 10,
        marginTop: '2.5%',
        // marginLeft: '2%',
        resizeMode: 'contain',
    },
    shareIcon: {
        width: 23,
        height: 23,
        marginLeft: 'auto',
        marginRight: '2%',
        marginTop: '2.5%',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        width: '100%',
        marginLeft: '5%',
        marginTop: '3%',
    },
    body: {
        color: '#777777',
        fontSize: Platform.OS === 'ios' ? 14 : 15,
        fontWeight: '600',
        textAlign: 'justify',
        marginBottom: 140,
        width: '90%',
    },
    loadMoreItemContainer: {
        height: Platform.OS === 'ios' ? 120 : 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        marginRight: '5%',
        zIndex: 1,
        // marginBottom: '10%',
        // backgroundColor: '#FFFFFF',
    },
    loadMoreText: {
        fontSize: 20,
        color: '#5C2D86',
        textAlign: 'center',
        // padding: 20,
        paddingLeft: 20, 
        height: Platform.OS === 'ios' ? 40 : 40,
        fontWeight: '600',
        marginTop: Platform.OS === 'ios' ? 105 : 123,
    },
    downArrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 90 : 110,
        marginRight: -10,
    },
    gradient: {
        position: 'absolute',
        left: -20,
        right: 0,
        bottom: Platform.OS === 'ios' ? 10 : 50,
        height: 200,
        zIndex: 1,

    }
});

export default InfoSection;

