import React, { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Platform } from 'react-native';
import { Alert } from 'react-native';

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


const SarinBottomSheet = ({ isVisible, onClose, onConfirmSelection }) => {

  // Create ref for bottom sheet
  const bottomSheetRef = useRef(null);
  

  // Set the snap points for the bottom sheet
  const snapPoints = useMemo(() => [Platform.OS === 'android' ? '80%' : '75%'], []);

  // Function to close the bottom sheet
  const handleClose = () => {
      if (bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
  };
  
  // Declarations to create year buttons grid
  const numYearRows = 1;
  const numYearColumns = 3;
  const yearList = ['2024', '2023', '2022'];

  const [activeYearButtonIndex, setActiveYearButtonIndex] = useState(null);

  // Declarations to create month buttons grid
  const numRows = 4;
  const numColumns = 3;
  const monthList = [
      'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
      'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
    ];

  const [activeMonthButtonIndex, setActiveButtonIndex] = useState(null);

  const handleYearPress = (index) => {
      // Toggle the active state or set it to null if it's already active thus deactivating it
      setActiveYearButtonIndex(activeYearButtonIndex === index ? null : index);
  };

  const handleMonthPress = (index) => {
      // Toggle the active state or set it to null if it's already active thus deactivating it
      setActiveButtonIndex(activeMonthButtonIndex === index ? null : index);
  };
  
  const yearButtons = [];
  const monthButtons = [];

  // Create year buttons
  for (let i = 0; i < numYearRows; i++) {
      const row = [];
      for (let j = 0; j < numYearColumns; j++) {
          const buttonIndex = j + i * numYearColumns;
          if (buttonIndex < yearList.length) {
              const isPressed = buttonIndex === activeYearButtonIndex;
              row.push(
                  <TouchableOpacity
                      style={[
                          styles.button,
                          isPressed ? styles.buttonActive : styles.buttonInactive,
                          {marginLeft: 4, marginTop: 4}
                      ]}
                      key={buttonIndex}
                      onPress={() => handleYearPress(buttonIndex)}
                  >
                      <Text style={{
                          color: isPressed ? '#FFFFFF' : '#777777',
                          fontWeight: isPressed ? 'bold' : '600',
                          fontSize: Platform.OS === 'ios' ? 14 : 16,
                          textAlign: 'center',
                           }}>
                          {yearList[buttonIndex]}
                      </Text>
                  </TouchableOpacity>
              );
          }
      }
      yearButtons.push(
          <View style={styles.buttonRow} key={i}>
              {row}
          </View>
      );
  }

  // Create month buttons
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            const buttonIndex = j + i * numColumns;
            if (buttonIndex < monthList.length) {
                const isPressed = buttonIndex === activeMonthButtonIndex;
                row.push(
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isPressed ? styles.buttonActive : styles.buttonInactive,
                            {marginLeft: 4, marginTop: 4}
                        ]}
                        key={buttonIndex}
                        onPress={() => handleMonthPress(buttonIndex)}
                    >
                        <Text style={{
                            color: isPressed ? '#FFFFFF' : '#777777',
                            fontWeight: isPressed ? 'bold' : '600',
                            fontSize: Platform.OS === 'ios' ? 14 : 16,
                            textAlign: 'center',
                             }}>
                            {monthList[buttonIndex]}
                        </Text>
                    </TouchableOpacity>
                );
            }
        }
        monthButtons.push(
            <View style={styles.buttonRow} key={i}>
                {row}
            </View>
        );
    }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1} // Show or hide the bottom sheet
      snapPoints={snapPoints}
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
            <Text style={styles.subHeaderText}>Tahun</Text>
          </View>
          <View style={styles.buttonGridContainer}>
            {yearButtons}
            <View style={styles.buttonGridView}></View>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeaderText}>Bulan</Text>
          </View>
          <View style={styles.buttonGridContainer}>
            {monthButtons}
            <View style={styles.buttonGridView}></View>
          </View>
          <TouchableOpacity style={{
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#9448DA',
            borderRadius: 10,
            marginLeft: '10%',
            marginTop: '5%',
            height: '8%',
            width: '80%'}}
            onPress={() => {
              let selectedYear = activeYearButtonIndex !== null ? yearList[activeYearButtonIndex] : null;
              let selectedMonth = activeMonthButtonIndex !== null ? monthList[activeMonthButtonIndex] : null;

              // Check if a month is selected but not a year
              if (selectedMonth && !selectedYear) {
                // Display an alert if a month is selected without a year
                Alert.alert("Selection Required", "Please select a year to filter by month.");
              } else {
                  // Proceed with the selection confirmation
                  onConfirmSelection(selectedYear, selectedMonth);
                  // Close the bottom sheet
                  handleClose();
              }
            }}
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
    marginTop: '5%',
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