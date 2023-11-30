import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Header from './LocationScreenHeader';
import StateTable from './StateTable';

function LocationScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Header />
        </View>
        <View style={styles.stateContainer}>
            <Text style={styles.bodyText}>Pilih Negeri</Text>
            <StateTable />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#9448DA',
        backgroundColor: 'transparent',

    },
    headerContainer: {
        backgroundColor: 'transparent', 
        // zIndex: 5,
    },
    stateContainer: {
        flex: 1, 
        backgroundColor: '#FFFF',
        // zIndex: 1,
    },
    bodyText: {
        color: '#777777',
        // fontWeight: '700',
        paddingLeft: '4%',
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        paddingTop: '5%',
        // flex: 1, 
        // textAlign: 'center', 
    },
});

export default LocationScreen;