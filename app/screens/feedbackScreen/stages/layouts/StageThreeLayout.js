import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        background: "#fff",
        width: "90%",
        marginLeft: "1.5%",
        marginTop: "15%",
    },
    pageTitle: {
        background: "#fff",
        justifyContent: "center",
        marginLeft: "2.5%",
        marginTop: "5%",
    },
    pageTitleStyle: {
        color: "#9448DA",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
    },
    langkahContainerImages: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5%",
        flexDirection: "row",
        flexShrink: 0,
    },
    bodyContainer: {
        flex: 4,
        width: '100%',
    },
    textContainer: {
        width: '69%',
        // alignItems: 'center',
        alignSelf: 'center',
    },
    mainTextStyle: {
        color: "#7931A8",
        fontSize: 17,
        fontWeight: "800",
        textAlign: 'center',
    },
    imageStyle: {
        marginTop: 5,
        marginBottom: 5,
        width: 300, 
        height: 230, 
        alignSelf: 'center', 
        resizeMode: 'contain',
        // backgroundColor: 'yellow',
    },
    imageStyleIos: {
        marginTop: 15,
        marginBottom: 15,
        width: 200, 
        height: 200, 
        alignSelf: 'center', 
        resizeMode: 'contain',
    },
    subTextStyle:{
        color: "#6D6D6D",
        fontSize: 12,
        fontWeight: "400",
        textAlign: 'center',
    },
    subTextContainer: {
        width: '80%',
        // alignItems: 'center',
        alignSelf: 'center',
    },
    btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "90%",
        marginLeft: "5%",
        marginTop: "5%",
        alignContent: "center",
    },
    btn2Container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "90%",
        marginLeft: "5%",
        marginBottom: Platform.OS === "ios" ? "50%" : "40%",
        alignContent: "center",
    },
    button1Style: {
        alignItems: "center",
        height: 45,
        width: "90%",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#973BD9",
    },
    button2Style: {
        marginTop: "2%",
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
    button1Text: {
        alignItems: "center",
        color: "#9448DA",
        textAlign: "center",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
    },
    button2Text: {
        alignItems: "center",
        color: "#FFF",
        textAlign: "center",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
    },
    errorTextStyle: {
        color: "#7931A8",
        fontSize: 29,
        fontWeight: "bold",
        textAlign: 'center',
    },
    bodyContainerError: {
        marginTop: '40%',
        width: '100%',
    },
    errorButtonStyle: {
        alignItems: "center",
        height: 45,
        width: "80%",
        marginTop: 50,
        backgroundColor: "#9448DA",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#973BD9",
    },
    errorImageStyle: {
        marginTop: 30,
        marginBottom: 15,
        width: 200, 
        height: 200, 
        alignSelf: 'center', 
        resizeMode: 'contain',
    },
});

export default styles;