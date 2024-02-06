import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import CustomTile from './CustomTile';
import GlobalAPI from '../../services/GlobalApi';


const DetailsComponent = ({ navigation, activeState }) => {
    const [responseData, setResponseData] = useState([]);

    const handlePress = (item) => {
        console.log('Tile Pressed!');
        navigation.navigate('LocationInfo', { item: item });
    };

    if (activeState == "WP             Kuala Lumpur"){
        activeState = "WP Kuala Lumpur";
    }

    // Helper function for formatting the data
    const formatData = (data) => {
        return data.map((item) => ({
            id: item.id,
            title: item.attributes.Title,
            location: item.attributes.Location,
            phoneNo: item.attributes.PhoneNo,
            faxNo: item.attributes.FaxNo,
            openTime: item.attributes.OpenTime,
            closeTime: item.attributes.CloseTime,
            icon: item.attributes.Icon.data.attributes.url,
            background: item.attributes.BackgroundImage.data.attributes.url,
        }));
    };

    // API FUNCTION TO GET THE DETAILS OF THE SELECTED STATE     
    // WP Kuala Lumpur
    const getLokasiDetailsWPKL = () => {
        GlobalAPI.getLokasiWPKL()
            .then((response) => {
                const formattedData = formatData(response.data.data);
                setResponseData(formattedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Selangor
    const getLokasiDetailsSelangor = () => {
        GlobalAPI.getLokasiSelangor()
            .then((response) => {
                const formattedData = formatData(response.data.data);
                setResponseData(formattedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    // Call the api to get the details of the selected state
    useEffect(() => {
        if (activeState === "WP Kuala Lumpur") {
            getLokasiDetailsWPKL();
        }
        else if (activeState === "Selangor") {
            getLokasiDetailsSelangor();
        }

    }, [activeState]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
            <Text style={styles.text}>Details for: {activeState}</Text>
            {responseData.map((item) => (
                <CustomTile
                    key={item.id}
                    onPress={() => handlePress(item)}
                    title={item.title}
                    backgroundImage={item.background}
                    openTime={item.openTime}
                    closeTime={item.closeTime}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10,
        color: '#9448DA'
    },
    text: {
        fontSize: 16,
        color: '#333'
    },
});

export default DetailsComponent;
