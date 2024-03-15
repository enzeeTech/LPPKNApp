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

const ContentSlider = ({contents}) => {

  console.log(contents);


  const width = Dimensions.get('window').width;
  // test data
  const carouselData = [
    {
      id: '01',
      image: require('../../assets/backgroundLPPKNHQ.png'),  
    },
    {
      id: '02',
      image: require('../../assets/keluargaKerjaBackground.png'),  
    },
    {
      id: '03',
      image: require('../../assets/subsidiMamogramBackground.png'),  
    },
  ]

  // // Test function for renderItem
  // const renderItem = ({item, index}) => { 
  //   return (
  //     <View>
  //       <Image source={item.image} style={{height:250, width: width, resizeMode: "cover"}} />
  //     </View>
  //   );
  // };

  // Display Images and Videos
  const renderContent = ({item, index}) => {
    if (item.type === 'image') {
      return (
        <Image source={item.source} style={{ width: width, height: 250, resizeMode: 'cover' }} />
      );
    } else if (item.type === 'video') {
      return (
        <Video
          source={item.source} // For local or remote files
          style={{ height: 250, width: width }}
          resizeMode={ResizeMode.COVER}
          shouldPlay // Autoplays the video
          isLooping // Loop the video
          isMuted // Mutes the video
        />
      );
    }
  };

  // Render Dot Indicators
  const renderDotIndicators = ()=>{
    return contents.map((dot, index) => {
        return (
          <View
            style={{
                height: 8,
                width: 8,
                borderRadius: 4,
                backgroundColor: '#D9D9D9',
                marginHorizontal: 4,
                marginBottom: 10,
            }}
          />
        );
    });
  }

  return (
    <View style={{height:250, width: width}}>
      <FlatList 
        data = {contents} 
        renderItem={renderContent}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator = {false}
      />
      {/* <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        {renderDotIndicators()}
      </View> */}
    </View>
  );
}

export default ContentSlider;