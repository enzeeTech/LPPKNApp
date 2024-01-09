import React, { useImperativeHandle, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './layouts/QuestionsLayout';
import CalendarPicker from '../../common/Calendar';
import StateSelector from '../../common/StateDropDownList';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TalianTelefonForm = React.forwardRef(({ onDataChange, initialData }, ref) => {
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
            case 'no_tel_yang_gagal_dihubungi':
                if (!value) {
                    newErrors[name] = "No. telefon diperlukan";
                } else {
                    const cleanedNumber = value.replace(/[^\d]/g, '');
                    if (cleanedNumber.length < 10) {
                        newErrors[name] = "No. telefon harus sekurang-kurangnya 10 angka";
                    } else if (cleanedNumber.length > 11) {
                        newErrors[name] = "No. telefon tidak boleh melebihi 11 angka";
                    } else {
                        delete newErrors[name];
                    }
                }
                break;

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
        if (name === 'no_tel_yang_gagal_dihubungi') {
            // Check if the value is not empty or null
            if (value && value.length > 0) {
                console.log("value: " + value);
                let cleanedNumber = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    
                // Automatically add a dash after the third digit if more than three digits are entered
                if (cleanedNumber.length > 3) {
                    cleanedNumber = `${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(3)}`;
                }
    
                // Update the state with the new formatted value
                onDataChange({ ...initialData, [name]: cleanedNumber });
                validateFieldDynamic(name, value);
            } else {
                // If the value is empty or null, update the state accordingly
                onDataChange({ ...initialData, [name]: value });
                validateFieldDynamic(name, value);
            }
        } else if (name === 'masa_kejadian') {
            console.log("Handle Change - Field: ", name, "Value: ", value); // Debugging

            onDataChange({ ...initialData, [name]: value });
            validateFieldDynamic(name, value); // Perform validation
            
        }
        else {
            onDataChange({ ...initialData, [name]: value });
            validateFieldDynamic(name, value); // Perform validation
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
        
        // Validate no_tel_yang_gagal_dihubungi
        if (!initialData.no_tel_yang_gagal_dihubungi) {
            newErrors.no_tel_yang_gagal_dihubungi = "No. telefon diperlukan";
            isValid = false;
        }
        else if (initialData.no_tel_yang_gagal_dihubungi) {
            const cleanedNumber = initialData.no_tel_yang_gagal_dihubungi.replace(/[^\d]/g, '');

            // Check if the number is less than 10 digits
            if (cleanedNumber.length < 10) {
                newErrors.no_tel_yang_gagal_dihubungi = "No. telefon harus sekurang-kurangnya 10 angka";
                isValid = false;
            }
            // Check if the number is more than 11 digits
            else if (cleanedNumber.length > 11) {
                newErrors.no_tel_yang_gagal_dihubungi = "No. telefon tidak boleh melebihi 11 angka";
                isValid = false;
            }
        }
        

        // Validate tarikh_kejadian
        if (!initialData.tarikh_kejadian || !initialData.tarikh_kejadian.trim()) {
            newErrors.tarikh_kejadian = "Tarikh diperlukan";
            isValid = false;
        }

        // Validate masa_kejadian
        if (!initialData.masa_kejadian || !initialData.masa_kejadian.trim()) {
            newErrors.masa_kejadian = "Masa diperlukan";
            console.log("Masa diperlukan false");
            isValid = false;
        }

        // Validate tajuk_aduan
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
            <View style={styles.inputContainer}>
                <Text style={styles.titleStyle}>No.Tel Yang Gagal Dihubungi*</Text>
                <TextInput
                    value={initialData.no_tel_yang_gagal_dihubungi}
                    onChangeText={(text) => handleChange('no_tel_yang_gagal_dihubungi', text)}
                    placeholder=" Masukkan no.tel di sini"
                    style={inputStyle('no_tel_yang_gagal_dihubungi')}
                    placeholderTextColor={"#A1A1A1"}
                    keyboardType='numeric'

                />  
                {errors.no_tel_yang_gagal_dihubungi && <Text style={styles.errorText}>{errors.no_tel_yang_gagal_dihubungi}</Text>}
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
                            placeholderTextColor={"#A1A1A1"}
                            editable={false}
                        />  
                        <TouchableOpacity onPress={showTimePicker}>
                            <Image source={require('../../../assets/time.png')} style={{marginLeft: "49%", marginTop: 10, width: 20, height: 20, resizeMode: "contain"}}/> 
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={handleConfirm}
                            onCancel={hideTimePicker}
                        />
                        {/* Time Picker Modal */}
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

export default TalianTelefonForm;

