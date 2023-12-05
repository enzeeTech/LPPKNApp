import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Platform } from 'react-native';

// Custom handle component
const CustomHandle = ({ onClose }) => {
    return (
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onClose} style={styles.customButtonContainer}>
            <Image source={require('../../assets/downArrowButton.png')} 
            style={{height: 20, width: 20, resizeMode: 'contain'}} />
        </TouchableOpacity>
        </View>
    );
  };


const SarinBottomSheet = ({ isVisible, onClose }) => {
    // Create ref for bottom sheet
    const bottomSheetRef = useRef(null);
    

    // Set the snap points for the bottom sheet
    const snapPoints = useMemo(() => [Platform.OS === 'android' ? '80%' : '75%'], []);

    // Callback for when the bottom sheet changes its index
    const handleSheetChanges = useCallback((index) => {
        console.log('Bottom sheet index:', index);
    }, []);

    // Function to close the bottom sheet
    const handleClose = () => {
        if (bottomSheetRef.current) {
          bottomSheetRef.current.close();
        }
      };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1} // Show or hide the bottom sheet
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={onClose}
      handleComponent={() => <CustomHandle onClose={handleClose} />}
      backgroundStyle={styles.background}
    >
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Saring</Text>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeaderText}>Bulan</Text>
          </View>
          <View style={styles.buttonGridContainer}>
            
          </View>
        </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    padding: 16,
    backgroundColor: 'white', 
  },
  background: {
    backgroundColor: 'white', 
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, // for Android shadow
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    },
  customButtonContainer: {
    height: 20,
    width: 20,
  },
  headerContainer: {
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#9448DA',
    marginTop: '-3%',
  },
  subHeaderContainer: {
    backgroundColor: 'transparent', 
    justifyContent: 'left',
    alignItems: 'left',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#777777',
    marginTop: '7%',
  },
});

export default SarinBottomSheet;