// Custom TimePicker component
import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Modal, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = ({ onTimeChange, placeholder, placeholderTextColor }) => {
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [time, setTime] = useState(new Date());

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
        if (Platform.OS !== 'ios') {
            setPickerVisible(false); // For Android, hide picker after selection
        }
        onTimeChange(currentTime); // Propagate changes up to the parent component
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    };

    const displayTime = formatTime(time);

    return (
        <View style={styles.container}>
            <TextInput
                value={displayTime}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={{color: "black", marginRight: '-4%', marginLeft: '5%', fontSize: 13}}
                editable={false} 
            />
             <TouchableOpacity onPress={() => setPickerVisible(true)}>
                <Image source={require('../../assets/time.png')} style={styles.image} />
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isPickerVisible}
                    onRequestClose={() => setPickerVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DateTimePicker
                                value={time}
                                mode="time"
                                is24Hour={false}
                                display="spinner"
                                textColor='black'
                                onChange={handleTimeChange}
                            />
                            <Button title="Confirm" onPress={() => setPickerVisible(false)} />
                        </View>
                    </View>
                </Modal>
            )}
            {Platform.OS === 'android' && isPickerVisible && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    is24Hour={false}
                    display="spinner"
                    onChange={handleTimeChange}
                />
            )}
        </View>
    );
};

export default TimePicker;

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: "80%",
        height: "40%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});