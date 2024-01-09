import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomSwitchNotif = ({ isEnabled, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={isEnabled ? styles.switchBackgroundActive : styles.switchBackgroundInactive}>
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
  switchBackgroundActive: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#21CF44',
    justifyContent: 'center',
    position: 'relative',
  },
  switchBackgroundInactive: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor:'#D6BDF4',
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
});

export default CustomSwitchNotif;
