import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import { canOpenURL, openURL } from 'expo-linking';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData, extractGallerySmallData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';

const Kaunseling = ({navigation}) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [ticket1, setTicket1] = useState([]);
    const [ticket2, setTicket2] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('Kaunseling');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                setTicket1(componentData.map(component => {
                    if (component.__component === 'tickets.double-ticket') {
                        return component.Ticket1.data.attributes.url;
                    }
                    return null;
                }).flat().filter(item => item !== null));

                setTicket2(componentData.map(component => {
                    if (component.__component === 'tickets.double-ticket') {
                        return component.Ticket2.data.attributes.url;
                    }
                    return null;
                }).flat().filter(item => item !== null));

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
        fetchPerkhidmatanKeluarga();
    }, []);

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
    }

    // Extract gallery small data
    const { title: gallerySmallTitle, images: smallImages } = extractGallerySmallData(componentData);
    const { title: galleryBasicTitle, images: basicImages } = extractGalleryData(componentData);
    

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

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={{uri: responseData.ServiceImage}}
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
                        <View style={styles.KaunselingImageContainer}>
                            <Image source={require('../../../assets/KaunselingPayment.png')} style={styles.KaunselingImageStyle} resizeMode="contain" />
                        </View>
                    </View>
                    {/* Image Slider */}
                    <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>{gallerySmallTitle}</Text>
                    </View>
                    <View style={styles.carouselContainer}>
                        {/* <ItemCarousel /> */}
                        <View style={styles.sliderContainer}>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            style={[styles.scrollViewStyle, {height: 240}]} > 
                        {/*Render items from data*/}
                        {smallImages.map((item, index) => (
                        <View key={index} style={styles.slide}>
                            <View style={styles.imageView}>
                                <Image source={{ uri: item.url }} style={styles.image} />
                            </View>
                                {/* <View style={styles.textContainer}>
                                    <Text style={styles.text}>{item.text}</Text>
                                </View> */}
                        </View>
                            ))}
                        </ScrollView>
                        </View>
                    </View>
                    {/* Gallery section */}
                    <GalleryBasic title={galleryBasicTitle} images={basicImages} />
                    {/* Buttons section */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>
                    {/* View created to add padding */}
                    <View style={{height: 100, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Kaunseling;