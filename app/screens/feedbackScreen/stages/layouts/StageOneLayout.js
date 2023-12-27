import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      background: "#fff",
    //   justifyContent: "center",
      width: "90%",
      marginLeft: "1.5%",
      marginTop: "15%",
    },
    pageTitle: {
      background: "#fff",
      justifyContent: "center",
      margin: "4%",
    },
    pageTitleStyle: {
      color: "#9448DA",
      // fontFamily: "Roboto",
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: 20,
    },
    langkahContainerImages: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "5%",
      marginLeft: "5%",
      marginRight: "5%",
      flexDirection: "row",
      flexShrink: 0,
  },
  
    langkahElements: {
      resizeMode: "contain",
      alignItems: "center",
      margin: "1%",
    },
    langkahTitleOn: {
      margin: "4%",
      color: "#7931A8",
      textAlign: "center",
      // fontFamily: "Inter",
      fontSize: 11.5,
      fontStyle: "normal",
      fontWeight: "600",
    },
  
    langkahTextOn: {
      color: "#777",
      textAlign: "center",
      // fontFamily: "SF Pro Display",
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "900",
      lineHeight: 10,
    },
    langkahTitle: {
      margin: "4%",
      color: "#CECECE",
      textAlign: "center",
      // fontFamily: "Inter",
      fontSize: 11.5,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 11.5,
    },
    langkahText: {
      color: "#CECECE",
      textAlign: "center",
      // fontFamily: "SFProDisplay-Bold",
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "900",
      lineHeight: 10,
    },
  
    formContainer: {
      flex: 1,
      width: "100%",
      margin: "4%",
    },
    inputContainer: {
      width: "100%",
      marginBottom: "3%",
    },
    titleStyle: {
      color: "#5C2D86",
      // fontFamily: "Roboto",
      fontSize: 13,
      // fontStyle: "normal",
      fontWeight: "700",
      lineHeight: 20,
    },
    inputField: {
      flexDirection: "row",
      borderRadius: 8,
      borderColor: "#ADB5BD",
      width: "100%",
      height: 49,
      borderWidth: 1,
      borderColor: "#A1A1A1", // Border color when there's text input
      padding: "1.3%",
      // fontFamily: "Roboto",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "400",
      color: "#000", // Text color when there's text input
      // placeholderTextColor: "#A1A1A1", // placeholder text color
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    //   marginBottom: "10%",
      marginTop: "5%",
    //   marginLeft: "1%",
    },
    buttonContainer: {
      height: 60,
      justifyContent: "space-evenly",
      alignItems: "center",
      // padding: "5%",
      flexDirection: "row",
      backgroundColor: "#F4EDF9",
      borderWidth: 3,
      borderColor: "#7931A8",
      borderRadius: 28,
      width: 160,
    },
    infoText: {
      alignItems: "flex-start",
      width: "50%",
      color: "#6D6D6D",
      // fontFamily: "Inter",
      fontSize: 11,
      fontStyle: "italic",
      fontWeight: "400",
      marginTop: 8,
      // lineHeight: "normal",
    },
    buttonImage: {
      resizeMode: "contain",
      flexShrink: 0,
    },
    buttonText: {
      color: "#4A007D",
      textAlign: "center",
      // fontFamily: "Inter",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "700",
      // lineHeight: "normal",
    },
    fileDetailsText: {
      fontSize: 16,
    },
    seterusyaButtonContainer: {
      alignItems: "center",
      flex: 1,
      width: "100%",
      marginBottom: Platform.OS === "ios" ? "50%" : "60%",
      alignContent: "center",
    },
    seterusyaButton: {
      alignItems: "center",
      height: 45,
      width: "90%",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#9448DA",
      backgroundColor: "#9448DA",
    },
    seterusyaButtonText: {
      alignItems: "center",
      color: "#FFF",
      textAlign: "center",
      // fontFamily: "Roboto",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "700",
      // lineHeight: "normal",
    },
    dropdown: {
      // Basic style for the dropdown
      height: 50,
      borderColor: '#ADB5BD',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownContainer: {
      backgroundColor: '#F8F6FF',
      borderRadius: 8, 
    },
    selectedText: {
      // Style for the selected item text
      fontSize: 12,
      fontWeight: '600',
      color: '#6D6D6D',
    },
    placeholderStyle: {
      // Style for the placeholder text
      color: '#A1A1A1',
      fontSize: 14,
    },
    item: {
      // Style for each dropdown item
      padding: 10,
      borderBottomColor: 'transparent',
      borderBottomWidth: 1,
    },
    itemText: {
      // Style for the text of each item
      fontSize: 12,
      fontWeight: '600',
      color: '#6D6D6D',
    },
    documentItem: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white', // A light purple background or any other color that matches your app theme
      // borderColor: '#9448DA',
      // borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5,
      // padding: 10,
    },
    fileDetailsContainer: {
      width: '45%',
      height: 'auto',
    },
    documentTitle: {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: '700',
      color: '#777777',
    },
  
  });

  export default styles;