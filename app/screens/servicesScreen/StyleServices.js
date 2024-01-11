import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#9448DA',
    },
    backgroundContainer: {
        height: 230,
        width: '100%',
    },
    backgroundImage: {
        height: 230,
        width: '100%',
        resizeMode: 'cover',
    },
    contentContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    headerContainer:{
        width: '100%',
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 30,
    },
    headerText:{
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 15,
        color: '#9448DA',
    },
    introContainer:{
        width: '100%',
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 15,
        marginBottom: 50,
    },
    introText:{
        fontSize: 14,
        marginLeft: 15,
        marginRight: 15,
        color: '#777777',
    },
    imageSliderTextContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 15,
    },  
    imageSliderText:{
        fontSize: 20,
        fontWeight: '800',
        color: '#5C2D86',
    },
    carouselContainer:{
        // width: '100%',
        // height: 150,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
});

export default styles;