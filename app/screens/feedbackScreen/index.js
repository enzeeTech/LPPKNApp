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
  const [formData, setFormData] = useState({});

  const handleNext = (newData) => {
    // Update formData with new data from the current stage
    setFormData(prevFormData => ({ ...prevFormData, ...newData }));
    setCurrentStage(currentStage + 1); // Move to the next stage
  };

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <StageOne onNext={handleNext} formData={formData} />;
      case 2:
        return <StageTwo onNext={handleNext} formData={formData} />;
      case 3:
        return <StageThree onSubmit={handleSubmit} formData={formData} />;
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
