import { useState } from "react";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const StateDropDownList = ({ selectedValue, onValueChange}) => {

    // Dropdown options for Negeri
  const negeriOptions = [
    { label: 'Perlis', value: 'perlis' },
    { label: 'Kedah', value: 'kedah' },
    { label: 'Pulau Pinang', value: 'pulau_pinang' },
    { label: 'Perak', value: 'perak' },
    { label: 'Selangor', value: 'selangor' },   
    { label: 'Wilaya Persekutan Kuala Lumpur', value: 'wilaya_persekutan_kuala_lumpur' },
    { label: 'Negeri Sembilan', value: 'negeri_sembilan' },
    { label: 'Melaka', value: 'melaka' },
    { label: 'Johor', value: 'johor' },
    { label: 'Pahang', value: 'pahang' },
    { label: 'Terengganu', value: 'terengganu' },
    { label: 'Kelantan', value: 'kelantan' },
    { label: 'Sabah', value: 'sabah' },
    { label: 'Sarawak', value: 'sarawak'},
    { label: 'Wilayah Persekutuan Labuan', value: 'wilayah_persekutuan_labuan'}
    ];
  

  return (
      <Dropdown
        style={style.dropdown}
        containerStyle={style.dropdownContainer}
        selectedTextStyle={style.selectedText}
        activeColor="#EED4FF"
        data={negeriOptions}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={onValueChange}
        placeholder=" Pilih negeri"
        placeholderStyle={style.placeholderStyle}
        renderItem={(item) => (
          <View style={style.item}>
            <Text style={style.itemText}>{item.label}</Text>
          </View>
        )}
      />
  );
};

export default StateDropDownList;

const style = StyleSheet.create({
    dropdown: {
        // Basic style for the dropdown
        height: 50,
        borderColor: '#ADB5BD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      dropdownContainer: {
        backgroundColor: '#F8F6FF',
        borderRadius: 8, 
      },
      selectedText: {
        // Style for the selected item text
        fontSize: 12,
        fontWeight: '600',
        color: '#6D6D6D',
      },
      placeholderStyle: {
        // Style for the placeholder text
        color: '#A1A1A1',
        fontSize: 14,
      },
      item: {
        // Style for each dropdown item
        padding: 10,
        borderBottomColor: 'transparent',
        borderBottomWidth: 1,
      },
      itemText: {
        // Style for the text of each item
        fontSize: 12,
        fontWeight: '600',
        color: '#6D6D6D',
      },
});