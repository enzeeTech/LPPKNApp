import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from "./layouts/StageThreeLayout";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

function StageThreeError() {  

  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  

  const homeButtonPress = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <View style={{flex:1, backgroundColor:"#fff", height: height*1.05}}>
        <View style={styles.bodyContainerError}>
            <Text style={styles.errorTextStyle}>Ralat 404 </Text>
            <Image
            source={require("../../../assets/formError.png")}
            style={styles.errorImageStyle}
            />
            <View style={styles.subTextContainer}>
            <Text style={styles.subTextStyle}>Harap maaf. Aduan anda tidak dapat diteruskan. Sila semak aduan anda.</Text>
            </View>

            {/*Button*/}
            <TouchableOpacity onPress={homeButtonPress} style={styles.errorButtonStyle}>
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

export default StageThreeError;