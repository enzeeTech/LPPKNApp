import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomTile from '../../locationScreen/CustomTile';

const LocationDetailsList = ({navigation, data, title, loading}) => {
    // let count = 0;
    // console.log(data);

    const handlePress = (item) => {
        const parentStack = navigation.getState().routes[0].name;

        if (parentStack === 'ServiceMain') {
            navigation.navigate('LocationInfoScreen', {item});
        } else if (parentStack === 'Home') {
            navigation.navigate('LocationInfoScreen', {item});
        }
    };

    // const counter = () => {
    //     count++;
    //     return count;
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>{title}</Text>
            {!loading && data.length === 0 ? (
                <View style={styles.centerContent}>
                    <Image
                        source={require('../../../assets/locationNotFound.png')} 
                        style={styles.image}
                    />
                    <Text style={styles.centerText}>Harap maaf. Tiada {title} berdekatan lokasi anda.</Text>
                </View>
            ) : (
                data.map((item, index) => (
                    <CustomTile
                        key={index}
                        onPress={() => handlePress(item)}
                        title={item.title}
                        backgroundImage={item.background}
                        operationTime={item.operationTime}
                    />
                ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    bodyText: {
        color: '#9448DA',
        paddingLeft: '4%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: '7%',
        paddingBottom: '2%',
    },
    centerContent: {
        marginTop: '30%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    centerText: {
        color: '#6D6D6D',
        fontSize: 12,
        fontWeight: 'regular',
        textAlign: 'center',
        paddingTop: 40,
        width: '80%',
    },
});

export default LocationDetailsList;
