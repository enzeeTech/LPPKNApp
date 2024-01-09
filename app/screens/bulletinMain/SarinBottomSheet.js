import React, { useCallback, useMemo, useRef, useState } from 'react';
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
  
  // Functions to create buttons grid
  const numRows = 4;
  const numColumns = 3;
  const nameList = [
      'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
      'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
    ];

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleItemPress = (index) => {
      // Toggle the active state or set it to null if it's already active thus deactivating it
      setActiveButtonIndex(activeButtonIndex === index ? null : index);
  };
  
  const buttons = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            const buttonIndex = j + i * numColumns;
            if (buttonIndex < nameList.length) {
                const isPressed = buttonIndex === activeButtonIndex;
                row.push(
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isPressed ? styles.buttonActive : styles.buttonInactive,
                            {marginLeft: 4, marginTop: 4}
                        ]}
                        key={buttonIndex}
                        onPress={() => handleItemPress(buttonIndex)}
                    >
                        <Text style={{
                            color: isPressed ? '#FFFFFF' : '#777777',
                            fontWeight: isPressed ? 'bold' : '600',
                            fontSize: Platform.OS === 'ios' ? 14 : 16,
                            textAlign: 'center',
                             }}>
                            {nameList[buttonIndex]}
                        </Text>
                    </TouchableOpacity>
                );
            }
        }
        buttons.push(
            <View style={styles.buttonRow} key={i}>
                {row}
            </View>
        );
    }

    // For testing purposes
    const activeStateText = activeButtonIndex !== null ? nameList[activeButtonIndex] : "None";

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
            {buttons}
            <View style={styles.buttonGridView}>
                {activeButtonIndex !== null && (
                    console.log('activeButton', activeStateText)
                )}                                        
            </View>
          </View>
          <TouchableOpacity style={{
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#9448DA',
            borderRadius: 10,
            marginLeft: '10%',
            marginTop: 130,
            height: '8%',
            width: '80%'}}
            onPress={() => console.log('Cari Button Pressed!')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Cari</Text>
          </TouchableOpacity>
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
    paddingLeft: '2%',
  },
  buttonGridContainer: {
    backgroundColor: 'transparent', 
    padding: '1%', 
    paddingTop: '1%',
  },
  buttonRow: {
      flexDirection: 'row',
  },
  button: {
      flex: 1,
      backgroundColor: '#EAFFEE', 
      borderRadius: 10, 
      borderColor: '#21CF44',
      borderWidth: 1.2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 49,
      // width: 114,
      width: Platform.OS === 'ios' ? 114 : 80,
  },
  buttonText: {
      fontSize: 14,
      color: '#777777',
      textAlign: 'center',
  },
  activeStateText: {
      color: 'black',
      fontSize: 16,
      marginTop: 20,
      textAlign: 'center',
  },
  buttonActive: {
      backgroundColor: '#21CF44', // Active button color
  },
  buttonInactive: {
      backgroundColor: '#EAFFEE', // Inactive button color
  },
  buttonGridView: {
      flex: 1,
      marginTop: 20,
  },
});

export default SarinBottomSheet;