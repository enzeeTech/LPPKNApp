import React from 'react';
import { Alert, ImageBackground, Platform } from 'react-native';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { openURL } from 'expo-linking';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const sliderImageHeight = screenHeight * 0.3;

const SorotanArticleBody = ({title, date, images, information, link}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Listen to slide event for the pagination animation
    const onScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundedIndex = Math.round(index);

        setActiveSlide(roundedIndex);
    };

    // Function to open link if link is available
    const openLink = async () => {
        if (link) {
            await openURL(link);
        }
        else {
            //Alert user that there is no link available
            Alert.alert(
                "Tiada maklumat lanjut",
                "Maaf, maklumat lanjut tidak disediakan untuk artikel ini.",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                style={styles.scrollViewStyle} 
            >
                {images?.map((image, index) => (
                    <Image
                        key={index}
                        source={{uri: image.url}}
                        style={styles.image}
                    />
                ))}
            </ScrollView>
            <View style={styles.innerContainer}>
                <View style={styles.paginationWrapper}>
                        {images?.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.paginationDot,
                                    index === activeSlide ? styles.activeDot : null,
                                ]}
                            />
                        ))}
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
                <View style={styles.subHeaderContainer}>
                    <Image source={require('../../../assets/calendarIcon.png')} style={styles.calendarIcon} />
                    <Text style={styles.subHeaderText}>
                        {date}
                    </Text>

                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.body}>
                        {information}
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.buttonViewTwo,
                                !link && styles.buttonDisabled 
                            ]}
                            onPress={openLink}
                            disabled={!link} 
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.buttonTextTwo}>Maklumat Lanjut</Text>
                                <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        marginTop: '-7%',
    },
    headerContainer: {
        flexDirection: 'column',    
        marginLeft: 15,
        marginTop: '3%', 
        width: '95%',
        justifyContent: 'space-evenly',
        zIndex: 5,
    },
    headerText: {
        color: '#9448DA',
        fontWeight: 'bold',
        fontSize: 24,
    },
    subHeaderContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: '2%', 
        width: '94%',
        height: 50,
    },
    subHeaderText: {
        color: '#777777',
        fontSize: Platform.OS === 'ios' ? 15 : 16,
        fontWeight: '600',
        marginLeft: '4.5%',
        marginTop: Platform.OS === 'ios' ? 14 : 11,
    },
    calendarIcon: {
        width: 25,
        height: 25,
        marginTop: '2.5%',
        resizeMode: 'contain',
    },
    shareIcon: {
        width: 23,
        height: 23,
        marginLeft: 'auto',
        marginRight: '2%',
        marginTop: '2.5%',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        width: '100%',
        marginLeft: '5%',
        marginTop: '3%',
    },
    body: {
        color: '#777777',
        fontSize: Platform.OS === 'ios' ? 14 : 15,
        fontWeight: '600',
        textAlign: 'justify',
        marginBottom: Platform.OS === 'ios' ? 70 : 100,
        width: '90%',
    },
    loadMoreItemContainer: {
        height: Platform.OS === 'ios' ? 120 : 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        marginRight: '5%',
        zIndex: 1,
    },
    loadMoreText: {
        fontSize: 20,
        color: '#5C2D86',
        textAlign: 'center',
        paddingLeft: 20, 
        height: Platform.OS === 'ios' ? 40 : 40,
        fontWeight: '600',
        marginTop: Platform.OS === 'ios' ? 105 : 123,
    },
    downArrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 90 : 110,
        marginRight: -10,
    },
    gradient: {
        position: 'absolute',
        left: -20,
        right: 0,
        bottom: Platform.OS === 'ios' ? 10 : 50,
        height: 200,
        zIndex: 1,
    },
    scrollViewStyle: {
        width: screenWidth,
        height: sliderImageHeight,
    },
    image: {
        width: screenWidth,
        height: sliderImageHeight,
        resizeMode: 'cover',
        backgroundColor: 'white',
    },
    paginationWrapper: {
        marginTop: 13,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 4,
    },
    activeDot: {
        width: 40, 
        backgroundColor: '#21CF44', 
        borderRadius: 4,
        height: 8,
    },
    buttonContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonViewTwo:{
        alignItems: "center",
        height: 45,
        width: "60%",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#973BD9",
    },
    buttonTextTwo:{
        color: "#9448DA",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
    },
    buttonDisabled: {
        opacity: 0.4
    },
});

export default SorotanArticleBody;

