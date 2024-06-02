import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import GlobalApi from '../../../services/GlobalApi';
import GreenTickListItems from './reusableComponents/tileListItems/GreenTickListItems';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';

const KafeTEEN = ({ navigation }) => {
    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const playStoreURL = 'https://play.google.com/store/apps/details?id=com.wasabisnorter.kafeteenDiscover';
    const appStoreURL = 'TO_BE_ADDED';

    const fetchPerkhidmatanKafeTeen = async () => {
        try {
            const response = await GlobalApi.getServiceByName('KafeTEEN');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;
                const responseData = {
                    ServiceID: service.ServiceID,
                    Title: service.ServiceTitle,
                    ServiceImage: service.ServiceImage.data.attributes.url,
                    Description: service.Description,
                };
    
                setResponseData(responseData);
                setComponentData(componentData);
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error('Error fetching KafeTEEN service:', error);
        }
    };

    useEffect(() => {
        fetchPerkhidmatanKafeTeen();
    }, []);

    // Get data for bullet points from componentData
    const extractBulletPoints = (contentData) => {
        let title = '';
        let bulletPoints = [];
      
        contentData.forEach(item => {
          if (item.__component === 'lists.green-tick-list-box') {
            title = item.Title;
            bulletPoints = item.BulletPoints.split(',');
          }
        });
      
        return { title, bulletPoints };
      };

    // Get data for gallery from componentData
    const extractGalleryData = (contentData) => {
        let title = '';
        let images = [];
      
        contentData.forEach(item => {
          if (item.__component === 'gallery.gallery-basic') {
            title = item.Title;
            // Assuming images are stored in a field named 'Images' within the item
            console.log("images",item.Images.data)
            images = item.Images.data.map(image => ({
                url: image.attributes.url,
            }));
            console.log(images)
          }
        });
      
        return { title, images };
    };

    const { title: bulletTitle, bulletPoints } = extractBulletPoints(componentData);
    const { title: galleryTitle, images } = extractGalleryData(componentData);
      

    // Handle back press navigation
     const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'KafeTEEN' });
    }

    // KafeTeen App Redirect Button
    const kafeTeenAppRedirectButton = () => {
        const url = Platform.OS === 'ios' ? appStoreURL : playStoreURL;

        Linking.canOpenURL(url)
            .then((supported) => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={{ uri: responseData.ServiceImage }} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{responseData.Title}</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {responseData.Description}
                        </Text>
                    </View>
                    {/* Subsection One */}
                    <GreenTickListItems title={bulletTitle} bulletPoints={bulletPoints} />
                    {/* Galeri */}
                    <GalleryBasic title={galleryTitle} images={images} />
                    {/* Buttons section */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={kafeTeenAppRedirectButton}> 
                            <Text style={styles.buttonTextOne}>Muat Turun Aplikasi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewTwo} onPress={hubungiButton}>
                            <Text style={styles.buttonTextTwo}>Hubungi KafeTEEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default KafeTEEN;