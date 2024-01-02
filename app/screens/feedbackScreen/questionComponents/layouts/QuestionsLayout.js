import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputContainer: {
        width: "100%",
        marginTop: "3%",
        marginBottom: "3%",
    },
    smallContainer: {
        width: "40%",
        marginTop: "3%",
        marginBottom: "3%",
    },
    titleStyle: {
        color: "#5C2D86",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
    },
    inputField: {
        flexDirection: "row",
        borderRadius: 8,
        borderColor: "#ADB5BD",
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#A1A1A1", // Border color when there's text input
        padding: "1.3%",
        fontSize: 14,
        fontWeight: "400",
        color: "black", // Text color when there's text input
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
    dropdown: {
        // Basic style for the dropdown
        height: 50,
        borderColor: '#ADB5BD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    calendarInputStyle: {
        color: "black", 
        marginRight: '-4%', 
        // marginLeft: '5%', 
        flexDirection: "row",
        borderRadius: 8,
        borderColor: "#ADB5BD",
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#A1A1A1", // Border color when there's text input
        padding: "1.3%",
        fontSize: 14,
        fontWeight: "400",
    }
});

export default styles;