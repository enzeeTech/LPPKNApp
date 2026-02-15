import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableWithoutFeedback, Linking } from "react-native";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from "expo-linear-gradient";

const ContentSlider = ({ contents }) => {
  const width = Dimensions.get('window').width;
  
  // DETEKSI TABLET/LAYAR LEBAR
  const isTablet = width > 600;

  // RASIO DINAMIS:
  // Jika Tablet: Gunakan rasio aspek yang lebih lebar (9/21) agar tidak terlalu tinggi di layar 32"
  // Jika HP: Gunakan rasio aspek standar (9/16 atau 9/18) agar gambar terlihat jelas
  const dynamicHeight = isTablet ? width * (9 / 21) : width * (9 / 18); 

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef();
  const isAutoScrolling = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    if (!contents || contents.length <= 1) return;

    const interval = setInterval(() => {
      isAutoScrolling.current = true;
      const nextIndex = currentIndex < contents.length - 1 ? currentIndex + 1 : 0;
      
      flatlistRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setCurrentIndex(nextIndex);
      
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, contents.length]);

  // Mengurutkan konten berdasarkan tanggal publikasi terbaru
  const sortedContents = useMemo(() => {
    return [...contents].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }, [contents]);

  // Handle Manual Scroll
  const handleScroll = (event) => {
    if (isAutoScrolling.current) return; 
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const renderContent = ({ item }) => {
    const handlePress = () => {
      if (!isAutoScrolling.current && item.link) {
        Linking.openURL(item.link).catch(err => console.error("Couldn't load page", err));
      }
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={{ width: width, height: dynamicHeight }}>
          {item.type === 'image' ? (
            <Image 
              source={item.source} 
              style={{ width: '100%', height: dynamicHeight, resizeMode: 'cover' }} 
            />
          ) : (
            <Video
              source={item.source}
              style={{ width: width, height: dynamicHeight }}
              resizeMode={ResizeMode.COVER}
              shouldPlay
              isLooping
              isMuted
            />
          )}
          
          <LinearGradient
            colors={['transparent', 'rgba(93,46,134,0.4)', 'rgba(93,46,134,0.9)', 'rgba(93,46,134,1)']}
            style={styles.gradient}
          >
            <Text style={[styles.title, { fontSize: isTablet ? 24 : 18 }]} numberOfLines={2}>{item.title}</Text>
            <Text style={[styles.subtitle, { fontSize: isTablet ? 16 : 13 }]} numberOfLines={1}>{item.subtitle}</Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderDotIndicators = () => {
    return sortedContents.map((_, index) => (
      <View
        key={`dot-${index}`}
        style={[
          styles.dot,
          {
            width: index === currentIndex ? (isTablet ? 40 : 30) : 8,
            backgroundColor: index === currentIndex ? '#21CF44' : '#D9D9D9',
          }
        ]}
      />
    ));
  };

  return (
    <View style={{ height: dynamicHeight, width: width }}>
      <FlatList 
        data={sortedContents} 
        ref={flatlistRef}
        renderItem={renderContent}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
      />
      
      <View style={styles.dotContainer}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%', 
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 25, 
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  subtitle: {
    color: 'white',
    marginBottom: 15,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ContentSlider;