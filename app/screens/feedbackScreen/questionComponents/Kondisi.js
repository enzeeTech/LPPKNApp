import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';
import StateSelector from '../../common/StateDropDownList';

const KondisiForm = ({ onDataChange, initialData }) => {
    const handleChange = (name, value) => {
        onDataChange({ ...initialData, [name]: value }); // Propagate changes up to the stage one component
    };

    const handleStateChange = (name, value) => {
        onDataChange({ ...initialData, [name]: value });
      }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Negeri*</Text>
            <StateSelector
                selectedValue={initialData.negeri}
                onValueChange={(item) => handleStateChange('negeri', item.value)}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Lokasi/Cawangan Klinik Nur Sejahtera*</Text>
            <TextInput
                value={initialData.lokasi}
                onChangeText={(text) => handleChange('lokasi', text)}
                placeholder=" Masukkan cawangan di sini"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.containerRow}>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Tarikh Kejadian*</Text>
                <CalendarPicker
                    value={initialData.tarikh_kejadian}
                    onDateChange={(text) => handleChange('tarikh_kejadian', text)}
                    placeholder=" Pilih tarikh"
                    placeholderTextColor={"#A1A1A1"}
                />
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                <View style={styles.inputField}>
                    <TextInput
                        value={initialData.masa_kejadian}
                        onChangeText={(text) => handleChange('masa_kejadian', text)}
                        placeholder=" Pilih masa"
                        // style={styles.inputField}
                        placeholderTextColor={"#A1A1A1"}
                    />  
                    <TouchableOpacity onPress={() => {}}>
                        <Image source={require('../../../assets/time.png')} style={{marginLeft: "49%", marginTop: 10, width: 20, height: 20, resizeMode: "contain"}}/> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Nama Staf Bertugas</Text>
            <TextInput
                value={initialData.nama_staff_bertugas}
                onChangeText={(text) => handleChange('nama_staff_bertugas', text)}
                placeholder=" Masukkan nama staf"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Tajuk Aduan*</Text>
            <TextInput
                value={initialData.tajuk_aduan}
                onChangeText={(text) => handleChange('tajuk_aduan', text)}
                placeholder=" Nyatakan tajuk aduan anda"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Butiran Lanjut</Text>
            <TextInput
                value={initialData.butiran_lanjut}
                onChangeText={(text) => handleChange('butiran_lanjut', text)}
                placeholder=" Nyatakan butiran lanjut mengenai aduan anda"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        
    
    </View>
  );
};

export default KondisiForm;

