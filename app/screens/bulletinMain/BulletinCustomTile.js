import React from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, Pressable } from 'react-native';

const CustomBulletinTile = ({ onPress, image, title, date }) => {

    // const handleShareButtonPress = () => {
    //     console.log('Share Button Pressed!');
    // };

    return (
        <Pressable
        style={({ pressed }) => [
            styles.tileContainer,
            { opacity: pressed ? 0.80 : 1 } 
        ]}
        onPress={onPress}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image} />
                <View style={styles.overlayContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                    {/* <TouchableOpacity style={styles.buttonContainer} onPress={handleShareButtonPress}>
                        <Image source={require('../../assets/shareIcon.png')} style={styles.imageIcon} />
                    </TouchableOpacity> */}
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
        marginTop: 35,
        marginLeft: '5%',
        height: 200,
        width: '90%',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 4, 
    },
    imageContainer: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 86,
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