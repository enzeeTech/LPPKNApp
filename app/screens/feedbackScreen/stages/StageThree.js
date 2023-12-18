import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';

function StageThree({ onSubmit, formData }) {

  const openAppStore = () => {
    // Replace 'your-app-id' with the actual app ID or package name from the app store.
    const appStoreUrl = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997'; // For iOS
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en&gl=US&pli=1'; // For Android

    Linking.openURL(Platform.OS === 'ios' ? appStoreUrl : playStoreUrl)
      .catch((err) => console.error('An error occurred: ', err));
  };
  return (
    <View style={styles.container}>
      <Text>This is the Stage 3 Screen</Text>
      {/* You can add any placeholder content here */}
      <TouchableOpacity
        onPress={openAppStore}
        style={{ marginTop: 10, height: 40, width: 150, borderRadius: 15, backgroundColor: '#9448DA', alignItems: 'center', justifyContent: 'center'   }}
      >
          <Text style={{color: 'white'}}>Download App</Text>
      </TouchableOpacity>
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

export default StageThree;