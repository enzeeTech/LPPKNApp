import { useState } from "react";
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";

import * as DocumentPicker from "expo-document-picker";
import {Dropdown} from 'react-native-element-dropdown';
import GeneralForm from "../questionComponents/General";
import TalianTelefonForm from "../questionComponents/TalianTelefon";
import PortalForm from "../questionComponents/Portal";
import MaklumatTidakTepatForm from "../questionComponents/Maklumat";
import KakitanganForm from "../questionComponents/Kakitangan";
import KondisiForm from "../questionComponents/Kondisi";
import LainLainForm from "../questionComponents/LainLain";

const StageOne = ({ onNext}) => {

  // State maangement for file upload
  const [documents, setDocuments] = useState([]);

  // Local state to manage dropdown selection
  const [selectedItem, setSelectedItem] = useState('');

  // State to keep track of the uploaded file's details
  const [fileDetails, setFileDetails] = useState(null);

  const [formData, setFormData] = useState({
      // Initialize the form fields for the general case and each specific case
      // General fields that are always present
      nama_staf_bertugas: '',
      generalField2: '',
      // Specific fields for each dropdown option
      talian_telefonField1: '',
      portal_rhsField1: '',
      // ... more specific fields
    });

  const jenisAduanOptions = [
      {label: 'Talian Telefon', value: 'talian_telefon'},
      {label: 'Portal RHS', value: 'portal_rhs'},
      {label: 'Maklumat Tidak Tepat', value: 'maklumat_tidak_tepat'},
      {label: 'Kakitangan', value: 'kakitangan'},
      {label: 'Kondisi persekitaran pejabat LPPKN/Klinik Nur Sejahtera/Pusat Keluarga', value: 'kondisi'},
      {label: 'Lain-lain', value: 'lain_lain'},
  ];

  const handleNextStage = () => {
      console.log(formData);
      onNext(formData); // Pass the form data to the parent component
      
    };
  
  const handleChange = (name, value) => {
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
    }));
  };

  const handleDataChange = (newData) => {
      setFormData(newData);
    };
  

  // Function to dynamically render additional fields based on "Jenis Aduan" selection
  const renderConditionalFields = () => {
      switch (selectedItem) {
      case 'talian_telefon':
          return <TalianTelefonForm onDataChange={handleDataChange} initialData={formData} />;
      case 'portal_rhs':
          return <PortalForm onDataChange={handleDataChange} initialData={formData} />;
      case 'maklumat_tidak_tepat':
          return <MaklumatTidakTepatForm onDataChange={handleDataChange} initialData={formData} />;
      case 'kakitangan':
          return <KakitanganForm onDataChange={handleDataChange} initialData={formData} />;
      case 'kondisi':
          return <KondisiForm onDataChange={handleDataChange} initialData={formData} />;
      case 'lain_lain':
          return <LainLainForm onDataChange={handleDataChange} initialData={formData} />;
      default:
          return <GeneralForm onDataChange={handleDataChange} initialData={formData} />;
      }
  };

  // Function to handle file upload
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
        multiple: documents.length < 3 // Allow multiple selection only if less than 3 docs are already uploaded
      });

      if (!result.canceled && result.assets) {
        let newDocuments = [...documents];
        let totalSize = newDocuments.reduce((sum, doc) => sum + doc.size, 0);
        for (const asset of result.assets) {
          totalSize += asset.size;
          if (totalSize <= 4 * 1024 * 1024) { // Check if total size is within 4MB
            newDocuments.push({
              name: asset.name,
              size: asset.size,
              uri: asset.uri,
              mimeType: asset.mimeType,
            });
          } else {
            Alert.alert("Error", "Total file size cannot exceed 4MB.");
            break;
          }
        }
        setDocuments(newDocuments);

        // Log the details of the uploaded files
        console.log("Uploaded Files:", newDocuments);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while picking the document.");
    }
  };

  // Function to handle file deletion
  const deleteDocument = (uri) => {
    setDocuments(documents.filter(doc => doc.uri !== uri));
  };

  // Function to render the list of uploaded files
  const renderDocumentList = () => {
    return documents.map((doc, index) => (
      <View key={index} style={styles.documentItem}>
        <TouchableOpacity onPress={() => deleteDocument(doc.uri)}>
          <Image style={{height: 20, width: 20, resizeMode: 'contain'}} source={require("../../../assets/deleteButton.png")} />  
        </TouchableOpacity>
        <Text style={styles.documentTitle}>{doc.name}</Text>
        
      </View>
    ));
  };


  return(
      <View style={styles.parentContainer}>
          <View style={styles.pageTitle}>
              <Text style={styles.pageTitleStyle}>Maklumat Aduan</Text>
          </View>
          <View style={styles.langkahContainer}>
              <View style={styles.langkahElements}>
              <Image
                  source={require("../../../assets/langkah1.png")}
              />
              <Text style={styles.langkahTitleOn}>Langkah 1</Text>
              <Text style={styles.langkahTextOn}>Maklumat Aduan</Text>
              </View>
              <View style={styles.langkahElements}>
              <Image
                  source={require("../../../assets/langkah2.png")}
              />
              <Text style={styles.langkahTitle}>Langkah 2</Text>
              <Text style={styles.langkahText}>Maklumat Pengadu</Text>
              </View>
              <View style={styles.langkahElements}>
              <Image
                  source={require("../../../assets/langkah3.png")}
              />
              <Text style={styles.langkahTitle}>Langkah 3</Text>
              <Text style={styles.langkahText}>Hantar & Selesai</Text>
              </View>
          </View>
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
                      value={selectedItem}
                      onChange={(item) => {
                      setSelectedItem(item.value);
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
              {/* Render conditional fields */}
              {renderConditionalFields()} 
              <View style={{
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  marginTop: '5%', 
                  marginBottom: '6%',
                  marginLeft: '1%',
                  }}
              >
                  <TouchableOpacity onPress={pickDocument} disabled={documents.length >= 3}>
                      <View style={styles.buttonContainer}>
                          <View>
                              <Image
                              source={require("../../../assets/uploadIcon.png")}
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
                              fontSize: 14,
                              fontWeight: "600",
                              }}
                              >
                              Dokumen Sokongan
                          </Text>
                      </View>
                      <View>
                          <Text
                              style={{
                              color: "#6D6D6D",
                              fontSize: 11,
                              fontStyle: "italic",
                              fontWeight: "400",
                              }}
                          >
                              Maksimum 4MB setiap dokumen. Maksimum jumlah 3 dokumen.
                          </Text>
                      </View> 
                  </View>
              </View>

              {/* Render the list of uploaded files */}
              <View style={{alignItems: 'center', marginLeft: '5%', marginBottom: '10%'}}>
                <View style={styles.fileDetailsContainer}>
                    {renderDocumentList()}
                </View>
              </View>

              <View style={styles.seterusyaButtonContainer}>
                      <TouchableOpacity onPress={handleNextStage} style={styles.seterusyaButton}>
                          <View>
                              <Text style={styles.seterusyaButtonText}>
                              Seterusnya
                              </Text>
                          </View>
                      </TouchableOpacity>
              </View>
              
          </View>
      </View>
      
  );
};

export default StageOne;

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      background: "#fff",
    //   justifyContent: "center",
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
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    //   marginBottom: "10%",
      marginTop: "5%",
    //   marginLeft: "1%",
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
      marginTop: 8,
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
    documentItem: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white', // A light purple background or any other color that matches your app theme
      // borderColor: '#9448DA',
      // borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5,
      // padding: 10,
    },
    fileDetailsContainer: {
      width: '45%',
      height: 'auto',
    },
    documentTitle: {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: '700',
      color: '#777777',
    },
  
  });