import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./layouts/StageTwoLayout";
import RadioButton from "../../common/RadioButton";


function StageTwo({ onNext, formData : secondStageFormData, onBack}) {

  const [formData, setFormData] = useState(secondStageFormData);

  // Update the local formData when secondStageFormData changes
  useEffect(() => {
    setFormData(secondStageFormData);
  }, [secondStageFormData]);

  // DATA VALIDATION
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch(name) {
      case 'nama_penuh':
        return value ? '' : 'Nama penuh diperlukan';
      case 'no_kad_pengenalan':
        const numbersOnly = value.replace(/[^\d]/g, '');
        if (!value) {
          return 'No. kad pengenalan diperlukan'; // Check if the field is empty
        } else if (numbersOnly.length !== 12) {
          return 'No. kad pengenalan harus 12 angka'; // Check if the length is exactly 12 digits
        } else {
          return ''; // No error
        }
      case 'no_telefon':
        return value ? '' : 'No. telefon diperlukan';
      case 'e_mel':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'E-mel tidak sah';
      default:
        return '';
    }
  };

  const inputStyle = (fieldName) => ({
    ...styles.inputField,
    borderColor: errors[fieldName] ? 'red' : '#A1A1A1',
  });


  const handleNext = () => {
    const newErrors = {};
    let isValid = true;
  
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) isValid = false;
    });
  
    setErrors(newErrors);
  
    if (isValid) {
      onNext(formData); // Proceed to next stage if the form is valid
    } else {
      console.log('Validation failed');
    }
  };

  const handleBack = () => {
    onBack(formData);
  };

  const handleChange = (name, value) => {
    let formattedValue = value;
  
    if (name === 'no_kad_pengenalan') {
      // Remove any non-numeric characters
      const numbersOnly = value.replace(/[^\d]/g, '');
  
      // Automatically add dashes after the 6th and 8th digits
      if (numbersOnly.length <= 6) {
        formattedValue = numbersOnly;
      } else if (numbersOnly.length <= 8) {
        formattedValue = `${numbersOnly.slice(0, 6)}-${numbersOnly.slice(6)}`;
      } else {
        formattedValue = `${numbersOnly.slice(0, 6)}-${numbersOnly.slice(6, 8)}-${numbersOnly.slice(8)}`;
      }
    }
  
    setFormData({ ...formData, [name]: formattedValue });
    validateField(name, formattedValue);
  };


  return (
    <View style={styles.parentContainer}>
      <View style={styles.pageTitle}>
        <Text style={styles.pageTitleStyle}>Maklumat Aduan</Text>
      </View>
      <View style={styles.langkahContainerImages}>
          <Image
            source={require("../../../assets/langkah1Active.png")}
            style={{width: 80, height: 80, resizeMode: 'contain'}}
          />
          <Image
            source={require("../../../assets/langkah2Active.png")}
            style={{width: 90, height: 90, resizeMode: 'contain'}}
          />
          <Image
            source={require("../../../assets/langkah3.png")}
            style={{width: 90, height: 90, resizeMode: 'contain'}}
          />  
      </View>
      {/* Form data begins here */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>Nama Penuh</Text>
          <TextInput
              value={formData.nama_penuh}
              onChangeText={(text) => handleChange('nama_penuh', text)}
              placeholder=" Masukkan nama penuh anda"
              style={inputStyle('nama_penuh')}
              placeholderTextColor={"#A1A1A1"}
          />
          {errors.nama_penuh && <Text style={styles.errorText}>{errors.nama_penuh}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>No.Kad Pengenalan</Text>
          <TextInput
              value={formData.no_kad_pengenalan}
              onChangeText={(text) => handleChange('no_kad_pengenalan', text)}
              placeholder=" Masukkan no. kad pengenalan"
              style={inputStyle('no_kad_pengenalan')}
              placeholderTextColor={"#A1A1A1"}
              keyboardType="numeric"
          />
          {errors.no_kad_pengenalan && <Text style={styles.errorText}>{errors.no_kad_pengenalan}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>No.Telefon</Text>
            <TextInput
              value={formData.no_telefon}
              onChangeText={(text) => handleChange('no_telefon', text)}
              placeholder=" Masukkan no.tel anda"
              style={inputStyle('no_telefon')}
              placeholderTextColor={"#A1A1A1"}
              keyboardType="numeric"
            />
            {errors.no_telefon && <Text style={styles.errorText}>{errors.no_telefon}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>E-mel</Text>
          <TextInput
              value={formData.e_mel}
              onChangeText={(text) => handleChange('e_mel', text)}
              placeholder=" Masukkan e-mel anda"
              style={inputStyle('e_mel')}
              placeholderTextColor={"#A1A1A1"}
          />
          {errors.e_mel && <Text style={styles.errorText}>{errors.e_mel}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>Jantina</Text>
          <View style={styles.formContainer}>
            <RadioButton
              label="Lelaki"
              value="lelaki"
              selected={formData.jantina === 'lelaki'}
              onPress={() => handleChange('jantina', 'lelaki')}
            />
            <RadioButton
              label="Perempuan"
              value="perempuan"
              selected={formData.jantina === 'perempuan'}
              onPress={() => handleChange('jantina', 'perempuan')}
            />
          </View>
    
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.button1Style}>
            <View>
              <Text style={styles.button1Text}>
                Kembali ke Maklumat Aduan
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.btn2Container}>
          <TouchableOpacity onPress={handleNext} style={styles.button2Style}>
            <View>
              <Text style={styles.button2Text}>
                Hantar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StageTwo;