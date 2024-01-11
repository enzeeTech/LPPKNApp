import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  {
    image: require('../../../../assets/carouselItem1.png'),
    // text: 'Menjarakkan kehamilan supaya tidak terlalu rapat.',
    text: 'Menjarakkan kehamilan',
  },
  {
    image: require('../../../../assets/perancangKeluargaBackground.png'),
    text: 'Merancang masa yang sesuai untuk mempunyai anak supaya tidak terlalu awal atau tidak terlalu lewat.',
  },
  {
    image: require('../../../../assets/carouselItem1.png'),
    text: 'Mencegah kehamilan untuk ibu yang mempunyai masalah kesihatan.',
  },
];

const ItemCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <View style={styles.imageView}>
                <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
    );

    const goToNextSlide = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < data.length) {
            flatListRef.current.scrollToIndex({ index: nextIndex });
            setCurrentIndex(nextIndex); // For debugging
        }
    };

    const goToPreviousSlide = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            flatListRef.current.scrollToIndex({ index: prevIndex });
            setCurrentIndex(prevIndex); // For debugging
        }
    };

    // Ensures that the arrow button have an assecible touch area
    const arrowButtonStyle = {
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 
        width: 50, 
    };

    return (
        <View style={styles.container}>
            {currentIndex > 0 && (
                <TouchableOpacity style={[arrowButtonStyle, { left: 0 }]} onPress={goToPreviousSlide}>
                    <Image source={require('../../../../assets/arrowLeft.png')} style={styles.arrow} />
                </TouchableOpacity>
            )}
          
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                keyExtractor={(item, index) => index.toString()}
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />
    
            {currentIndex < data.length - 1 && (
                <TouchableOpacity style={[arrowButtonStyle, { right: 0 }]} onPress={goToNextSlide}>
                    <Image source={require('../../../../assets/arrowRight.png')} style={styles.arrow} />
                </TouchableOpacity>
            )}
        </View>
    );
};

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        },
        slide: {
            marginLeft: 12.5,
            marginRight: 12.5,
            width: width - 25,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageView: {
            borderRadius: 14,
            overflow: 'hidden', 
            width: width * 0.70,
            height: width * 0.45,
        },
        image: {
            width: '100%',
            height: '100%',
        },
        textContainer: {
            marginTop: 10,
            width: width * 0.6,
            alignContent: 'center',
            justifyContent: 'center',
        },
        text: {
            textAlign: 'center',
            fontSize: 13,
            color: '#777777',
            fontWeight: 'bold',
        },
        arrow: {
            resizeMode: 'contain',
            width: 30,
            height: 30,
            // marginBottom: width * 0.15,
            // marginBottom: '50%',
        },
      });
      
export default ItemCarousel;


