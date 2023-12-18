// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';

// function FeedbackScreen() {

//   const openAppStore = () => {
//     // Replace 'your-app-id' with the actual app ID or package name from the app store.
//     const appStoreUrl = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997'; // For iOS
//     const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en&gl=US&pli=1'; // For Android

//     Linking.openURL(Platform.OS === 'ios' ? appStoreUrl : playStoreUrl)
//       .catch((err) => console.error('An error occurred: ', err));
//   };
//   return (
//     <View style={styles.container}>
//       <Text>This is the Feedback Screen</Text>
//       {/* You can add any placeholder content here */}
//       <TouchableOpacity
//         onPress={openAppStore}
//         style={{ marginTop: 10, height: 40, width: 150, borderRadius: 15, backgroundColor: '#9448DA', alignItems: 'center', justifyContent: 'center'   }}
//       >
//           <Text style={{color: 'white'}}>Download App</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default FeedbackScreen;

import { useState } from "react";
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";


import { Formik, Field } from "formik";
import * as DocumentPicker from "expo-document-picker";
import Header from "./FeedbackHeader";
import {Dropdown} from 'react-native-element-dropdown';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const pickDocument = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    });

    if (!result.canceled && result.assets) {
      const pickedFile = result.assets[0]; // Get the first picked file
      setFileDetails({
        name: pickedFile.name,
        size: pickedFile.size,
        uri: pickedFile.uri,
        mimeType: pickedFile.mimeType,
      });
      Alert.alert(
        "File Uploaded",
        `File Name: ${pickedFile.name}\nFile Size: ${pickedFile.size} bytes`
      );
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "An error occurred while picking the document.");
  }
};

