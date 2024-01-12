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
    subTextOneContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    subTextTwoContainer:{
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        // alignContent: 'center',
    }, 
    subTextOne:{
        fontSize: 20,
        fontWeight: '800',
        color: '#5C2D86',
    },
    subTextTwo:{
        fontSize: 18,
        fontWeight: '700',
        color: '#777777',
        textAlign: 'center',
    },
    carouselContainer:{
        // width: '100%',
        // height: 150,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 15,
        marginBottom: 40,
    },
    dropdownContainer:{
        width: '100%',
        marginTop: 20,
        marginBottom: 40,
    },
    galleryParentContainer:{
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10,
    },
    galleryScrollStyle:{
        width: '100%',
        height: 250,
    },
    galeriContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    galeriItemContainer:{
        width: 280,
        height: 230,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 14,
        overflow: 'hidden',
    },
    galeriImage:{
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },
});

export default styles;