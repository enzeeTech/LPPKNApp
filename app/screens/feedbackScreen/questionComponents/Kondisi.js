import React, { useState, useImperativeHandle } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';
import StateSelector from '../../common/StateDropDownList';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const KondisiForm = React.forwardRef(({ onDataChange, initialData }, ref) => {
    useImperativeHandle(ref, () => ({
        validateFields
    }));

    const [errors, setErrors] = useState({}); 
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        console.log("Selected Time: ", formattedTime); // Debugging
        handleChange('masa_kejadian', formattedTime)
        hideTimePicker();
    };


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

            case 'masa_kejadian':
                if (!value.trim()) {
                    newErrors[name] = "Masa diperlukan";
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

    const handleChange = (name, value) => {
        if (name === 'masa_kejadian') {
            console.log("Handle Change - Field: ", name, "Value: ", value); // Debugging

            onDataChange({ ...initialData, [name]: value });
            validateFieldDynamic(name, value); // Perform validation
            
        }else{
            onDataChange({ ...initialData, [name]: value });
            validateFieldDynamic(name, value);
        }
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

        // Validate negeri
        if (!initialData.negeri || !initialData.negeri.trim()) {
            newErrors.negeri = "Negeri diperlukan";
            isValid = false;
        }

        // Validate lokasi
        if (!initialData.lokasi || !initialData.lokasi.trim()) {
            newErrors.lokasi = "Lokasi diperlukan";
            isValid = false;
        }

        // Validate tarikh kejadian
        if (!initialData.tarikh_kejadian || !initialData.tarikh_kejadian.trim()) {
            newErrors.tarikh_kejadian = "Tarikh diperlukan";
            isValid = false;
        }

        // Validate masa kejadian
        if (!initialData.masa_kejadian || !initialData.masa_kejadian.trim()) {
            newErrors.masa_kejadian = "Masa diperlukan";
            isValid = false;
        }

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
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Negeri*</Text>
            <StateSelector
                selectedValue={initialData.negeri}
                onValueChange={(item) => handleChange('negeri', item.value)}
                setStyle={dropdownStyle('negeri')}
            />
            {errors.negeri && <Text style={styles.errorText}>{errors.negeri}</Text>}
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Lokasi/Cawangan*</Text>
            <TextInput
                value={initialData.lokasi}
                onChangeText={(text) => handleChange('lokasi', text)}
                placeholder=" Masukkan cawangan di sini"
                style={inputStyle('lokasi')}
                placeholderTextColor={"#A1A1A1"}
            />
            {errors.lokasi && <Text style={styles.errorText}>{errors.lokasi}</Text>}
        </View>
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
                {errors.tarikh_kejadian && <Text style={styles.errorText}>{errors.tarikh_kejadian}</Text>}
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                <View style={[styles.inputFieldTime, errors.masa_kejadian ? styles.errorInput : {}]}>
                    <TextInput
                        value={initialData.masa_kejadian}
                        onChangeText={(text) => handleChange('masa_kejadian', text)}
                        placeholder=" Pilih masa"
                        placeholderTextColor={"#A1A1A1"}
                        style={styles.textInputStyle} // Apply text input style
                        editable={false} // Make it non-editable as it's set via the picker
                    />
                    <TouchableOpacity onPress={showTimePicker}>
                        <Image 
                            source={require('../../../assets/time.png')} 
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirm}
                        onCancel={hideTimePicker}
                    />
                </View>
                {errors.masa_kejadian && <Text style={styles.errorText}>{errors.masa_kejadian}</Text>}
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

export default KondisiForm;

