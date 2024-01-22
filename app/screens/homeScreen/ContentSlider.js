import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Image, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { Video } from 'expo-av';

const ContentSlider = ({ contents }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const renderContent = (content, idx) => {
    if (content.type === 'image') {
      return (
        <Image source={content.source} style={{ width: '100%', height: 250, resizeMode: 'stretch' }} />
      );
    } else if (content.type === 'video') {
      return (
        <Video
          source={content.source} // For local or remote files
          style={{ height: 250, width: '100%' }}
          resizeMode={'cover'}
          shouldPlay // Autoplays the video
          isLooping // Loop the video
          isMuted // Mutes the video
        />
      );
    }
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
        onIndexChanged={(index) => {
          setTimeout(() => {
            setSwiperIndex(index);
          }, 100);
        }}
        >
        {contents.map((content, idx) => (
          <TouchableWithoutFeedback key={`content-${content.type}-${idx}`}>
            {renderContent(content)}
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
  );
};

export default ContentSlider;