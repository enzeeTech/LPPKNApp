import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import BottomNavBar from '../common/BottomNavBar';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      {/* <View>
        <BottomNavBar />
      </View> */}
      {/* You can add any placeholder content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;