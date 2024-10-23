// import { useState, useRef, useCallback } from "react";
// import React from 'react';
// import {
//   SafeAreaView,
//   Platform,
//   View,
// } from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useFocusEffect } from '@react-navigation/native';
// import Header from "./FeedbackHeader";
// import StageOne from "./stages/StageOne";
// import StageTwo from "./stages/StageTwo";
// import StageThree from "./stages/StageThree";
// import StageThreeError from "./stages/StageThreeError";
// import GlobalApi from "../../services/GlobalApi";

// const AduanForm = () => {
//   const [currentStage, setCurrentStage] = useState(1); // Track the current stage

//   // scrollview ref
//   const scrollViewRef = useRef(null);

//   // Data for stage 1
//   const [stage1Data, setStage1Data] = useState({
//     // General fields that are always present
//     jenis_aduan: '',
//     tarikh_kejadian: '',
//     masa_kejadian: '',
//     tajuk_aduan: '',
//     butiran_lanjut: '',
//     documents: [],
//     // Specific fields for Talian Telefon
//     negeri: '',
//     lokasi: '',
//     no_tel_yang_gagal_dihubungi: '',
//     nama_staff_bertugas: '',
//     // Specific fields for Portal RHS
//     nama_penuh_pasangan: '',
//     no_kad_pasangan: '',
//   }); 

//   // Data for stage 2
//   const [stage2Data, setStage2Data] = useState({
//     nama_penuh: '',
//     no_kad_pengenalan: '',
//     no_telefon: '',
//     e_mel: '',
//     jantina: '',
//   }); 

//   const [finalData, setFinalData] = useState({}); // Data to be submitted to the API
//   const [submissionError, setSubmissionError] = useState(false); // Track if there is an error during submission

//   const handleNext = async (newData, stage) => {
//     // Update formData based on the stage
//     if (stage === 1) {
//       setStage1Data(newData);
//       setCurrentStage(2); 
//     } else if (stage === 2) {
//       setStage2Data(newData);
//       const fullFormData = { ...stage1Data, ...newData };

//       const formData = new FormData();

//       // Ensure 'documents' is defined and is an array before appending files
//       if (Array.isArray(fullFormData.documents)) {
//         fullFormData.documents.forEach(document => {
//             formData.append("files.documents", {
//                 uri: document.uri,
//                 type: document.mimeType,
//                 name: document.name
//             });
//             console.log('type', document.mimeType);
//             console.log('name', document.name);
//         });
//     }

//       // Append the rest of the form data as a JSON string under the key 'data'
//       // Exclude documents from JSON string as they are handled separately
//       const dataToSubmit = { ...fullFormData, documents: undefined };
//       formData.append("data", JSON.stringify(dataToSubmit));

//       // Call the API to submit the form data
//       try {
//         const response = await GlobalApi.submitAduanForm(formData); // Update API function if needed to handle formData
//         console.log('Form submission response:', response);
//         setCurrentStage(3);
//         setSubmissionError(false);  // Reset or ensure no error is flagged
//       } catch (error) {
//         console.error('Error during form submission:', error);
//         setSubmissionError(true);  // Flag an error to conditionally render the error component
//       }
//     }
//     scrollViewRef.current?.scrollToPosition(0, 0, true);
//   };

//   const handleBack = (newData) => {
//     if (currentStage > 1){
//       setStage2Data(newData);
//       setCurrentStage(currentStage - 1); // Move to the previous stage
//       scrollViewRef.current?.scrollToPosition(0, 0, true);
//     }
//   };

//   const renderStage = () => {
//     if (submissionError) {
//       return <StageThreeError />;
//     }
//     switch (currentStage) {
//       case 1:
//         return <StageOne onNext={(data) => handleNext(data, 1)} formData={stage1Data} />;
//       case 2:
//         return <StageTwo onNext={(data) => handleNext(data, 2)} onBack={handleBack} formData={stage2Data} />;
//       case 3:
//         return <StageThree/>;
//       default:
//         return null;
//     }
//   };

