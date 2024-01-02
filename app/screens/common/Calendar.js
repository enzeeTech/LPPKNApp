// CustomDatePicker.js
import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Popover from 'react-native-popover-view';

const Calendar = ({ value, onDateChange, placeholder, placeholderTextColor, calendarInputStyle }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const inputFieldRef = useRef(null);

  const handleDateChange = (date) => {
    onDateChange(date.format('DD/MM/YYYY')); 
    setCalendarVisible(false);
    setPopoverVisible(false);
  };

  const arrowStyle = {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginBottom: Platform.OS === 'android' ? -5 : 0, // Adjust for Android
  };


  // Function to parse the date string and return a Date object, if the date string is empty, 
  // return today's date
  const parseDate = (dateStr) => {
    if (dateStr) {
      const parts = dateStr.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // month is 0-based in JavaScript Date
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date(); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputFieldRef}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={calendarInputStyle}
        editable={false} 
      />
      <TouchableOpacity onPress={() => setPopoverVisible(true)}>
        <Image source={require('../../assets/book.png')} style={styles.image} />
      </TouchableOpacity>
      <Popover
        isVisible={isPopoverVisible}
        from={inputFieldRef}
        onRequestClose={() => setPopoverVisible(false)}
        arrowSize={{ width: 0, height: 0 }}
        animationConfig={{ duration: 300 }}
        popoverStyle={{ backgroundColor: '#FFFFFF', borderRadius: 15, paddingTop: 15, paddingLeft:5, paddingRight:5, paddingBottom:10 }}
      >
        <CalendarPicker 
            initialDate={parseDate(value)} 
            selectedStartDate={parseDate(value)} 
            onDateChange={handleDateChange}
            selectedDayColor='#E7C3FF'
            height={450}
            width={380}
            monthTitleStyle={{color: '#9448DA', fontSize: 17, fontWeight: '800', marginLeft: -5}}
            yearTitleStyle={{color: '#9448DA', fontSize: 17, fontWeight: '800'}}
            previousComponent={<Image source={require("../../assets/leftArrow.png")} style={arrowStyle} />}
            nextComponent={<Image source={require("../../assets/rightArrow.png")} style={arrowStyle} />}
        />
      </Popover>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 8,
        borderColor: "#ADB5BD",
        width: "100%",
        height: 48,
        // padding: "1.3%",
        fontSize: 14,
        fontWeight: "400",
        color: "black", 
    },
    modalView: {
      marginTop: 22,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '100%',
      height: '100%'
  },
    image: {
        marginLeft: -25, 
        marginTop: 11, 
        width: 23, 
        height: 23, 
        resizeMode: "contain"
    },
});
