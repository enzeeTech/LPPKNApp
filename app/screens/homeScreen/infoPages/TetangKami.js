import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isLargeScreen = screenWidth >= 500;


function TetangKami({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
      };


    return (
      <SafeAreaView style={{ flex: 1,backgroundColor: "#9448DA" }}>
        <View style={styles.parentContainer}>
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
                <Image source={require("../../../assets/backArrowKey.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
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
                        <Image source={require("../../../assets/settingsIcon.png")} style={{width:25, height: 25, resizeMode: 'contain', marginTop:5}}/>
                    </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled={!isLargeScreen}
            >
                <ImageBackground
                    source={require("../../../assets/backgroundLPPKNHQ.png")}
                    style={styles.backgroundContainer}
                ></ImageBackground>

                <View style={styles.childTwoContainer}>
                    <ImageBackground
                    source={require("../../../assets/backgroundLong.png")}
                    style={styles.imageStyle}
                    >
                    <View style={styles.childTwoContent}>
                        <View style={styles.iconsContainer}>
                        <Image source={require("../../../assets/buildingIcon.png")} style={{width:50, height: 50, resizeMode: "contain"}} />
                        <View style={[styles.textContainer, {marginTop: -5}]}>
                            <Text style={styles.titleStyle}>Mengenai LPPKN</Text>
                            <Text style={styles.centeredText}>
                            Lembaga Penduduk dan Pembangunan Keluarga Negara (LPPKN)
                            adalah agensi di bawah Kementerian Pembangunan Wanita,
                            Keluarga dan Masyarakat (KPWKM). {"\n"}
                            {"\n"}Telah ditubuhkan pada tahun 1966 sebagai sebuah
                            badan berkanun dengan nama asalnya bermula dengan
                            Program Perancang Keluarga, fungsi LPPKN kini
                            diperluaskan kepada kependudukan, pembangunan keluarga,
                            dan kesihatan reproduktif selaras dengan pindaan akta
                            pada tahun 1984.
                            </Text>
                        </View>

                        {/* <Image source={require("../../../assets/eyeIcon.jpg")} /> */}
                        <View style={styles.textContainer}>
                            <Text style={[styles.titleStyle, {marginTop: -25, fontSize: isLargeScreen ? 30 : styles.titleStyle.fontSize}]}>Visi</Text>
                            <Text style={[styles.centeredText, {fontSize: isLargeScreen ? 20 : styles.centeredText.fontSize}]}>
                            Menjadi organisasi kecemerlangan {"\n"}penduduk dan
                            keluarga.
                            </Text>
                        </View>
                        {/* <Image source={require("../../../assets/rocketIcon.png")} /> */}
                        <View style={[styles.textContainer,{marginTop: -20}]}>
                            <Text style={[styles.titleStyle, {marginTop: -5, fontSize: isLargeScreen ? 30 : styles.titleStyle.fontSize}]}>Misi</Text>
                            <Text style={[styles.centeredText, {fontSize: isLargeScreen ? 20 : styles.centeredText.fontSize}]}>
                            Memacu agenda kependudukan dan kekeluargaan yang
                            inovatif melalui dasar, kajian, demografi keluarga,
                            program dan perkhidmatan.
                            </Text>
                        </View>

                        {/* <Image source={require("../../../assets/awardIcon.png")} /> */}
                        <View style={[styles.textContainer,{marginTop: -10}]}>
                            <Text style={[styles.titleStyle, {marginTop: -5}]}>Nilai Bersama</Text>
                        </View>
                        </View>
                        <View style={styles.nilaibersamaParentContainer}>
                        <View style={styles.nilaibersamaChildContainer}>
                            <View style={styles.nilaibersamaElements}>
                            <Image
                                source={require("../../../assets/kerjaBerpasukanTile.png")}
                                style={{height: 80, width: 80, resizeMode: "contain"}}
                            />
                            <Text style={[styles.elementStyle, {marginTop: 15}]}>Kerja Berpasukan</Text>
                            </View>
                            <View style={styles.nilaibersamaElements}>
                            <Image
                                source={require("../../../assets/amanahTile.png")}
                                style={{height: 80, width: 80, resizeMode: "contain"}}
                            />
                            <Text style={[styles.elementStyle, {marginTop: 23}]}>Amanah</Text>
                            </View>
                        </View>
                        <View style={styles.nilaibersamaChildContainer}>
                            <View style={styles.nilaibersamaElements}>
                            <Image
                                source={require("../../../assets/sayangiOrganisasiTile.png")}
                                style={{height: 80, width: 80, resizeMode: "contain"}}
                            />
                            <Text style={[styles.elementStyle, {marginTop: 15}]}>Sayangi Organisasi</Text>
                            </View>
                            <View style={styles.nilaibersamaElements}>
                                <View style={{marginTop: 20}} >
                                    <Image
                                        source={require("../../../assets/IlmuTile.png")}
                                        style={{height: 80, width: 80, resizeMode: "contain"}}
                                    />
                                </View>
                                <View >
                                    <Text style={[styles.elementStyle, {marginTop: 25, marginBottom:25}]}>Ilmu</Text> 
                                </View>
                            </View>
                        </View>
                        <View style={styles.nilaibersamaChildContainer}>
                            <View style={styles.nilaibersamaElements}>
                                <View style={{marginTop: 20}} >
                                    <Image
                                        source={require("../../../assets/HormatTile.png")}
                                        style={{height: 80, width: 80, resizeMode: "contain"}}
                                    />
                                </View>
                                <View >
                                    <Text style={[styles.elementStyle, {marginTop: 25}]}>Hormat</Text> 
                                </View>
                            </View>
                        </View>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  export default TetangKami;
  
  //Tentang Kami page style:
  const styles = StyleSheet.create({
    parentContainer: {
      flexShrink: 0,
      flex: 1,
    },
    backgroundContainer: {
      flex: isLargeScreen ? undefined : 1,
      width: isLargeScreen ? "100%" : 422,
      height: isLargeScreen ? Math.round(screenHeight * 0.38) : 237,
      resizeMode: "contain",
      marginTop: isLargeScreen ? (Platform.OS === "ios" ? "0%" : "7%") : 50,
      zIndex: isLargeScreen ? -1 : 0,
    },
    headerStyle: {
      position: "absolute",
      top: 0,
      flexDirection: "row",
      height: 130,
      marginTop: Platform.OS === "ios" ? -65 : -40,
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
    //   lineHeight: "normal",
    },
    childTwoContainer: {
        flex: 1,
        width: 422,
        marginTop: isLargeScreen ? -10 : -25,
        width: "100%",
    zIndex: 1,
    },
    imageStyle: {
      flex: 1,
      width: "auto",
      height: "auto",
      resizeMode: "cover",
      borderRadius: 24,
      backgroundColor: "white",
      overflow: "hidden",
    },
    childTwoContent: {
      flex: 1,
      alignItems: "center",
      marginTop: isLargeScreen ? "6%" : "10%",
    },
    iconsContainer: {
      flex: 1,
      alignItems: "center",
    },
    textContainer: {
        marginBottom: isLargeScreen ? "9%" : "20%",
        alignItems: "center",
        paddingRight: "10%",
        paddingLeft: "10%",
        //   lineHeight: "normal",
    },
  
    titleStyle: {
      marginTop: "3.5%",
      color: "#9448DA",
      textAlign: "center",
      fontSize: isLargeScreen ? 30 : 28,
      fontStyle: "normal",
      fontWeight: "bold",
    //   lineHeight: "normal",
    },
    centeredText: {
      marginTop: "3.5%",
      color: "#777",
      textAlign: "center",
      fontSize:  isLargeScreen ? 20 : 14,
      fontStyle: "normal",
      fontWeight: "400",
    //   lineHeight: "normal",
    },
    nilaibersamaParentContainer: {
      width: "100%",
      marginTop: isLargeScreen ? "-8%" : "-15%",
      marginBottom: "30%",
      flexDirection: isLargeScreen ? "row" : "column",
      justifyContent: "center",
      alignItems: isLargeScreen ? "flex-start" : "stretch",
    },
    nilaibersamaChildContainer: {
      width: isLargeScreen ? "auto" : "100%",
      flexDirection: "row",
      justifyContent: "center",
    },
    nilaibersamaElements: {
      margin: isLargeScreen ? 27 : "2%",
      padding: "3%",
      width: 165,
      height: 175,
      borderRadius: 40,
      backgroundColor: "#F4EBFF",
      justifyContent: "center",
      alignItems: "center",
    //   lineHeight: "normal",
    },
  
    elementStyle: {
      margin: "6%",
      color: "#5C2D86",
      textAlign: "center",
      fontSize: isLargeScreen ? 20 : 15,
      fontStyle: "normal",
      fontWeight: "700",
    //   lineHeight: "20.878",
    },
  });
  
  
  
