import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTile from './CustomTile';
import { 
    getLokasiDetailsWPKL, 
    getLokasiDetailsSelangor,
    getLokasiDetailsKedah,
    getLokasiDetailsPerak,
    getLokasiDetailsPerlis,
    getLokasiDetailsPulauPinang,
} from '../../services/LokasiService';


const DetailsComponent = ({ navigation, activeState }) => {
    const [responseData, setResponseData] = useState([]);

    const handlePress = (item) => {
        navigation.navigate('LocationInfo', { item: item });
    };

    if (activeState == "WP                Kuala Lumpur"){
        activeState = "WP Kuala Lumpur";
    }

    // Call the api to get the details of the selected state
    useEffect(() => {
        if (activeState === "WP Kuala Lumpur") {
            getLokasiDetailsWPKL().then(setResponseData);
        }
        else if (activeState === "Selangor") {
            getLokasiDetailsSelangor().then(setResponseData);
        }
        else if (activeState === "Kedah") {
            getLokasiDetailsKedah().then(setResponseData);
        }
        else if (activeState === "Perak") {
            getLokasiDetailsPerak().then(setResponseData);
        }
        else if (activeState === "Perlis") {
            getLokasiDetailsPerlis().then(setResponseData);
        }
        else if (activeState === "Pulau Pinang") {
            getLokasiDetailsPulauPinang().then(setResponseData);
        }
        

    }, [activeState]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lokasi Perkhidmatan LPPKN</Text>
            {/* <Text style={styles.text}>Details for: {activeState}</Text> */}
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
