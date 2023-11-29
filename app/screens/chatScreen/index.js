import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Chat Screen</Text>
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

export default ChatScreen;