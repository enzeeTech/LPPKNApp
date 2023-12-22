// CustomDatePicker.js
import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Popover from 'react-native-popover-view';

const Calendar = ({ value, onDateChange, placeholder, placeholderTextColor }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const inputFieldRef = useRef(null);

  const handleDateChange = (date) => {
    onDateChange(date.format('DD/MM/YYYY')); 
    setCalendarVisible(false);
    setPopoverVisible(false);
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
        style={{color: "black", marginRight: '-4%', marginLeft: '5%', fontSize: 13}}
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
            height={400}
            width={380}
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
        borderWidth: 1,
        borderColor: "#A1A1A1", 
        padding: "1.3%",
        fontSize: 14,
        fontWeight: "400",
        color: "black", 
    },
    image: {
        marginLeft: "45%", 
        marginTop: 9, 
        width: 23, 
        height: 23, 
        resizeMode: "contain"
    },
});
