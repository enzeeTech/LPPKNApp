import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';

const PerancangKeluarga = ({navigation}) => {

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
        <Header onBackPress={handleBackPress} />
        <View style={styles.content}>
            <Text>Content</Text>
        </View>
        </SafeAreaView>
    );
}

export default PerancangKeluarga;