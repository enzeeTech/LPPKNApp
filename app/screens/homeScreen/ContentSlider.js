import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Video, ResizeMode } from 'expo-av';
import { useRef, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Linking } from "react-native";
import { useMemo } from "react";


const ContentSlider = ({contents}) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef();
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isAutoScrolling.current = true; // Indicate that auto-scrolling starts
      const nextIndex = currentIndex < contents.length - 1 ? currentIndex + 1 : 0;
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        isAutoScrolling.current = false; // Reset after the scroll animation duration
      }, 500); // Assuming the scroll animation takes less than 500ms
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, contents.length]);

  const sortedContents = useMemo(() => {
    return [...contents].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }, [contents]);
  

  // Display Images and Videos
  const renderContent = ({ item, index }) => {
    const handlePress = () => {
      if (!isAutoScrolling.current && item.link) {
        Linking.openURL(item.link);
      }
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={{ width: width, height: 230 }}>
          {item.type === 'image' ? (
            <Image source={item.source} style={styles.image} />
          ) : (
            
              <Video
                source={item.source}
                style={{ width: width, height: 230,}}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping
                isMuted
              />
          )}
          <LinearGradient
            colors={['rgba(93,46,134,0)', 'rgba(93,46,134,0.3)', 'rgba(93,46,134,0.6)', 'rgba(93,46,134,0.9)', 'rgba(93,46,134,1)']}
            style={styles.gradient}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  // Render Dot Indicators
  const renderDotIndicators = () => {
    return sortedContents.map((dot, index) => (
      <View
        key={`dot-${index}`}
        style={{
          height: 8,
          width: index === currentIndex ? 40 : 8,
          borderRadius: 4,
          backgroundColor: index === currentIndex ? '#21CF44' : '#D9D9D9',
          marginHorizontal: 4,
          marginBottom: 25,
        }}
      />
    ));
  };

  // Handle Scroll
  const handleScroll = (event) => {
    if (isAutoScrolling.current) return; // Ignore scroll events triggered by auto-scrolling
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  }

  

  return (
    <View style={{height:230, width: width}}>
      <FlatList 
        data = {sortedContents} 
        ref={flatlistRef}
        renderItem={renderContent}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator = {false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <View style={{height:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',alignContent: 'center', backgroundColor: 'pink'}}>
        {renderDotIndicators()}
      </View>
    </View>
  );


  
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'conver',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    // marginLeft: 5,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
    // marginLeft: 5,
  },
});


export default ContentSlider;