import React from 'react';
import { ImageBackground, Platform } from 'react-native';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const sliderImageHeight = screenHeight * 0.3;

// Slider images **ADD IMAGES FROM DATABASE HERE**
const sliderImages = [
    require('../../assets/beritaInfoImage.png'),
    require('../../assets/nextImage.png'),
    require('../../assets/testImageBulletin.png'),
  ];

const InfoSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    // Listen to slide event for the pagination animation
    const onScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundedIndex = Math.round(index);

        setActiveSlide(roundedIndex);
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
                {sliderImages.map((image, index) => (
                <Image
                    key={index}
                    source={image}
                    style={styles.image}
                />
                ))}
            </ScrollView>
            <View style={styles.innerContainer}>
                <View style={styles.paginationWrapper}>
                        {sliderImages.map((_, index) => (
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
                        SAMBUTAN HARI WANITA ANTARABANGSA DI DEWAN PERDANA FELDA
                    </Text>
                </View>
                <View style={styles.subHeaderContainer}>
                    <Image source={require('../../assets/calendarIcon.png')} style={styles.calendarIcon} />
                    <Text style={styles.subHeaderText}>
                        9 Mac 2023
                    </Text>
                    <TouchableOpacity style={styles.shareIcon} onPress={() => console.log('Share Button Pressed!')}>
                        <Image source={require('../../assets/shareIcon.png')} style={styles.shareIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.body}>
                    {/*Old code, adds gradient effect*/}
                    {/* <Text style={styles.body} numberOfLines={expanded ? null : Platform.OS === 'ios' ? 8 : 12}> */} {/*Old code, had gradient effect*/}
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis sed risus sollicitudin cursus. Nam a congue nibh. Etiam ullamcorper, sem in sollicitudin imperdiet, odio nisi cursus erat, pellentesque interdum lorem ipsum sit amet urna. Fusce sit amet nibh ut nisi auctor dictum. Pellentesque tortor lacus, dignissim id orci ut, cursus dignissim eros. Integer aliquet malesuada leo et maximus. Donec fermentum justo vel leo egestas cursus. Integer iaculis tincidunt velit vitae posuere. Sed fermentum consectetur orci, quis lobortis nisl pretium vitae. Fusce eu accumsan purus. Vivamus et lacinia eros, ac faucibus urna. Nunc eget ante lacus. Cras placerat facilisis malesuada.\n\n' +  
                        'Nulla facilisi. Etiam iaculis, elit non iaculis sollicitudin, libero erat tincidunt felis, auctor facilisis mi ex nec lectus. Praesent accumsan sem id metus rutrum varius. Quisque porta, justo et pulvinar elementum, ante orci malesuada velit, et viverra massa quam eu mauris. Morbi consequat elit diam, vel gravida mi vestibulum et. Mauris pharetra imperdiet ullamcorper. Praesent auctor enim tellus, id vulputate velit tincidunt sit amet. Integer ut iaculis est, eu blandit libero. Aliquam ultrices urna at lacinia mollis. Ut faucibus elementum dui et tempus.\n\n' +'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis sed risus sollicitudin cursus. Nam a congue nibh. Etiam ullamcorper, sem in sollicitudin imperdiet, odio nisi cursus erat, pellentesque interdum lorem ipsum sit amet urna. Fusce sit amet nibh ut nisi auctor dictum. Pellentesque tortor lacus, dignissim id orci ut, cursus dignissim eros. Integer aliquet malesuada leo et maximus. Donec fermentum justo vel leo egestas cursus. Integer iaculis tincidunt velit vitae posuere. Sed fermentum consectetur orci, quis lobortis nisl pretium vitae. Fusce eu accumsan purus. Vivamus et lacinia eros, ac faucibus urna. Nunc eget ante lacus. Cras placerat facilisis malesuada. \n\n' + 
                        'Nulla facilisi. Etiam iaculis, elit non iaculis sollicitudin, libero erat tincidunt felis, auctor facilisis mi ex nec lectus. Praesent accumsan sem id metus rutrum varius. Quisque porta, justo et pulvinar elementum, ante orci malesuada velit, et viverra massa quam eu mauris. Morbi consequat elit diam, vel gravida mi vestibulum et. Mauris pharetra imperdiet ullamcorper. Praesent auctor enim tellus, id vulputate velit tincidunt sit amet.Integer ut iaculis est, eu blandit libero. Aliquam ultrices urna at lacinia mollis. Ut faucibus elementum dui et tempus.'}
                    </Text>
                    
                    {/*Old code, adds gradient effect*/}
                    {/* {!expanded && (
                        <LinearGradient
                            colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
                            style={styles.gradient}
                            locations={[0, 0.5, 1]}
                        >
                            <TouchableOpacity style={styles.loadMoreItemContainer} onPress={() => setExpanded(true)}>
                                <Image source={require('../../assets/downArrow.png')} style={styles.downArrowIcon} />
                                <Text style={styles.loadMoreText}>Selanjutnya</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    )} */}
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
        marginTop: '-4%',
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
        marginBottom: 70,
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
});

export default InfoSection;

