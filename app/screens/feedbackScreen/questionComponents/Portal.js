import React, { useState, useImperativeHandle } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';

const PortalForm = React.forwardRef(({ onDataChange, initialData }, ref) => {
    useImperativeHandle(ref, () => ({
        validateFields
    }));

    const [errors, setErrors] = useState({}); 

    const handleChange = (name, value) => {
        let formattedValue = value;

        if (name === 'no_kad_pasangan') {
            const numbersOnly = value.replace(/[^\d]/g, ''); // Remove non-numeric characters

            // Format with dashes after the 6th and 8th digits
            if (numbersOnly.length > 8) {
                formattedValue = `${numbersOnly.slice(0, 6)}-${numbersOnly.slice(6, 8)}-${numbersOnly.slice(8)}`;
            } else if (numbersOnly.length > 6) {
                formattedValue = `${numbersOnly.slice(0, 6)}-${numbersOnly.slice(6)}`;
            } else {
                formattedValue = numbersOnly;
            }

            onDataChange({ ...initialData, [name]: formattedValue });
        } else {
            onDataChange({ ...initialData, [name]: value });
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
    
    const validateFields = () => {
        let isValid = true;
        let newErrors = {};

        // Validate nama penuh pasangan
        if (!initialData.nama_penuh_pasangan || !initialData.nama_penuh_pasangan.trim()) {
            newErrors.nama_penuh_pasangan = "Nama penuh diperlukan";
            console.log("Nama penuh diperlukan false");
            isValid = false;
        }

        // Validate no_kad_pasangan
        if (!initialData.no_kad_pasangan) {
            newErrors.no_kad_pasangan = "No.kad diperlukan";
            isValid = false;
        } else {
            const numbersOnly = initialData.no_kad_pasangan.replace(/[^\d]/g, '');
            if (numbersOnly.length !== 12) {
                newErrors.no_kad_pasangan = "No.kad harus tepat 12 angka";
                isValid = false;
            }
        }

        // Validate tarikh kejadian
        if (!initialData.tarikh_kejadian || !initialData.tarikh_kejadian.trim()) {
            newErrors.tarikh_kejadian = "Tarikh diperlukan";
            console.log("Tarikh diperlukan false");
            isValid = false;
        }

        // // Validate masa kejadian
        // if (!initialData.masa_kejadian || !initialData.masa_kejadian.trim()) {
        //     newErrors.masa_kejadian = "Masa diperlukan";
        //     console.log("Masa diperlukan false");
        //     isValid = false;
        // }

        // Validate tajuk aduan
        if (!initialData.tajuk_aduan || !initialData.tajuk_aduan.trim()) {
            newErrors.tajuk_aduan = "Tajuk diperlukan";
            console.log("Tajuk diperlukan false");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>Nama Penuh Pasangan*</Text>
            <TextInput
                value={initialData.nama_penuh_pasangan}
                onChangeText={(text) => handleChange('nama_penuh_pasangan', text)}
                placeholder=" Masukkan nama penuh di sini"
                style={inputStyle('nama_penuh_pasangan')}
                placeholderTextColor={"#A1A1A1"}
            />
            {errors.nama_penuh_pasangan && <Text style={styles.errorText}>{errors.nama_penuh_pasangan}</Text>}
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.titleStyle}>No.Kad Pengenalan Pasangan*</Text>
            <TextInput
                value={initialData.no_kad_pasangan}
                onChangeText={(text) => handleChange('no_kad_pasangan', text)}
                placeholder=" Masukkan no.kad di sini"
                style={inputStyle('no_kad_pasangan')}
                placeholderTextColor={"#A1A1A1"}
                keyboardType="numeric"
            />
            {errors.no_kad_pasangan && <Text style={styles.errorText}>{errors.no_kad_pasangan}</Text>}
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

export default PortalForm;

