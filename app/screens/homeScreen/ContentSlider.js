import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Image, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { WebView } from 'react-native-webview';

const ContentSlider = ({ contents }) => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = index === contents.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);

      // If the swiper loops back to the start, increment the key to force reload
      if (nextIndex === 0) {
        setKey(prevKey => prevKey + 1);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [index, contents.length]);
  
  // Render content function
  const renderContent = (content, idx) => {
    if (content.type === 'image') {
      return (
        <TouchableWithoutFeedback key={idx}>
          {/* <Image source={require("../../assets/smartBelanjaBackground.png")} style={{ width: '100%', height: 250, resizeMode: 'stretch' }} /> */}
          <Image source={content.source} style={{ width: '100%', height: 250, resizeMode: 'stretch' }} />
        </TouchableWithoutFeedback>
      );
      } else if (content.type === 'video') {
        const videoID = extractYoutubeVideoID(content.source);
        const autoplayURL = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&playsinline=1`;
        return (
          <TouchableWithoutFeedback key={idx} onPress={() => openYouTubeLink(content.source)}>
            <WebView
              key={key}
              source={{ uri: autoplayURL }}
              style={{ height: 250, width: '100%'}}
              mediaPlaybackRequiresUserAction={false}
              allowsInlineMediaPlayback={true}
            />
          </TouchableWithoutFeedback>
        );
      }
  };

  // Extract YouTube video ID from URL
  const extractYoutubeVideoID = (source) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = source.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
};

  // Open YouTube link
  const openYouTubeLink = (source) => {
    Linking.openURL(source);
  };

  paginationDotRender = () => {
    return (
      <View
        style={{
            height: 8,
            width: 8,
            borderRadius: 4,
            backgroundColor: '#D9D9D9',
            marginHorizontal: 4,
        }}
      />
    );
  }

  paginationActiveDotRender = () => {
    return (
      <View
        style={{
          width: 40, 
          backgroundColor: '#21CF44', 
          borderRadius: 4,
          height: 8,
        }}
      />
    );
  }

  return (
      <Swiper 
        loop={true} 
        autoplay={true}
        autoplayTimeout={10}
        showsPagination={true}
        paginationStyle={{bottom: 10}}
        dot= {this.paginationDotRender()}
        activeDot= {this.paginationActiveDotRender()}
        buttonWrapperStyle={{paddingTop: 10}}
        scrollEnabled={false}
        >
        {contents.map((content, idx) => renderContent(content, idx))}
      </Swiper>
  );
};

export default ContentSlider;