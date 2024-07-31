import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import GlobalApi from '../../../services/GlobalApi';
import GreenTickListItems from './reusableComponents/tileListItems/GreenTickListItems';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';
import { extractGalleryData } from '../../../utilities/GalleryExtract';

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

    if (!responseData.ServiceID) {
        return (
            <SafeAreaView style={styles.container}>
                <Header onBackPress={handleBackPress} />
                <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                    <View style={styles.backgroundContainer}>
                        <Image source={{uri: 'https://placehold.co/150x150/DEDEDE/DEDEDE/png'}} style={styles.backgroundImage} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Loading...</Text>
                        </View>
                        {/** padding till the end of the screen */}
                        <View style={{height: 500, backgroundColor: '#FFF'}}></View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );    
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
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer, {marginBottom: 40, marginTop: 30}] }>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={kafeTeenAppRedirectButton}> 
                            <Text style={styles.buttonTextOne}>Muat Turun Aplikasi MyKafeTEEN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewTwo} onPress={hubungiButton}>
                            <Text style={styles.buttonTextTwo}>Hubungi KafeTEEN</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Galeri */}
                    <GalleryBasic title={galleryTitle} images={images} />
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default KafeTEEN;