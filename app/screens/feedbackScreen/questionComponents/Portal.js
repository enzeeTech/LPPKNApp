import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';

const PortalForm = ({ onDataChange, initialData }) => {
  const [data, setData] = useState(initialData);
  const [tarikhKejadian, setTarikhKejadian] = useState('');

  const handleChange = (name, value) => {
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onDataChange(updatedData); // Propagate changes up to the parent component
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Nama Penuh Pasangan*</Text>
            <TextInput
                value={data.nama_penuh_pasangan}
                onChangeText={(text) => handleChange('nama_penuh_pasangan', text)}
                placeholder=" Masukkan nama penuh di sini"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>No.Kad Pengenalan Pasangan*</Text>
            <TextInput
                value={data.no_kad_pengenalan_pasangan}
                onChangeText={(text) => handleChange('no_kad_pengenalan_pasangan', text)}
                placeholder=" Masukkan no.kad di sini"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.containerRow}>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Tarikh Kejadian*</Text>
                <CalendarPicker
                    value={tarikhKejadian}
                    onDateChange={setTarikhKejadian}
                    placeholder=" Pilih tarikh"
                    placeholderTextColor={"#A1A1A1"}
                />
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                <View style={styles.inputField}>
                    <TextInput
                        value={data.masa_kejadian}
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
            <Text style={styles.titleStyle}>Tajuk Aduan*</Text>
            <TextInput
                value={data.tajuk_aduan}
                onChangeText={(text) => handleChange('tajuk_aduan', text)}
                placeholder=" Nyatakan tajuk aduan anda"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Butiran Lanjut</Text>
            <TextInput
                value={data.butiran_lanjut}
                onChangeText={(text) => handleChange('butiran_lanjut', text)}
                placeholder=" Nyatakan butiran lanjut mengenai aduan anda"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        
    
    </View>
  );
};

export default PortalForm;

