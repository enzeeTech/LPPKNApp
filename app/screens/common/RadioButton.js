import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ label, value, onPress, selected }) => {
    return (
        <View style={styles.radioButtonContainer}>
            <TouchableOpacity style={styles.radioButtonTouchable} onPress={() => onPress(value)}>
            <View style={[
                styles.radioButton,
                { borderColor: selected ? '#9E9E9E' : '#9E9E9E' },
            ]}>
                {selected && <View style={styles.radioButtonSelected} />}
            </View>
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    )

};

export default RadioButton;

const styles = StyleSheet.create({
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 30,
    },
    radioButton: {
      height: 21,
      width: 21,
      borderRadius: 12,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    radioButtonTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: '#56E64E',
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: "#777777",
    },
  });

