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

  const handleNext = () => {
    onNext(formData); // Pass the form data to the index.js component
  };

  const handleBack = () => {
    onBack(formData);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
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
              style={styles.inputField}
              placeholderTextColor={"#A1A1A1"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>No.Kad Pengenalan</Text>
          <TextInput
              value={formData.no_kad_pengenalan}
              onChangeText={(text) => handleChange('no_kad_pengenalan', text)}
              placeholder=" Masukkan no. kad pengenalan"
              style={styles.inputField}
              placeholderTextColor={"#A1A1A1"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>No.Telefon</Text>
            <TextInput
              value={formData.no_telefon}
              onChangeText={(text) => handleChange('no_telefon', text)}
              placeholder=" Masukkan no.tel anda"
              style={styles.inputField}
              placeholderTextColor={"#A1A1A1"}
            />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>E-mel</Text>
          <TextInput
              value={formData.e_mel}
              onChangeText={(text) => handleChange('e_mel', text)}
              placeholder=" Masukkan e-mel anda"
              style={styles.inputField}
              placeholderTextColor={"#A1A1A1"}
          />
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