import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomTile from '../../locationScreen/CustomTile';
import GlobalApi from '../../../services/GlobalApi';


const LocationDetailsList = ({navigation, query, location}) => {
    const [responseData, setResponseData] = useState([]);

    // Helper function for formatting the data
    const formatData = (data) => {
        if (!data) return [];
        return data.map((item) => ({
            id: item.id,
            title: item.Title || '-',
            location: item.Location || '-',
            phoneNo: item.PhoneNo || '-',
            faxNo: item.FaxNo || '-',
            operationTime: item.OperationTime || '-',
            icon: item.Icon?.url,
            background: item.BackgroundImage?.url,
        }));
    };

    // Call the api to get the location collectiton
    const getLocationCollection = () => {
        GlobalApi.searchCollection(encodeURIComponent(query), location)
            .then((response) => setResponseData(formatData(response.data)))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getLocationCollection();
    }, []);

    const handlePress = (item) => {
        const parentStack = navigation.getState().routes[0].name;

        if (parentStack === 'ServiceMain') {
            navigation.navigate('LocationInfoScreen', {item});
        } else if (parentStack === 'Home') {
            navigation.navigate('LocationInfoScreen', {item});
        }
    };

    let count = 0;

    const counter = () => {
        count++;
        return count;
    }

    let title = '';

    if (query === 'Pejabat') {
        title = 'Pejabat LPPKN Negeri';
    } else if (query === 'Klinik Nur Sejahtera') {
        title = 'Klinik Nur Sejahtera'; 
    } else if (query === 'KafeTEEN') {
        title = 'KafeTEEN';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>{title}</Text>
            {responseData.length === 0 ? (
                <View style={styles.centerContent}>
                    <Image
                        source={require('../../../assets/locationNotFound.png')} // Update the path as needed
                        style={styles.image}
                    />
                    <Text style={styles.centerText}>Harap maaf. Tiada {title} berdekatan lokasi anda.</Text>
                </View>
            ) : (
                responseData.map((item, index) => (
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
