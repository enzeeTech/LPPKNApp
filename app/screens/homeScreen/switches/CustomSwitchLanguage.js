import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomSwitchLanguage = ({ isEnabled, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={isEnabled ? styles.switchBackgroundActive : styles.switchBackgroundInactive}>
        <View style={[styles.textContainer, isEnabled ? styles.textContainerRight : styles.textContainerLeft]}>
          <Text style={isEnabled ? styles.textOn: styles.textOff}>{isEnabled ? 'ENG' : 'BM'}</Text>
        </View>
        <View style={[styles.toggle, isEnabled ? styles.toggleRight : styles.toggleLeft]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  switchBackgroundInactive: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#5D2E86',
    justifyContent: 'center',
    position: 'relative',
  },
  switchBackgroundActive: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor:'#FF9432', 
    justifyContent: 'center',
    position: 'relative',
  },
  toggle: {
    width: 24,
    height: 24,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
  },
  toggleRight: {
    right: 2,
  },
  toggleLeft: {
    left: 2,
  },
  textContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainerRight: {
    alignItems: 'flex-end',
    paddingRight: 35, // Adjust the padding to move the text away from the toggle
  },
  textContainerLeft: {
    alignItems: 'flex-start',
    paddingLeft: 35, // Adjust the padding to move the text away from the toggle
  },
  textOff: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
  textOn: {
    color: '#5C2D86',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default CustomSwitchLanguage;
