import { useState } from "react";
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from "./FeedbackHeader";
import StageOne from "./stages/StageOne";
import StageTwo from "./stages/StageTwo";
import StageThree from "./stages/StageThree";


const AduanForm = () => {

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 0;
  
  const [currentStage, setCurrentStage] = useState(1); // Track the current stage

  // Data for stage 1
  const [stage1Data, setStage1Data] = useState({
    // General fields that are always present
    jenis_aduan: '',
    tarikh_kejadian: '',
    masa_kejadian: '',
    tajuk_aduan: '',
    butiran_lanjut: '',
    documents: [],
    // Specific fields for Talian Telefon
    negeri: '',
    lokasi: '',
    no_tel_yang_gagal_dihubungi: '',
    nama_staff_bertugas: '',
    // Specific fields for Portal RHS
    nama_penuh_pasangan: '',
    no_kad_pasangan: '',
  }); 

  // Data for stage 2
  const [stage2Data, setStage2Data] = useState({
    nama_penuh: '',
    no_kad_pengenalan: '',
    no_telefon: '',
    e_mel: '',
    jantina: '',
  }); 

  const handleNext = (newData, stage) => {
    // Update formData based on the stage
    if (stage === 1) {
      setStage1Data(newData);
    } else if (stage === 2) {
      setStage2Data(newData);
    }
    setCurrentStage(currentStage + 1); // Move to the next stage
  };

  const handleBack = () => {
    if (currentStage > 1){
      setCurrentStage(currentStage - 1); // Move to the previous stage
    }
  };

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <StageOne onNext={(data) => handleNext(data, 1)} formData={stage1Data} />;
      case 2:
        return <StageTwo onNext={(data) => handleNext(data, 2)} onBack={handleBack} formData={stage2Data} />;
      case 3:
        // return <StageThree onSubmit={handleSubmit} formData={{ ...stage1Data, ...stage2Data }} />;
        return <StageThree formData={{ ...stage1Data, ...stage2Data }} />;
      default:
        return null;
    }
  };
  
  // return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.flexContainer}
    //   keyboardVerticalOffset={keyboardVerticalOffset}
    // >
    //   <SafeAreaView style={{backgroundColor: '#9448DA'}}>
    //     <Header/>
    //       <ScrollView 
    //         style={{
    //           backgroundColor: '#FFFFFF', 
    //           marginTop: '-10%', 
    //           marginBottom: Platform.OS === "android" ? "20%" : 0,
    //         }}
    //         contentContainerStyle={styles.contentContainer}
    //         showsVerticalScrollIndicator={false}
    //         keyboardShouldPersistTaps="handled"
    //       >
    //         {/* Render the current stage */}
    //         {renderStage()}
    //       </ScrollView>
    //     </SafeAreaView>
    // </KeyboardAvoidingView>
  // );
  return (
    <SafeAreaView style={{ backgroundColor: '#9448DA' }}>
      <Header />
      <KeyboardAwareScrollView 
        style={{ backgroundColor: '#FFFFFF', marginTop: '-10%' }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={Platform.OS === "android" ? 70 : 20} // Optional, adjust the amount of scrolling when the keyboard is visible
        extraHeight={Platform.OS === "android" ? 170 : 80}
        enableOnAndroid={true} // Optional, but useful for Android
        keyboardShouldPersistTaps='handled'
      >
        {/* Render the current stage */}
        {renderStage()}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AduanForm;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#9448DA' // Assuming this is your desired background color
  },
  scrollView: {
    backgroundColor: '#FFFFFF' // Set the background color for your form
  },
  contentContainer: {
    flexGrow: 1, // Ensures that the ScrollView can expand to fit content
    paddingBottom: 20, // Add some padding at the bottom to ensure last input is visible
  }
});
