import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, Modal, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import DropdownMenu from './reusableComponents/ServicesDropdownList';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';

const PerancangKeluarga = ({navigation}) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [dropdownData, setDropdownData] = useState({});
    const [dropdownHeader, setDropdownHeader] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('PerancangKeluarga');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                const dropdownComponent = componentData.find(component => component.__component === 'dropdown.dropdown-normal');

                setDropdownData(dropdownComponent ? dropdownComponent.DropdownData : {});
                setDropdownHeader(dropdownComponent ? dropdownComponent.DropdownData.title : []);

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
    const { title: galleryTitle, images } = extractGalleryData(componentData);


    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
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

                    <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                        
                    {/* Image plus text carousel */}
                    <View style={[styles.subTextOneContainer]}>
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
                                    marginLeft: 10,
                                    paddingBottom: 10
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

                    <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>{dropdownHeader}</Text>
                    </View>

                    <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                    
                    {/* Dropdown Menu */}
                    {Object.keys(dropdownData).map((key, index) => {
                        const data = dropdownData[key];
                        if (typeof data === 'object' && data !== null && data.items) {
                        return (
                            <DropdownMenu
                            key={index}
                            headerTitle={data.title}
                            items={data.items}
                            imageSource={{ uri: data.imageSource }}
                            type={data.type}
                            />
                        );
                        }
                        return null;
                    })}

                    <View style={{height: 50, backgroundColor: '#FFF'}}></View>


                    <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                    {/* Subsection Two */}
                    {componentData
                        .filter(component => component.__component === 'subsections.section' && component.SectionTitle === 'SectionTitle')
                        .map(section => (
                            <View key={section.id}>
                                <View style={styles.subTextTwoContainer}>
                                    <Text style={styles.subTextTwo}>{section.Description}</Text>
                                </View>
                            </View>
                        ))
                    }

                    <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                    
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer, {marginBottom: 60}] }>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Galeri */}
                    <GalleryBasic title={galleryTitle} images={images} />

                    {/* View created to add padding */}
                    <View style={{height: 50, backgroundColor: '#FFF'}}></View>



                 {/* View created to add padding */}
                 <View style={{height: 70, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PerancangKeluarga;