const AduanForm = () => {
  // State to keep track of the uploaded file's details
  const [fileDetails, setFileDetails] = useState(null);

  // State to keep track of selected item from the drop down list
  const [selectedItem, setSelectedItem] = useState('');

  const getFormFields = (type) => {
    // You would return form fields based on the type of complaint
    return formStructure[type] || []; // Fallback to empty array if type is not found
  };

  const initialValues = {
    // other form fields...
    document: "",
  };

  const [formFields, setFormFields] = useState({
    "jenis aduan*": "",
    "Nama Staf Bertugas": "",
    "Tajuk Aduan*": "",
    "Butiran Lanjut": "",
  });

  const [formFieldsTwo, setFormFieldsTwo] = useState({
    "Nama Staf Bertugas": "",
    "Tajuk Aduan*": "",
    "Butiran Lanjut": "",
  });

  const placeholderText = {
    "Masa Kejadian*": "",
    "Nama Staf Bertugas": "  Masukkan nama staf",
    "Tajuk Aduan*": "  Nyatakan tajuk aduan anda",
    "Butiran Lanjut": "  Nyatakan butiran lanjut mengenai aduan anda",
  };

  const jenisAduanOptions = [
    {label: 'Talian Telefon', value: 'talian_telefon'},
    {label: 'Portal RHS', value: 'portal_rhs'},
    {label: 'Maklumat Tidak Tepat', value: 'maklumat_tidak_tepat'},
    {label: 'Kakitangan', value: 'kakitangan'},
    {label: 'Kondisi persekitaran pejabat LPPKN/Klinik Nur Sejahtera/Pusat Keluarga', value: 'kondisi'},
    {label: 'Lain-lain', value: 'lain_lain'},
  ];

  const onSubmit = (values, actions) => {
    // Handle form submission logic here
    console.log("Form values:", values);
    console.log(values);
  };

  const addField = (fieldName) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldName]: "",
    }));
  };

  // Function to dynamically render additional fields based on "Jenis Aduan" selection
  const renderConditionalFields = (jenisAduan, handleChange, values) => {
    switch (jenisAduan) {
      case 'talian_telefon':
        // Return JSX for fields specific to "Talian telefon"
        return (
          <View>
            {/* Additional fields here */}
          </View>
        );
      // ... handle other cases
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#9448DA'}}>
      <Header/>
      <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: '-7%'}}showsVerticalScrollIndicator={false}>
        <View style={styles.parentContainer}>
          <View style={styles.pageTitle}>
            <Text style={styles.pageTitleStyle}>Maklumat Aduan</Text>
          </View>
          <View style={styles.langkahContainer}>
            <View style={styles.langkahElements}>
              <Image
                source={require("../../assets/langkah1.png")}
              />
              <Text style={styles.langkahTitleOn}>Langkah 1</Text>
              <Text style={styles.langkahTextOn}>Maklumat Aduan</Text>
            </View>
            <View style={styles.langkahElements}>
              <Image
                source={require("../../assets/langkah2.png")}
              />
              <Text style={styles.langkahTitle}>Langkah 2</Text>
              <Text style={styles.langkahText}>Maklumat Pengadu</Text>
            </View>
            <View style={styles.langkahElements}>
              <Image
                source={require("../../assets/langkah3.png")}
              />
              <Text style={styles.langkahTitle}>Langkah 3</Text>
              <Text style={styles.langkahText}>Hantar & Selesai</Text>
            </View>
          </View>
          <Formik initialValues={formFields} onSubmit={onSubmit}>
            {({ handleChange, values }) => (
              <View style={styles.formContainer}>
                {/* Dropdown for Jenis Aduan */}
                <View style={styles.inputContainer}>
                  <Text style={styles.titleStyle}>Jenis Aduan*</Text>
                  <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    selectedTextStyle={styles.selectedText}
                    activeColor="#EED4FF"
                    data={jenisAduanOptions}
                    labelField="label"
                    valueField="value"
                    value={values.jenisAduanOptions}
                    onChange={(item) => {
                      setFieldValue('jenisAduan', item.value);
                      // You can also handle additional logic here
                    }}
                    placeholder=" *Nyatakan aduan anda"
                    placeholderStyle={styles.placeholderStyle}
                    renderItem={(item) => (
                      <View style={styles.item}>
                        <Text style={styles.itemText}>{item.label}</Text>
                      </View>
                    )}
                  />
                </View>
                        
                {/* Other fields */}
                <View style={styles.inputContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text style={styles.titleStyle}>Tarikh Kejadian*</Text>
                      <TextInput
                        style={styles.inputField}
                        placeholder="  Pilih tarikh"
                        placeholderTextColor={'#A1A1A1'}
                      ></TextInput>
                    </View>
                    <View
                      style={{
                        width: "45%",
                        marginLeft: "10%",
                      }}
                    >
                      <Text style={styles.titleStyle}>Masa Kejadian*</Text>
                      <TextInput
                        style={styles.inputField}
                        placeholder="  Pilih masa"
                        placeholderTextColor={'#A1A1A1'}
                      ></TextInput>
                    </View>
                  </View>
                </View>
                {Object.keys(formFieldsTwo).map((fieldName) => (
                  <View key={fieldName} style={styles.inputContainer}>
                    <Text style={styles.titleStyle}>{fieldName}</Text>
                    <Field
                      component={TextInput}
                      onChangeText={handleChange(fieldName)}
                      value={values[fieldName]}
                      placeholder={placeholderText[fieldName]}
                      placeholderTextColor={'#A1A1A1'}
                      style={styles.inputField}
                    />
                  </View>
                ))}

                <View style={styles.container}>
                  <TouchableOpacity onPress={pickDocument}>
                    <View style={styles.buttonContainer}>
                      <View>
                        <Image
                          source={require("../../assets/uploadIcon.png")}
                          style={styles.buttonImage}
                        />
                      </View>
                      <View>
                        <Text style={styles.buttonText}>Pilih dokumen</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View style={styles.infoText}>
                    <View>
                      <Text
                        style={{
                          color: "#6D6D6D",
                          // fontFamily: "Inter",
                          fontSize: 14,
                          fontStyle: "normal",
                          fontWeight: "700",
                          // lineHeight: "normal",
                        }}
                      >
                        Dokumen Sokongan
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#6D6D6D",
                          // fontFamily: "Inter",
                          fontSize: 11,
                          fontStyle: "italic",
                          fontWeight: "400",
                          // lineHeight: "normal",
                        }}
                      >
                        Maksimum 4MB setiap dokumen. Maksimum jumlah 3 dokumen.
                      </Text>
                    </View>
                  </View>
                  {fileDetails && (
                    <View style={styles.fileDetailsContainer}>
                      <Text style={styles.fileDetailsText}>Uploaded File:</Text>
                      <Text style={styles.fileDetailsText}>
                        {fileDetails.name}
                      </Text>
                      <Text style={styles.fileDetailsText}>
                        {fileDetails.size}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.seterusyaButtonContainer}>
                  <TouchableOpacity style={styles.seterusyaButton}>
                      <View>
                        <Text style={styles.seterusyaButtonText}>
                          Seterusya
                        </Text>
                      </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AduanForm;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    background: "#fff",
    justifyContent: "center",
    width: "90%",
    marginLeft: "1.5%",
    marginTop: "15%",
  },
  pageTitle: {
    background: "#fff",
    justifyContent: "center",
    margin: "4%",
  },
  pageTitleStyle: {
    color: "#9448DA",
    // fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 20,
  },
  langkahContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "5%",
    flexDirection: "row",
    flexShrink: 0,
  },

  langkahElements: {
    resizeMode: "contain",
    alignItems: "center",
    margin: "1%",
  },
  langkahTitleOn: {
    margin: "4%",
    color: "#7931A8",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 11.5,
    fontStyle: "normal",
    fontWeight: "600",
  },

  langkahTextOn: {
    color: "#777",
    textAlign: "center",
    // fontFamily: "SF Pro Display",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: 10,
  },
  langkahTitle: {
    margin: "4%",
    color: "#CECECE",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 11.5,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 11.5,
  },
  langkahText: {
    color: "#CECECE",
    textAlign: "center",
    // fontFamily: "SFProDisplay-Bold",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: 10,
  },

  formContainer: {
    flex: 1,
    width: "100%",
    margin: "4%",
  },
  inputContainer: {
    width: "100%",
    marginBottom: "3%",
  },
  titleStyle: {
    color: "#5C2D86",
    // fontFamily: "Roboto",
    fontSize: 13,
    // fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 20,
  },
  inputField: {
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "#ADB5BD",
    width: "100%",
    height: 49,
    borderWidth: 1,
    borderColor: "#A1A1A1", // Border color when there's text input
    padding: "1.3%",
    // fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#000", // Text color when there's text input
    // placeholderTextColor: "#A1A1A1", // placeholder text color
  },
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "10%",
    marginTop: "5%",
    marginLeft: "1%",
  },
  buttonContainer: {
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    // padding: "5%",
    flexDirection: "row",
    backgroundColor: "#F4EDF9",
    borderWidth: 3,
    borderColor: "#7931A8",
    borderRadius: 28,
    width: 160,
  },
  infoText: {
    alignItems: "flex-start",
    width: "50%",
    color: "#6D6D6D",
    // fontFamily: "Inter",
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "400",
    // lineHeight: "normal",
  },
  buttonImage: {
    resizeMode: "contain",
    flexShrink: 0,
  },
  buttonText: {
    color: "#4A007D",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: "normal",
  },
  fileDetailsContainer: {
    //marginLeft: 25,
    //marginTop: 20,
  },
  fileDetailsText: {
    fontSize: 16,
  },
  seterusyaButtonContainer: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    marginBottom: Platform.OS === "ios" ? "50%" : "60%",
    alignContent: "center",
  },
  seterusyaButton: {
    alignItems: "center",
    height: 45,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9448DA",
    backgroundColor: "#9448DA",
  },
  seterusyaButtonText: {
    alignItems: "center",
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: "normal",
  },
  dropdown: {
    // Basic style for the dropdown
    height: 50,
    borderColor: '#ADB5BD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownContainer: {
    backgroundColor: '#F8F6FF',
    borderRadius: 8, 
  },
  selectedText: {
    // Style for the selected item text
    fontSize: 12,
    fontWeight: '600',
    color: '#6D6D6D',
  },
  placeholderStyle: {
    // Style for the placeholder text
    color: '#A1A1A1',
    fontSize: 14,
  },
  item: {
    // Style for each dropdown item
    padding: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
  },
  itemText: {
    // Style for the text of each item
    fontSize: 12,
    fontWeight: '600',
    color: '#6D6D6D',
  },

});



