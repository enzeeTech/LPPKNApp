import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';
import TimePicker from '../../common/TimePicker';

const GeneralForm = ({ onDataChange, initialData }) => {
  const [data, setData] = useState(initialData);
  const [tarikhKejadian, setTarikhKejadian] = useState('');
  const [masaKejadian, setMasaKejadian] = useState('');

  const handleChange = (name, value) => {
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onDataChange(updatedData); // Propagate changes up to the parent component
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Negeri*</Text>
            <TextInput
                value={data.negeri}
                onChangeText={(text) => handleChange('negeri', text)}
                placeholder=" Masukkan negeri di sini"
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
                <TimePicker
                    value={masaKejadian}
                    onDateChange={setMasaKejadian}
                    placeholder=" Pilih masa"
                    placeholderTextColor={"#A1A1A1"}
                />
            </View>
            {/* <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                <View style={styles.inputField}>
                    <TextInput
                        value={data.masa_kejadian}
                        onChangeText={(text) => handleChange('masa_kejadian', text)}
                        placeholder=" Pilih masa"
                        placeholderTextColor={"#A1A1A1"}
                    />  
                    <TouchableOpacity onPress={() => {}}>
                        <Image source={require('../../../assets/time.png')} style={{marginLeft: "49%", marginTop: 10, width: 20, height: 20, resizeMode: "contain"}}/> 
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Nama Staf Bertugas</Text>
            <TextInput
                value={data.nama_staf_bertugas}
                onChangeText={(text) => handleChange('nama_staf_bertugas', text)}
                placeholder=" Masukkan nama staf"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
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

export default GeneralForm;
