import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
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