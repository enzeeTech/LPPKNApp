import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from './HomeScreenHeader';

const HomeScreen = () => {
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
      backgroundColor: '#FFFFFF',
      backgroundColor: 'transparent',

  },
  headerContainer: {
      backgroundColor: 'transparent', 
      zIndex: 5,
  },
});

export default HomeScreen;