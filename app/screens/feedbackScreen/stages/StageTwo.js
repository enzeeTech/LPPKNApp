import { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
// import RadioButton from "react-native-radio-buttons-group";

import styles from "./layouts/StageTwoLayout";


function StageTwo({ onNext, formData : secondStageFormData, onBack}) {

  const [formData, setFormData] = useState(secondStageFormData);

  const handleNext = () => {
    // console.log("submit button pressed");
    // console.log(formData); // Testing: Print stage 2 data to console
    onNext(formData); // Pass the form data to the index.js component
  };

  const handleBack = () => {
    onBack();
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
          <View style={styles.containerRow}>
            <View style={styles.smallContainer}>
              <TextInput
                value={formData.no_telefon}
                onChangeText={(text) => handleChange('no_telefon', text)}
                placeholder=" Masukkan no.tel anda"
                style={styles.inputField}
                placeholderTextColor={"#A1A1A1"}
              />
            </View>
          </View>
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