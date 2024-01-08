import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from "./layouts/StageThreeLayout";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

function StageThree({formData}) {  

  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');


  // BUTTON PRESS FUNCTIONS
  const handleLinkPress = async () => {
    const url = 'https://example.com';
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);
  
    if (supported) {
      // Open the link
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  const homeButtonPress = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <View style={{flex:1, backgroundColor:"#fff", height: height*1.05}}>
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
              source={require("../../../assets/langkah3Active.png")}
              style={{width: 90, height: 90, resizeMode: 'contain'}}
            />  
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainTextStyle}>Aduan anda telah berjaya dihantar! Sila semak emel untuk mendapatkan nombor rujukan kepada aduan anda. </Text>
        </View>
        {/* {Platform.OS === 'android' ? (
        // Show Lottie animation for Android
          <LottieView
            source={require("../../../assets/Json/mailAnimation/JSON/data.json")} 
            autoPlay
            loop
            style={styles.imageStyle}
            />
        ) : (
        // Show Image for iOS
          <Image
            source={require("../../../assets/formSuccess.png")}
            style={styles.imageStyleIos}
          />
        )} */}
        <LottieView
          source={require("../../../assets/Json/mailAnimation/JSON/data.json")} 
          autoPlay
          loop
          style={styles.imageStyle}
        />
        <View style={styles.subTextContainer}>
          <Text style={styles.subTextStyle}>Aduan anda akan dibalas selewat-lewatnya 3(tiga) hari waktu bekerja. Manakala aduan yang memerlukan siasatan lanjut akan dibalas selewat-lewatnya 7(tujuh) hari bekerja.</Text>
        </View>

        {/*Buttons*/}
          <TouchableOpacity style={styles.button1Style}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.button1Text}>
                  Semak Status Aduan
                </Text>
              </View>
              <Image source={require("../../../assets/linkIcon.png")} style={{width:20, height:20, resizeMode: 'contain', marginLeft: 10}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={homeButtonPress} style={styles.button2Style}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.button2Text}>
                  Kembali ke Laman Utama
                </Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>   
  );
}

export default StageThree;