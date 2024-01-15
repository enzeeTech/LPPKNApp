import { useState, useRef, useCallback } from "react";
import React from 'react';
import {
  SafeAreaView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import Header from "./FeedbackHeader";
import StageOne from "./stages/StageOne";
import StageTwo from "./stages/StageTwo";
import StageThree from "./stages/StageThree";
import StageThreeError from "./stages/StageThreeError"; // Testing error screen


const AduanForm = () => {
  const [currentStage, setCurrentStage] = useState(1); // Track the current stage

  // scrollview ref
  const scrollViewRef = useRef(null);

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
    scrollViewRef.current?.scrollToPosition(0, 0, true);
  };

  const handleBack = (newData) => {
    if (currentStage > 1){
      setStage2Data(newData);
      setCurrentStage(currentStage - 1); // Move to the previous stage
      scrollViewRef.current?.scrollToPosition(0, 0, true);
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
        // return <StageThreeError/>; // Testing error screen
      default:
        return null;
    }
  };

  // Function to reset the form to its initial state
  const resetForm = useCallback(() => {
    setCurrentStage(1);
    setStage1Data({
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
    setStage2Data({
      nama_penuh: '',
      no_kad_pengenalan: '',
      no_telefon: '',
      e_mel: '',
      jantina: '',
    });
    // Scroll to the top of the form
    scrollViewRef.current?.scrollToPosition(0, 0, true);
  }, []);

  // Reset the form state when the tab comes into focus
  useFocusEffect(resetForm);

  return (
    <SafeAreaView style={{ backgroundColor: '#9448DA' }}>
      <Header />
      <KeyboardAwareScrollView 
        style={{ backgroundColor: '#FFFFFF', marginTop: '-10%' }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={Platform.OS === "android" ? 70 : 20} 
        extraHeight={Platform.OS === "android" ? 170 : 90}
        enableOnAndroid={true} 
        keyboardShouldPersistTaps='handled'
        ref={scrollViewRef}
      >
        {/* Render the current stage */}
        {renderStage()}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AduanForm;