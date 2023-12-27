import { useState } from "react";
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import * as DocumentPicker from "expo-document-picker";
import {Dropdown} from 'react-native-element-dropdown';
import styles from './layouts/StageOneLayout';
import GeneralForm from "../questionComponents/General";
import TalianTelefonForm from "../questionComponents/TalianTelefon";
import PortalForm from "../questionComponents/Portal";
import MaklumatTidakTepatForm from "../questionComponents/Maklumat";
import KakitanganForm from "../questionComponents/Kakitangan";
import KondisiForm from "../questionComponents/Kondisi";
import LainLainForm from "../questionComponents/LainLain";

const StageOne = ({ onNext, formData : initialFormData}) => {

  const [formData, setFormData] = useState(initialFormData);

  // State maangement for file upload
  const [documents, setDocuments] = useState([]);

  // Dropdown options for Jenis Aduan
  const jenisAduanOptions = [
      {label: 'Talian Telefon', value: 'talian_telefon'},
      {label: 'Portal RHS', value: 'portal_rhs'},
      {label: 'Maklumat Tidak Tepat', value: 'maklumat_tidak_tepat'},
      {label: 'Kakitangan', value: 'kakitangan'},
      {label: 'Kondisi persekitaran pejabat LPPKN/Klinik Nur Sejahtera/Pusat Keluarga', value: 'kondisi'},
      {label: 'Lain-lain', value: 'lain_lain'},
  ];

  const handleNextStage = () => {
      // console.log(formData); // Testing: Print the form data
      onNext(formData); // Pass the form data to the index.js
    };

  const handleDataChange = (newData) => {
      setFormData(newData);
    };

  const handleFormTypeChange = (item) => {
    if (formData.jenis_aduan === ''){
      setFormData({ ...formData, jenis_aduan: item.value, documents: [] });
      setDocuments([]);
    }
    else {
      setDocuments([]);
      setFormData({ ...formData, jenis_aduan: item.value });
      setFormData({
        jenis_aduan: item.value,
        // Reset other fields to their initial state
        tarikh_kejadian: '',
        masa_kejadian: '',
        tajuk_aduan: '',
        butiran_lanjut: '',
        documents: [],
        // Specific fields for Talian Telefon
        negeri: '',
        lokasi: '',
        no_tel: '',
        nama_staff: '',
        // Specific fields for Portal RHS
        nama_penuh_pasangan: '',
        no_kad_pasangan: '',
      });
    }

    const handleStateChange = (negeri) => {
      setFormData({ ...formData, negeri: negeri });
    }
    
  };

  // Function to dynamically render additional fields based on "Jenis Aduan" selection
  const renderConditionalFields = () => {
      switch (formData.jenis_aduan) {
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
    // Check if the user has already uploaded 3 documents
    if (documents.length >= 3) {
      Alert.alert("Error", "You cannot upload more than 3 documents.");
      return;
    }

    // Invoke the Document Picker
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
      multiple: true
    });

    // Check if the picker was not canceled
    if (!result.cancelled) {
      let newDocuments = [...documents];

      // Check if result contains multiple files
      if (result.assets) {
        for (const asset of result.assets) {
          // Check if adding this file exceeds the 3 document limit
          if (newDocuments.length >= 3) {
            Alert.alert("Error", "You cannot upload more than 3 documents.");
            break;
          }

          // Check if individual file size is within 4MB
          if (asset.size <= 4 * 1024 * 1024) {
            newDocuments.push({
              name: asset.name,
              size: asset.size,
              uri: asset.uri,
              mimeType: asset.mimeType,
            });
          } else {
            // If the individual file size exceeds 4MB, show an error for that file
            Alert.alert("Error", `The file ${asset.name} exceeds the 4MB size limit.`);
          }
        }
      } else if (result.uri) {
        // Handling single file selection
        const asset = {
          name: result.name,
          size: result.size,
          uri: result.uri,
          mimeType: result.mimeType,
        };

        // Check if individual file size is within 4MB
        if (asset.size <= 4 * 1024 * 1024) {
          newDocuments.push(asset);
        } else {
          Alert.alert("Error", `The file ${asset.name} exceeds the 4MB size limit.`);
        }
      }

      // Update the documents state
      setDocuments(newDocuments);

      // Update the formData state
      setFormData({ ...formData, documents: newDocuments });

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
    setFormData({ ...formData, documents: documents.filter(doc => doc.uri !== uri) });
  };

  // Function to render the list of uploaded files
  const renderDocumentList = () => {
    return formData.documents.map((doc, index) => (
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
          <View style={styles.langkahContainerImages}>
            <Image
              source={require("../../../assets/langkah1Active.png")}
              style={{width: 80, height: 80, resizeMode: 'contain'}}
            />
            <Image
              source={require("../../../assets/langkah2.png")}
              style={{width: 90, height: 90, resizeMode: 'contain'}}
            />
            <Image
              source={require("../../../assets/langkah3.png")}
              style={{width: 90, height: 90, resizeMode: 'contain'}}
            />
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
                      value={formData.jenis_aduan}
                      onChange={handleFormTypeChange}
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

