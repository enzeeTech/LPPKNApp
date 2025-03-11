import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking, Alert } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import HPVPriceTile from './reusableComponents/HPVPriceTile';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';
import BulletPointList from './reusableComponents/bulletpointLists/BulletPointList';

const Buai = ({navigation}) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    // const [papSmearData, setPapSmearData] = useState([]);
    const [buaiData, setBuaiData] = useState([]);
    const [bulletPointData, setBulletPointData] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('BUAI');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                const bulletPointsData = componentData
                    .filter(component => component.__component === 'lists.bullet-point-list')
                    .map(component => component.BulletPoints.bulletPointList) || {};

                setBulletPointData(bulletPointsData);

                console.log('bulletPointsData:', bulletPointsData);

                const responseData = {
                    ServiceID: service.ServiceID,
                    Title: service.ServiceTitle,
                    ServiceImage: service.ServiceImage.data.attributes.url,
                    Description: service.Description,
                };

                setBuaiData(componentData
                    .filter(component => 
                        component.__component === 'links.link1'
                    )
                    .map(component => [component.Title, component.URL])[0] || []
                    );
                
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

    console.log('buaiData:', buaiData);
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
            <ScrollView style={{ marginTop: -10 }} showsVerticalScrollIndicator={false}>
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
                    <View style={{height: 5, backgroundColor: '#FFF', marginBottom: -55}}></View>

                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'no-title')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'section-1')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}

                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[styles.buttonViewTwo, buaiData[1] === null && {opacity: 0.5}]}
                            onPress= {() => {
                                if (buaiData[1] !== null) {
                                    Linking.openURL(buaiData[1]);
                                } else {
                                    Alert.alert('Link not available');
                                }
                            }}
                            disabled={buaiData[1] === null}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>{buaiData[0]}</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 10, backgroundColor: '#FFF'}}></View>

                    <View style={[styles.buttonContainer, {marginBottom: 40}] }>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>


      <View style={{height: 100, backgroundColor: '#FFF'}}></View>
    </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Buai;