// app\screens\common\ServiceIcon.js

import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Deteksi layar lebar
const isTablet = screenWidth > 600;

/**
 * PERBAIKAN:
 * Agar bisa di-swipe di layar 32", kita harus memastikan total lebar baris > lebar layar.
 * Jika layar sangat lebar (isTablet), kita beri lebar tetap yang cukup besar.
 */
const COLUMN_WIDTH = isTablet ? 160 : screenWidth / 4.2; 
const CIRCLE_SIZE = isTablet ? 100 : screenWidth / 6; 
const ICON_SIZE = CIRCLE_SIZE * 0.6;

const ServiceIcon = ({ iconSource, label, onPress }) => {
    return (
        <Pressable 
            style={({pressed}) => [styles.iconWrapper, { opacity: pressed ? 0.7 : 1 }]}
            onPress={onPress}
        >
            <View style={styles.iconCircle}>
                <Image source={iconSource} style={styles.icon} />
            </View>
            <Text 
                allowFontScaling={false} 
                style={styles.iconLabel} 
                numberOfLines={2} 
                ellipsizeMode="tail"
            >
                {label}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        width: COLUMN_WIDTH, 
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: isTablet ? 10 : 5, // Jarak antar ikon diperlebar di tablet agar memicu scroll
    },
    iconCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2, 
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#9648DC",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.30,
        shadowRadius: 8, 
        elevation: 5,
    },
    icon: {
        width: ICON_SIZE * 1.3,
        height: ICON_SIZE,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    iconLabel: {
        marginTop: 7, 
        fontSize: isTablet ? 13 : 10, 
        color: '#777777', 
        textAlign: 'center', 
        fontWeight: '700', 
        width: '90%',
    },
});

export default ServiceIcon;