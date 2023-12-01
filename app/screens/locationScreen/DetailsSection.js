import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import CustomTile from './CustomTile';

const DetailsComponent = ({ activeState }) => {

    const handlePress = () => {
        console.log('Tile Pressed!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
            {/* <Text style={styles.text}>Details for: {activeState}</Text> */}
            <CustomTile onPress={handlePress} />
            <CustomTile />
            <CustomTile />
            <CustomTile />
            <CustomTile />
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
