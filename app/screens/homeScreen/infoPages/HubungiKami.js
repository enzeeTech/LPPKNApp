import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, Linking, TouchableOpacity, Platform } from 'react-native';

const Hubungikami = ({ navigation }) => {

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Linking URL to touch buttons
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/lppkn');
  };
  const handletwitterPress = () => {
    Linking.openURL('https://twitter.com/LPPKN');
  };
  const handleYouTubePress = () => {
    Linking.openURL('https://www.youtube.com/@lppknhq');
  };
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/lppkn');
  };
  const handleWebPress = () => {
    Linking.openURL('https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal%2Findex');
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9448DA" }}>
      <View style={styles.parentContainer}>
          <ImageBackground
              source={require("../../../assets/backgroundLPPKNHQ.png")}
              style={styles.backgroundContainer}
          >
          <View style={styles.headerStyle}>
            <TouchableOpacity onPress={handleBackPress}
              style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: 40,
                  marginTop: Platform.OS === "ios" ? "15%" : "17%",
                  marginLeft: "5%",
                  alignItems: "center",
              }}
            >
              <Image source={require("../../../assets/backArrowKey.png")} style={{width:30, height: 30, resizeMode: 'contain'}} />
            </TouchableOpacity>
            <View
              style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: Platform.OS === "ios" ? "15%" : "17%",
                  marginLeft: "-30%",
              }}
            >
              <Text style={styles.utamaStyle}>Utama</Text>
            </View>
            <View 
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: "5%",
                marginTop: Platform.OS === "ios" ? "15%" : "17%",
                width: 25,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                <Image source={require("../../../assets/settingsIcon.png")} style={{width:25, height: 25, resizeMode: 'contain', marginTop:5}} />
              </TouchableOpacity>
            </View>
          </View>

          

          <View style={styles.childTwoContainer}>
            <ImageBackground
              source={require("../../../assets/background.png")}
              style={styles.imageStyle}
            >
              <View style={styles.childTwoContent}>
                <View style={styles.iconsContainer}>
                  <Image source={require("../../../assets/locationIcon.png")} />
                  <View style={styles.textContainer}>
                    <Text style={styles.centeredText}>
                      No.12B, Bangunan LPPKN, {"\n"}Jalan Raja Laut,{"\n"} 50350
                      Kuala Lumpur
                    </Text>
                  </View>
                  <Image source={require("../../../assets/phoneIconUtama.png")} />
                  <View style={styles.textContainer}>
                    <Text style={styles.centeredText}>03-2613 7555</Text>
                  </View>
                  <Image source={require("../../../assets/faxIconUtama.png")} />
                  <View style={styles.textContainer}>
                    <Text style={styles.centeredText}>03-2693 7250</Text>
                  </View>
                  <Image source={require("../../../assets/emailIcon.png")} />
                  <View style={styles.textContainer}>
                    <Text style={styles.centeredText}>
                      penduduk@lppkn.gov.my
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.socialmediaContainer}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS === "ios" ? "30%" : "40%",
                  }}
                >
                  <TouchableOpacity onPress={handleFacebookPress}style={{width: 40, height: 40, marginRight: 15, marginLeft: 10}} >
                    <Image source={require("../../../assets/facebook.png")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleYouTubePress} style={{width: 45, height: 45, marginRight: 15, marginTop:15}} >
                    <Image source={require("../../../assets/youtube.jpg")} style={{resizeMode: "cover"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handletwitterPress} style={{width: 40, height: 40, marginRight: 15, marginTop:5}} >
                    <Image source={require("../../../assets/x.jpg")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleInstagramPress} style={{width: 40, height: 40, marginRight: 15, marginTop:5}} >
                    <Image source={require("../../../assets/instagram.jpg")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleWebPress} style={{width: 40, height: 40, marginRight: 15, marginTop:5}} >
                    <Image source={require("../../../assets/web.jpg")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

  //Hubungikami page style
  const styles = StyleSheet.create({
    parentContainer: {
      flexShrink: 0,
      flex: 1,
      zIndex: 1,
    },
    backgroundContainer: {
      flex: 1,
      height: "25%",
      marginTop: Platform.OS === "ios" ? "0%" : "7%",
      zIndex: -1,
      resizeMode: "contain",
    },
    headerStyle: {
      position: "absolute",
      top: 0,
      flexDirection: "row",
      height: 130,
      marginTop: -70,
      width: "100%",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: "#9448DA",
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 2,
    },
    utamaStyle: {
      marginLeft: "10%",
      color: "#F5F5F5",
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: "600",
    },
    childTwoContainer: {
      flex: 1,
      width: "100%",
      marginTop: "45%",
    },
    imageStyle: {
      flex: 1,
      width: "auto",
      resizeMode: "cover",
      borderRadius: 24,
      backgroundColor: "white",
      overflow: "hidden",
    },
    childTwoContent: {
      flex: 1,
      alignItems: "center",
      marginTop: "5%",
    },
    iconsContainer: {
      flex: 1,
      alignItems: "center",
    },
    textContainer: {
      marginTop: "3.5%",
      marginBottom: "5%",
      alignItems: "center",
    },
    centeredText: {
      color: "#777",
      textAlign: "center",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "500",
    },
    socialmediaContainer: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Hubungikami;
  
  