import React from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, Pressable } from 'react-native';
// import { TouchableOpacity} from 'react-native-gesture-handler';

const CustomBulletinTile = ({ onPress }) => {

    const handleTilePress = () => {
        console.log('Tile Item Pressed!');
    };

    const handleShareButtonPress = () => {
        console.log('Share Button Pressed!');
    };

    return (
        <Pressable
        style={({ pressed }) => [
            styles.tileContainer,
            { opacity: pressed ? 0.80 : 1 } 
        ]}
        onPress={handleTilePress}
        >
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/testImageBulletin.png')} style={styles.image} />
                <View style={styles.overlayContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} numberOfLines={2}>Forum Hari Penduduk Sedunia 2023</Text>
                        {/* for testing long text */}
                        {/* <Text style={styles.titleText} numberOfLines={2}>Lawatan Pengerusi LPPKN YBhg. Dato Sri Rohani binti Abdul Karim ke Pusat Keluarga LPKKN Negeri Sembilan</Text> */}
                        <Text style={styles.dateText}>16 Ogos 2023</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleShareButtonPress}>
                        <Image source={require('../../assets/shareIcon.png')} style={styles.imageIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 10,
        marginLeft: '2.5%',
        height: 200,
        width: '95%',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 10, 
        marginTop: 100,
    },
    imageContainer: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 95,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
    },
    textContainer: {
        width: '80%',
        height: 90,
        marginLeft: '3%',
    },
    titleText: {
        color: '#777777',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '3%',
    },
    dateText: {
        color: '#21CF44',
        fontSize: 15,
        marginTop: 4, 
    }, 
    buttonContainer: {
        width: 30,
        height: 30,
        marginTop: '14%',
        marginLeft: '6%',
    },   
    imageIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        
    },
});

export default CustomBulletinTile;