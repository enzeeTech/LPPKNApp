import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';

function StageThree({formData }) {

  printFormData = () => {
    // Print form data to console in a pretty mannar
    for (var key in formData) {
      console.log(key + ": " + formData[key]);
    }

  }

  return (
    <View style={styles.container}>
      <Text>This is the Stage 3 Screen</Text>
      {/* You can add any placeholder content here */}
      <TouchableOpacity onPress={printFormData} style={{marginTop: 10, height: 40, width: 150, borderRadius: 15, backgroundColor: '#9448DA', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', alignContent: 'center'}}>Print form data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StageThree;