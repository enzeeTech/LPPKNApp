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
        backgroundColor: "yellow",
        width: 200, 
        height: 200, 
        alignSelf: 'center', 
        marginTop: '5%',
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
    button1Style: {
        alignItems: "center",
        marginTop: "10%",
        height: 45,
        width: "80%",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#973BD9",
    },
    button2Style: {
        alignItems: "center",
        height: 45,
        width: "80%",
        marginTop: 10,
        backgroundColor: "#9448DA",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#973BD9",
        
    },
    button1Text: {
        color: "#9448DA",
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
});

export default styles;