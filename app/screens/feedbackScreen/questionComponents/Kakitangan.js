import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const KakitanganForm = ({ onDataChange, initialData }) => {
  const [data, setData] = useState(initialData);

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
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Lokasi/Cawangan Klinik Nur Sejahtera*</Text>
            <TextInput
                value={data.lokasi}
                onChangeText={(text) => handleChange('lokasi', text)}
                placeholder=" Masukkan cawangan di sini"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.containerRow}>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Tarikh Kejadian*</Text>
                <TextInput
                    value={data.tarikh_kejadian}
                    onChangeText={(text) => handleChange('tarikh_kejadian', text)}
                    placeholder=" Pilih tarikh"
                    style={styles.inputField}
                    placeholderTextColor={"#A1A1A1"}
                />  
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                <TextInput
                    value={data.masa_kejadian}
                    onChangeText={(text) => handleChange('masa_kejadian', text)}
                    placeholder=" Pilih masa"
                    style={styles.inputField}
                    placeholderTextColor={"#A1A1A1"}
                />  
            </View>
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

export default KakitanganForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputContainer: {
        width: "100%",
        marginTop: "3%",
        marginBottom: "3%",
    },
    smallContainer: {
        width: "40%",
        marginTop: "3%",
        marginBottom: "3%",
    },
    titleStyle: {
        color: "#5C2D86",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
    },
    inputField: {
        flexDirection: "row",
        borderRadius: 8,
        borderColor: "#ADB5BD",
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#A1A1A1", // Border color when there's text input
        padding: "1.3%",
        fontSize: 14,
        fontWeight: "400",
        color: "black", // Text color when there's text input
    },
    
    
});