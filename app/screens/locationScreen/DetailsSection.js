import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import CustomTile from './CustomTile';

const DetailsComponent = ({ activeState }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lokasi Premis LPPKN</Text>
            {/* <Text style={styles.text}>Details for: {activeState}</Text> */}
            <ScrollView style={styles.scrollView}>
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingTop: 20,
        flex: 1,
        marginTop: 10,
        // backgroundColor: 'green',
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
    scrollView: {
        // backgroundColor: 'pink',
        // marginTop: 1,
    },
});

export default DetailsComponent;
