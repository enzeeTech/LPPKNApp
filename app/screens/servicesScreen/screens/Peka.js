import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import DropdownMenu from './reusableComponents/ServicesDropdownList';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';

const Peka = ({ navigation }) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [dropdownData, setDropdownData] = useState([]);
    const [dropdownHeader, setDropdownHeader] = useState([]);
    const [ticket1, setTicket1] = useState([]);
    const [buttonData, setButtonData] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('PEKA');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                setTicket1(componentData.map(component => {
                    if (component.__component === 'tickets.single-ticket') {
                        return component.TicketImage.data.attributes.url;
                    }
                    return null;
                }).flat().filter(item => item !== null));

                setDropdownHeader(componentData.map(component => {
                    if (component.__component === 'dropdown.dropdown-normal') {
                        return component.DropdownData.heading;
                    }
                    return null;
                }).flat().filter(item => item !== null));

                setDropdownData(componentData.map(component => {
                    if (component.__component === 'dropdown.dropdown-normal') {
                        return component.DropdownData.dropdowns;
                    }
                    return null;
                }).flat().filter(item => item !== null));

                setButtonData(componentData
                    .filter(component => 
                        component.__component === 'links.link1' && 
                        component.id === 8  
                    )
                    .map(component => [component.Title, `mailto:${component.URL}`])[0] || []
                );

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

    // Get Gallery data with description data
    const galleryDescriptionHeader = componentData.map(component => {
        if (component.__component === 'gallery.gallery-with-description') {
            return component.Title;
        }   
        return null;
    }).flat().filter(item => item !== null);

    // Data for the carousel
    const galleryData = componentData.map(component => {
        if (component.__component === 'gallery.gallery-with-description') {
            return component.GalleryData.items;
        }
        return null;
    }).flat().filter(item => item !== null);


    // Extract gallery data for the gallery component
    // const { title: galleryTitle, images } = extractGalleryData(componentData);

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Pejabat' });
    }

    // Open email app function
    const openURL = (url) => {
        if (url) {
          Linking.openURL(url).catch(err => {
            Alert.alert(
              "Error",
              "Unable to open the email link. Please check your email app configuration.",
              [{ text: "OK" }]
            );
            console.error("Failed to open URL: ", err);
          });
        } else {
          Alert.alert(
            "Invalid URL",
            "The email link is not available.",
            [{ text: "OK" }]
          );
        }
    };

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
                    </View>
                    {/* Ticket Image */}
                    <View style={styles.ticketContainer}>
                        <Image source={{uri: ticket1[0]}}
                        style={styles.ticketImage}
                        />
                    </View>
                    {/* Dropdown Menu */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>{dropdownHeader[0]}</Text>
                    </View>
                    <View style={styles.dropdownContainer}>
                        {/* Dropdown Menu for Perancang Keluarga */}
                        {dropdownData.map((item, index) => (
                            <DropdownMenu 
                                key={index}
                                headerTitle={item.headerTitle}
                                items={item.items}
                                imageSource={item.imageSource ? item.imageSource : null}
                                type = {item.type}
                            />
                        ))}
                    </View>
                    {/* Image plus text carousel */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>{galleryDescriptionHeader}</Text>
                    </View>
                    <View style={styles.carouselContainer}>
                        <View style={styles.sliderContainer}>
                            <ScrollView 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false} 
                                style={{
                                    width: '100%',
                                    // height: 380,
                                    paddingBottom: 50,
                                    marginLeft: 10
                                }}   
                            > 
                                {/* Render items from data  */}
                                {galleryData.map((item, index) => (
                                    <View key={index} style={styles.slide}>
                                        <View style={[styles.imageView, {elevation: 0}]}>
                                            <Image source={{uri: item.url}} style={styles.image} />
                                        </View>
                                        <View style={styles.carouselTextContainer}>
                                            <Text style={styles.text}>{item.description}</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>

                    <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                    {/* Galeri */}
                    {/* <GalleryBasic title={galleryTitle} images={images} /> */}
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Pejabat LPPKN Negeri</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={[styles.buttonContainer, {marginBottom: 50, marginTop: 10}] }>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={() => openURL(buttonData[1])}>
                            <Text style={styles.buttonTextOne}>{buttonData[0]}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* View created to add padding */}
                    <View style={{height: 100, backgroundColor: '#FFF'}}></View>

                 {/* View created to add padding */}
                 <View style={{height: 50, backgroundColor: '#FFF'}}></View>

                </View>                
            </ScrollView>
        </SafeAreaView>
    );
}

export default Peka;