//   // Function to reset the form to its initial state
//   const resetForm = useCallback(() => {
//     setCurrentStage(1);
//     setSubmissionError(false);
//     setStage1Data({
//       // General fields that are always present
//       jenis_aduan: '',
//       tarikh_kejadian: '',
//       masa_kejadian: '',
//       tajuk_aduan: '',
//       butiran_lanjut: '',
//       documents: [],
//       // Specific fields for Talian Telefon
//       negeri: '',
//       lokasi: '',
//       no_tel_yang_gagal_dihubungi: '',
//       nama_staff_bertugas: '',
//       // Specific fields for Portal RHS
//       nama_penuh_pasangan: '',
//       no_kad_pasangan: '',
//     });
//     setStage2Data({
//       nama_penuh: '',
//       no_kad_pengenalan: '',
//       no_telefon: '',
//       e_mel: '',
//       jantina: '',
//     });
//     // Scroll to the top of the form
//     scrollViewRef.current?.scrollToPosition(0, 0, true);
//   }, []);

//   // Reset the form state when the tab comes into focus
//   useFocusEffect(resetForm);

//   return (
//     <SafeAreaView style={{ backgroundColor: '#9448DA' }}>
//       <Header />
//       <KeyboardAwareScrollView 
//         style={{ backgroundColor: '#FFFFFF', marginTop: '-10%' }}
//         showsVerticalScrollIndicator={false}
//         extraScrollHeight={Platform.OS === "android" ? 70 : 20} 
//         extraHeight={Platform.OS === "android" ? 170 : 90}
//         enableOnAndroid={true} 
//         keyboardShouldPersistTaps='handled'
//         ref={scrollViewRef}
//       >
//         {/* Render the current stage */}
//         {renderStage()}
//       </KeyboardAwareScrollView>
//     </SafeAreaView>
//   );
// };

// export default AduanForm;

// // https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal%2Ffeedback&menu=81&id=Sjc3cXJZQVRIV2kyMG9SMXJlTkJTQT09

// // This screen opens a webiew to the URL Above, while keeping in mind of the safe area

// // import React from 'react';
// // import { SafeAreaView, View } from 'react-native';
// // import WebView from 'react-native-webview';
// // import Header from './FeedbackHeader';

// // const AduanForm = () => {
// //     return (
// //         <SafeAreaView style={{ backgroundColor: '#9448DA' }}>
// //             <Header />
// //             <View style={{backgroundColor: 'purple' }}>
// //                 <WebView
// //                     // source={{ uri: 'https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal%2Ffeedback&menu=81&id=Sjc3cXJZQVRIV2kyMG9SMXJlTkJTQT09' }}
// //                     source = {{ uri: 'https://www.google.com' }}
// //                     style={{ flex: 1 }}

// //                 />
// //             </View>
// //         </SafeAreaView>
// //     );
// // };

// // export default AduanForm;



import React, { useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';

const AduanForm = () => {
  const [key, setKey] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  useFocusEffect(
    useCallback(() => {
      // Reset error and loading, and change the key to force remount and reload the URL
      setHasError(false);
      setLoading(true);
      setKey(prevKey => prevKey + 1);
    }, [])
  );

  const handleReload = () => {
    setHasError(false);
    setLoading(true);
    setKey(prevKey => prevKey + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
            Sorry, the feedback form is currently unavailable. Please check your connection and try again later.
          </Text>
          <TouchableOpacity style={styles.buttonViewOne} onPress={handleReload}>
            <Text style={styles.buttonTextOne}>Reload</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={styles.loader}
            />
          )}
          <WebView
            key={key}
            source={{ uri: 'https://lppkn.sociodev.com.my/lppkngateway/frontend/web/index.php?r=feedback%2Fcreate' }}
            style={{ flex: 1 }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)} // Stop loading spinner when page is loaded
            onError={() => {
              setHasError(true);
              setLoading(false); // Stop loading spinner if there's an error
            }}
            onHttpError={() => {
              setHasError(true);
              setLoading(false); // Stop loading spinner on HTTP error
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#777777',
    fontWeight: '600'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
  buttonViewOne:{
    alignItems: "center",
    height: 45,
    width: "80%",
    backgroundColor: "#9448DA",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#973BD9",
  },    
  buttonTextOne:{
    alignItems: "center",
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default AduanForm;




