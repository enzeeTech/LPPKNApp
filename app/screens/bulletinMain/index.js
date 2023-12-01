import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from './BulletinMainHeader';

function BulletinMain() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
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
});

export default BulletinMain;