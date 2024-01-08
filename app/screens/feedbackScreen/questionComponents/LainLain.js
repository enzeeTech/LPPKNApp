import React, { useState, useImperativeHandle } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';

const LainLainForm = React.forwardRef(({ onDataChange, initialData }, ref) => {
    useImperativeHandle(ref, () => ({
        validateFields
    }));

    const validateFieldDynamic = (name, value) => {
        let newErrors = {...errors};

        switch (name) {
            case 'negeri':
                if (!value.trim()) {
                    newErrors[name] = "Negeri diperlukan";
                } else {
                    delete newErrors[name];
                }
                break;

            case 'lokasi':
                if (!value.trim()) {
                    newErrors[name] = "Lokasi diperlukan";
                } else {
                    delete newErrors[name];
                }
                break;

            case 'tarikh_kejadian':
                if (!value.trim()) {
                    newErrors[name] = "Tarikh diperlukan";
                } else {
                    delete newErrors[name];
                }
                break;

            case 'tajuk_aduan':
                if (!value.trim()) {
                    newErrors[name] = "Tajuk diperlukan";
                } else {
                    delete newErrors[name];
                }
                break;
        }

        setErrors(newErrors);
    };

    const [errors, setErrors] = useState({}); 

    const handleChange = (name, value) => {
        onDataChange({ ...initialData, [name]: value });
        validateFieldDynamic(name, value);
    };

    // Styles for the input fields
    const inputStyle = (fieldName) => ({
        ...styles.inputField,
        borderColor: errors[fieldName] ? 'red' : '#A1A1A1',
    });    

    const calendarInputStyle = (fieldName) => ({
        ...styles.calendarInputStyle,
        borderColor: errors[fieldName] ? 'red' : '#A1A1A1',
    });

    const dropdownStyle = (fieldName) => ({
        ...styles.dropdown,
        borderColor: errors[fieldName] ? 'red' : '#A1A1A1',
    });
    
    const validateFields = () => {
        let isValid = true;
        let newErrors = {};

        // Validate tarikh kejadian
        if (!initialData.tarikh_kejadian || !initialData.tarikh_kejadian.trim()) {
            newErrors.tarikh_kejadian = "Tarikh diperlukan";
            isValid = false;
        }

        // // Validate masa kejadian
        // if (!initialData.masa_kejadian || !initialData.masa_kejadian.trim()) {
        //     newErrors.masa_kejadian = "Masa diperlukan";
        //     isValid = false;
        // }

        // Validate tajuk aduan
        if (!initialData.tajuk_aduan || !initialData.tajuk_aduan.trim()) {
            newErrors.tajuk_aduan = "Tajuk diperlukan";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


  return (
    <View style={styles.container}>
        <View style={styles.containerRow}>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Tarikh Kejadian*</Text>
                <CalendarPicker
                    value={initialData.tarikh_kejadian}
                    onDateChange={(text) => handleChange('tarikh_kejadian', text)}
                    placeholder=" Pilih tarikh"
                    placeholderTextColor={"#A1A1A1"}
                    calendarInputStyle={calendarInputStyle('tarikh_kejadian')}
                />
                {errors.tajuk_aduan && <Text style={styles.errorText}>{errors.tarikh_kejadian}</Text>}
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
                        editable={false}
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
                style={inputStyle('tajuk_aduan')}
                placeholderTextColor={"#A1A1A1"}
            />
            {errors.tajuk_aduan && <Text style={styles.errorText}>{errors.tajuk_aduan}</Text>}
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
});

export default LainLainForm;

