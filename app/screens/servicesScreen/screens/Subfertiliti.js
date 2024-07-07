import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import HPVPriceTile from './reusableComponents/HPVPriceTile';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';
import BulletPointList from './reusableComponents/bulletpointLists/BulletPointList';

const Subfertiliti = ({navigation}) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [priceTilesData, setPriceTilesData] = useState([]);
    const [buttonData, setButtonData] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('Subfertiliti');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                // Extract price tile data
                const priceTiles = componentData
                    .filter(component => component.__component === 'tiles.image-price-tile')
                    .map(component => component.TileData.hpvPriceTiles)
                    .flat();

                setPriceTilesData(priceTiles);

                // Extract button data
                setButtonData(componentData
                .filter(component => 
                    component.__component === 'links.link1' && 
                    component.Title === 'Pengeluaran Caruman KWSP'  
                )
                .map(component => [component.Title, component.URL])[0] || []
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

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Klinik Subfertiliti' });
    }

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    
    // Get price tiles header
    const priceTilesHeader = componentData.map(component => {
        if (component.__component === 'tiles.image-price-tile') {
            return component.TileData.title;
        }
    })

    // Get gallery data
    const { title: galleryTitle, images } = extractGalleryData(componentData);

    // Extract Subsection
    const sectionTitle = (componentData.map(component => {
        if (component.__component === 'subsections.section-with-image') {
            return component.Title;
        }
    }));

    // Extract Subsection Image URL
    const sectionImage = componentData
    .filter(component => component.__component === 'subsections.section-with-image')
    .map(component => component.Image.data.attributes.url);

    // console.log('section image', sectionImage);


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
                    {/* Image Slider */}
                    <View style={styles.subTextOneContainer}>
                        <Text style={[styles.subTextOne, {marginTop: 10, marginBottom: 20}]}>{priceTilesHeader}</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                        {priceTilesData.map((tile, index) => {
                            return (
                                <View key={index} style={{ width: 300 }}>
                                    <HPVPriceTile
                                        prices={tile.prices}
                                        imageSource={tile.imageSource}
                                        title={tile.title}
                                        isSingleTile={tile.isSinglePrice}
                                    />
                                </View>
                            );
                        })}
                        <View style={{ width: 25 }} />
                    </ScrollView>

                    <View style={{height: 10, backgroundColor: '#FFF'}}></View>

                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'kriteria-kelayakan')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    <View style={{height: 10, backgroundColor: '#FFF'}}></View>
                    
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'dokumen-diperlukan')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'surat-jaminan')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}

                    
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'caruman-kwsp')
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
                            style={styles.buttonViewTwo}
                            onPress= {() => {
                                if (buttonData[1] !== null) {
                                    Linking.openURL(buttonData[1]);
                                } else {
                                    Alert.alert('Link not available');
                                }
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>{buttonData[0]}</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{height: 10, backgroundColor: '#FFF'}}></View>

                    {/* Subsection */}
                    <View style={[styles.subTextFiveContainer, { marginTop: 50 }]}>
                        <Text style={styles.subTextOne}>{sectionTitle}</Text>
                    </View>
                    <View style={styles.cartaAlirImageContainer}>
                        <Image
                        source={{uri: sectionImage[0]}} 
                        style={styles.subsidiMamoImage}
                        />
                    </View>
                    
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>

                    <View style={[styles.buttonContainer, {marginBottom: 40}] }>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Subfertilti</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Galeri */}
                    <GalleryBasic title={galleryTitle} images={images} />

                    <View style={{height: 100, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Subfertiliti;