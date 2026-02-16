// DropdownMenu.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isLargeScreen = windowWidth >= 500;

const DropdownMenu = ({ isVisible, onItemSelect, onClose }) => {
  if (!isVisible) return null;

  return (
    <TouchableOpacity 
    // This will cover the entire screen. It is invisible so that any clicks outside the dropdown will be registered 
      style={styles.overlay} 
      activeOpacity={1} 
      onPressOut={onClose} // This will close the dropdown when the overlay is pressed
    >
      <View style={styles.dropdownMenu} onStartShouldSetResponder={() => true}>
        <TouchableOpacity onPress={() => onItemSelect('Tentang Kami')}>
          <Text style={styles.dropdownItem}>Tentang Kami</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onItemSelect('Hubungi Kami')}>
          <Text style={styles.dropdownItem}>Hubungi Kami</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight * 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow', // TESTING PURPOSES
  },
  dropdownMenu: {
    marginTop: isLargeScreen ? 260 : 160,
    marginLeft: 6,
    backgroundColor: '#9448DA',
    borderRadius: 10,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: isLargeScreen ? 27 : 18,
    fontWeight: '700',
  },

});

export default DropdownMenu;
