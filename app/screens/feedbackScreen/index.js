import { useState } from "react";
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from "react-native";

import Header from "./FeedbackHeader";
import StageOne from "./stages/StageOne";
import StageTwo from "./stages/StageTwo";
import StageThree from "./stages/StageThree";


const AduanForm = () => {
  const [currentStage, setCurrentStage] = useState(1); // Track the current stage
  const [stage1Data, setStage1Data] = useState({
    // General fields that are always present
    jenis_aduan: '',
    tarikh_kejadian: '',
    masa_kejadian: '',
    tajuk_aduan: '',
    butiran_lanjut: '',
    // documents: [],
    // Specific fields for Talian Telefon
    negeri: '',
    lokasi: '',
    no_tel: '',
    nama_staff: '',
    // Specific fields for Portal RHS
    nama_penuh: '',
    no_kad: '',
  }); 
  const [stage2Data, setStage2Data] = useState({}); // Data for stage 2

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
        return <StageThree onSubmit={handleSubmit} formData={{ ...stage1Data, ...stage2Data }} />;
      default:
        return null;
    }
  };
  
  return (
    <SafeAreaView style={{backgroundColor: '#9448DA'}}>
      <Header/>
      <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: '-7%'}}showsVerticalScrollIndicator={false}>
        {/* Render the current stage */}
        {renderStage()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AduanForm;
