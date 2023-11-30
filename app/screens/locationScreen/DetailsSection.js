import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsComponent = ({ activeState }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
            <Text style={styles.text}>Details for: {activeState}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
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
    }
});

export default DetailsComponent;
