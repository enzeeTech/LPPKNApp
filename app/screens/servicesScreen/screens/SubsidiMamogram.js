import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import GlobalApi from '../../../services/GlobalApi';
import CriteriaDropdown from './reusableComponents/dropdownListItems/CriteriaDropdown';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';

const SubsidiMamogram = ({ navigation }) => {
  
  const [responseData, setResponseData] = useState([]);
  const [componentData, setComponentData] = useState([]);
  const [kriteriaData, setKriteriaData] = useState([]);

  const fetchPerkhidmatanKeluarga = async () => {
    try {
        const response = await GlobalApi.getServiceByName('SubsidiMamogram');
        
        if (response.data.data.length > 0) {
            const service = response.data.data[0].attributes;

            const componentData = service.Content;

            setKriteriaData(componentData.map(component => {
                if (component.__component === 'dropdown.plain-text-dropdown') {
                    return component.DropdownData.listItems;
                }
            }));

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

  // Hubungi button navigation
  const hubungiButton = () => {
    navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
  }

  // Back button navigation
  const handleBackPress = () => {
    navigation.goBack();
  }


  // Dropdown title
  const dropdownTitle = (componentData.map(component => {
    if (component.__component === 'dropdown.plain-text-dropdown') {
        return component.DropdownData.Title;
    }
  }));

  // Extract gallery data for the gallery component
  const { title: galleryTitle, images } = extractGalleryData(componentData);

  // Extract Subsection
  const sectionTitle = (componentData.map(component => {
    if (component.__component === 'subsections.section-with-image') {
        return component.Title;
    }
  }));

  // Extracct Subsection Image URL
  const sectionImage = (componentData.map(component => {
    if (component.__component === 'subsections.section-with-image') {
        return component.Image.data.attributes.url;
    }
  }));

  if (!responseData.ServiceID) {
    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                <View style={styles.backgroundContainer}>
                    <Image source={{uri: 'https://placehold.co/150x150/grey/grey/png'}} style={styles.backgroundImage} />
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
      <ScrollView style={{ marginTop: -10, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundContainer}>
          <Image source={{uri : responseData.ServiceImage}} style={styles.backgroundImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{responseData.Title}</Text>
          </View>
          <View style={styles.introContainer}>
            <Text style={styles.introText}>
              {responseData.Description}
            </Text>
          </View>
          <View style={styles.subTextFiveContainer}>
            <Text style={styles.subTextOne}>{dropdownTitle}</Text>
          </View>
          {/* Dropdown component */}
          <CriteriaDropdown data={kriteriaData} />
          {/* Subsection */}
          <View style={[styles.subTextFiveContainer, { marginTop: 50 }]}>
            <Text style={styles.subTextOne}>{sectionTitle}</Text>
          </View>
          <View style={styles.cartaAlirImageContainer}>
            <Image
              source={{uri: sectionImage[1]}} 
              style={styles.subsidiMamoImage}
            />
          </View>
          {/* Galeri */}
          <GalleryBasic title={galleryTitle} images={images} />
          <View style={styles.subsidiButtonContainer}>
                <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                    <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                </TouchableOpacity>
          </View>
          {/* View created to add padding */}
          <View style={{ height: 100, backgroundColor: '#FFF' }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubsidiMamogram;
