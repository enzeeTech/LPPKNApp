import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, Linking, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';

const Hubungikami = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const smallestSide = Math.min(width, height);
  const longestSide = Math.max(width, height);
  const isLargeScreen = smallestSide >= 500 || longestSide >= 960;
  const largeScale = isLargeScreen ? Math.min(Math.max(longestSide / 1280, 1), 1.12) : 1;
  const styles = createStyles(isLargeScreen, largeScale);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLocationPress = () => {
    Linking.openURL('https://maps.app.goo.gl/RSNrbU3xB9sVpPhL9');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:03 2613 7555');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto: penduduk@lppkn.gov.my');
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
  const tiktokPress = () => {
    Linking.openURL('https://www.tiktok.com/@lppkn0');
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
              {/* <TouchableOpacity onPress={() => console.log('Settings Button Pressed!')}>
                <Image source={require("../../../assets/settingsIcon.png")} style={{width:25, height: 25, resizeMode: 'contain', marginTop:5}} />
              </TouchableOpacity> */}
            </View>
          </View>

          

          <View style={styles.childTwoContainer}>
            <ImageBackground
              source={require("../../../assets/background.png")}
              style={styles.imageStyle}
            >
              <View style={styles.childTwoContent}>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity onPress={handleLocationPress} style={[styles.container2, styles.locationBlock]}>
                    <Image source={require("../../../assets/locationIcon.png")} />
                    <View style={styles.textContainer}>
                      <Text style={styles.centeredText}>
                        No.12B, Bangunan LPPKN, {"\n"}Jalan Raja Laut,{"\n"} 50350
                        Kuala Lumpur
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handlePhonePress} style={[styles.container2, styles.phoneBlock]}>
                    <Image source={require("../../../assets/phoneIconUtama.png")}  />
                    <View style={styles.textContainer2}>
                      <Text style={styles.centeredText2}>03-2613 7555</Text>
                    </View>
                  </TouchableOpacity>
                  {/* <View style={styles.container2}>
                    <Image source={require("../../../assets/faxIconUtama.png")}  />
                    <View style={styles.textContainer2}>
                      <Text style={styles.centeredText2}>03-2693 7250</Text>
                    </View>
                  </View> */}
                  <TouchableOpacity onPress={handleEmailPress} style={[styles.container2, styles.locationBlock]}>
                    <Image source={require("../../../assets/emailIcon.png")}  />
                    <View style={styles.textContainer2}>
                      <Text style={styles.centeredText2}>
                        penduduk@lppkn.gov.my
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.socialmediaContainer}>
                <Text style={styles.socialTitle}>Pautan Pantas</Text>
                <View style={styles.socialRow}>
                  <TouchableOpacity onPress={handleFacebookPress} style={[styles.socialIcon, styles.firstSocialIcon]}>
                    <Image source={require("../../../assets/facebook.png")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleYouTubePress} style={[styles.socialIcon, styles.youtubeIcon]} >
                    <Image source={require("../../../assets/youtube.jpg")} style={{resizeMode: "cover"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handletwitterPress} style={styles.socialIcon} >
                    <Image source={require("../../../assets/x.jpg")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleInstagramPress} style={styles.socialIcon} >
                    <Image source={require("../../../assets/instagram.jpg")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={tiktokPress} style={[styles.socialIcon, styles.socialIconTight]} >
                    <Image source={require("../../../assets/tiktok.png")} style={{resizeMode: "contain"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleWebPress} style={styles.socialIcon} >
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
  const createStyles = (isLargeScreen, largeScale) => StyleSheet.create({
    parentContainer: {
      flexShrink: 0,
      flex: 1,
      zIndex: 1,
    },
    backgroundContainer: {
      flex: 1,
      height: "40%",
      width: '100%',
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
      fontSize: isLargeScreen ? Math.round(23 * largeScale) : 20,
      fontStyle: "normal",
      fontWeight: "600",
    },
    childTwoContainer: {
      flex: 1,
      width: "100%",
      marginTop: "60%",
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
      marginTop: "3%",
    },
    iconsContainer: {
      flex: 1,
      alignItems: "center",
      marginTop: isLargeScreen ? 36 : 0,
    },
    textContainer: {
      marginTop: "3.5%",
      marginBottom: "5%",
      alignItems: "center",
    },
    centeredText: {
      color: "#777",
      textAlign: "center",
      fontSize: isLargeScreen ? Math.round(25 * largeScale) : 16,
      fontStyle: "normal",
      fontWeight: "500",
    },
    socialmediaContainer: {
      flex: isLargeScreen ? 0.26 : 0.2,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      marginBottom: isLargeScreen ? "6%" : "11%",
    },
    container2: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    locationBlock: {
      marginTop: isLargeScreen ? 18 : 20,
    },
    phoneBlock: {
      marginTop: isLargeScreen ? 8 : -5,
    },
    textContainer2: {
      justifyContent: 'center',
      marginTop: isLargeScreen ? 20 : 5,
    },
    centeredText2: {
      color: "#777",
      textAlign: "center",
      fontSize: isLargeScreen ? Math.round(25 * largeScale) : 16,
      fontStyle: "normal",
      fontWeight: "500",
    },
    socialTitle: {
      color: "#777",
      textAlign: "center",
      fontSize: isLargeScreen ? Math.round(30 * largeScale) : 17,
      fontStyle: "normal",
      fontWeight: 'bold',
      marginBottom: isLargeScreen ? 20 : 30,
    },
    socialRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: isLargeScreen ? "8%" : (Platform.OS === "ios" ? "30%" : "40%"),
    },
    socialIcon: {
      width: isLargeScreen ? Math.round(43 * largeScale) : 40,
      height: isLargeScreen ? Math.round(43 * largeScale) : 40,
      marginRight: 15,
      marginLeft: 0,
      marginTop: isLargeScreen ? 5 : 5,
    },
    firstSocialIcon: {
      marginLeft: 20,
    },
    youtubeIcon: {
      width: isLargeScreen ? Math.round(48 * largeScale) : 45,
      height: isLargeScreen ? Math.round(48 * largeScale) : 45,
      marginTop: isLargeScreen ? 15 : 15,
      marginLeft: 0,
    },
    socialIconTight: {
      marginRight: 7,
      marginLeft: 0,
    },
  });

export default Hubungikami;
  
  
