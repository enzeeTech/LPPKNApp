import React from 'react';
import { View, Text, Image, StyleSheet,Pressable, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 500;
const SCALE_FACTOR = 1.75;

const CustomSorotanTile = ({ onPress, image, title, date }) => {


    return (
        <Pressable
        style={({ pressed }) => [
            styles.tileContainer,
            { opacity: pressed ? 1 : 1 } 
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
                </View>
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        // overflow: 'hidden',
        elevation: 5,
        // margin: 10,
        borderRadius: 12,
        width: isLargeScreen ? Math.round(170 * SCALE_FACTOR) : 170,
        height: isLargeScreen ? Math.round(270 * SCALE_FACTOR) : 270,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 8, 
    },
    imageContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: isLargeScreen ? Math.round(270 * SCALE_FACTOR) : 270,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: isLargeScreen ? Math.round(180 * SCALE_FACTOR) : 180,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderBottomRightRadius: 10,
        // borderBottomLeftRadius: 10,
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: isLargeScreen ? Math.round(90 * SCALE_FACTOR) : 90,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: isLargeScreen ? 14 : 10,
    },
    textContainer: {
        width: '100%',
        height: isLargeScreen ? Math.round(90 * SCALE_FACTOR) : 90,
        marginTop: isLargeScreen ? 20 : 15,
        marginLeft: '3%',
    },
    titleText: {
        color: '#777777',
        fontSize: isLargeScreen ? Math.round(15 * SCALE_FACTOR) : 15,
        fontWeight: 'bold',
        paddingTop: '3%',
    },
    dateText: {
        color: '#21CF44',
        fontSize: isLargeScreen ? Math.round(12 * SCALE_FACTOR) : 12,
        marginTop: 4, 
    }, 
    buttonContainer: {
        width: 30,
        height: 30,
    },   
    imageIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginTop: 25,
    },
});

export default CustomSorotanTile;
