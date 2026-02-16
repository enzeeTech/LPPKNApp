import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const isTablet = screenWidth > 600;

const CustomBulletinTile = ({ onPress, image, title, date }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.tileContainer,
                { opacity: pressed ? 0.9 : 1 } 
            ]}
            onPress={onPress}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image} />
            </View>

            <View style={styles.overlayContainer}>
                <View style={styles.textContainer}>
                    <Text 
                        style={styles.titleText} 
                        numberOfLines={isTablet ? 3 : 2}
                        allowFontScaling={false}
                    >
                        {title}
                    </Text>
                    <Text style={styles.dateText} allowFontScaling={false}>
                        {date}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 25,
        alignSelf: 'center',
        width: '92%',
        minHeight: 280, 
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4, 
        overflow: 'hidden', 
    },
    imageContainer: {
        width: '100%',
        height: isTablet ? 250 : 220, 
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayContainer: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 15, 
        paddingHorizontal: '4%',
    },
    textContainer: {
        width: '100%',
        paddingTop: 10,
    },
    titleText: {
        color: '#444444',
        fontSize: isTablet ? 18 : 16,
        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: 8,
    },
    dateText: {
        color: '#21CF44',
        fontSize: 14,
        fontWeight: '600',
    }, 
});

export default CustomBulletinTile;
