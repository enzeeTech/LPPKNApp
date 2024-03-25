// import React, { useState, useEffect } from 'react';
// import { View, TouchableWithoutFeedback, Image, Linking } from 'react-native';
// import Swiper from 'react-native-swiper';
// import { Video } from 'expo-av';

// const ContentSlider = ({ contents }) => {
//   const [swiperIndex, setSwiperIndex] = useState(0);

//   const renderContent = (content, idx) => {
//     if (content.type === 'image') {
//       return (
//         <Image source={content.source} style={{ width: '100%', height: 250, resizeMode: 'stretch' }} />
//       );
//     } else if (content.type === 'video') {
//       return (
//         <Video
//           source={content.source} // For local or remote files
//           style={{ height: 250, width: '100%' }}
//           resizeMode={'cover'}
//           shouldPlay // Autoplays the video
//           isLooping // Loop the video
//           isMuted // Mutes the video
//         />
//       );
//     }
//   };

//   paginationDotRender = () => {
//     return (
//       <View
//         style={{
//             height: 8,
//             width: 8,
//             borderRadius: 4,
//             backgroundColor: '#D9D9D9',
//             marginHorizontal: 4,
//         }}
//       />
//     );
//   }

//   paginationActiveDotRender = () => {
//     return (
//       <View
//         style={{
//           width: 40, 
//           backgroundColor: '#21CF44', 
//           borderRadius: 4,
//           height: 8,
//         }}
//       />
//     );
//   }

//   return (
//       <Swiper 
//         loop={true} 
//         autoplay={true}
//         autoplayTimeout={10}
//         showsPagination={true}
//         paginationStyle={{bottom: 10}}
//         dot= {this.paginationDotRender()}
//         activeDot= {this.paginationActiveDotRender()}
//         buttonWrapperStyle={{paddingTop: 10}}
//         scrollEnabled={false}
//         onIndexChanged={(index) => {
//           setTimeout(() => {
//             setSwiperIndex(index);
//           }, 100);
//         }}
//         >
//         {contents.map((content, idx) => (
//           <TouchableWithoutFeedback key={`content-${content.type}-${idx}`}>
//             {renderContent(content)}
//           </TouchableWithoutFeedback>
//         ))}
//       </Swiper>
//   );
// };

// export default ContentSlider;

import { StyleSheet, Text, View, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import { Video, ResizeMode } from 'expo-av';
import { useRef, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

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
  

  // Display Images and Videos
  const renderContent = ({ item, index }) => {
    return (
      <View style={{ width: width, height: 250 }}>
        {item.type === 'image' ? (
          <Image source={item.source} style={styles.image} />
        ) : (
          <Video
            source={item.source}
            style={{ width: width, height: 250 }}
            resizeMode={ResizeMode.COVER}
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
    );
  };
  // Render Dot Indicators
  const renderDotIndicators = () => {
    return contents.map((dot, index) => (
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
    <View style={{height:250, width: width}}>
      <FlatList 
        data = {contents} 
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
    height: 250,
    resizeMode: 'cover',
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
    marginLeft: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 25,
    marginLeft: 10,
  },
});


export default ContentSlider;