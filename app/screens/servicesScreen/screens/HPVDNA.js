import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking, Alert } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import HPVPriceTile from './reusableComponents/HPVPriceTile';
import GlobalApi from '../../../services/GlobalApi';
import { extractGalleryData } from '../../../utilities/GalleryExtract';
import GalleryBasic from './reusableComponents/galleryOptions/GalleryBasic';
import BulletPointList from './reusableComponents/bulletpointLists/BulletPointList';

const HpvDna = ({navigation}) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [papSmearData, setPapSmearData] = useState([]);
    const [hpvDnaData, setHpvDnaData] = useState([]);
    const [bulletPointData, setBulletPointData] = useState([]);
    const [priceTilesData, setPriceTilesData] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('HPV');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content;

                // Extract price tile data
                const priceTiles = componentData
                    .filter(component => component.__component === 'tiles.image-price-tile')
                    .map(component => component.TileData.hpvPriceTiles)
                    .flat();

                setPriceTilesData(priceTiles);

                setPapSmearData(componentData
                    .filter(component => 
                      component.__component === 'links.link1' && 
                      component.Title === 'Info Pap Smear' && 
                      component.id === 2  
                    )
                    .map(component => [component.Title, component.URL])[0] || []
                );
                  
                setHpvDnaData(componentData
                .filter(component => 
                    component.__component === 'links.link1' && 
                    component.Title === 'Info HPV DNA' && 
                    component.id === 3  
                )
                .map(component => [component.Title, component.URL])[0] || []
                );

                const bulletPointsData = componentData
                    .filter(component => component.__component === 'lists.bullet-point-list')
                    .map(component => component.BulletPoints.bulletPointList)
                    .find(list => list.identifier === 'kit-hpv-dna') || {};

                setBulletPointData(bulletPointsData);

                console.log('bulletPointsData:', bulletPointsData);

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

    // Get price tiles header
    const priceTilesHeader = componentData.map(component => {
        if (component.__component === 'tiles.image-price-tile') {
            return component.TileData.title;
        }
    })

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
    }


    // Get gallery data
    const { title: galleryTitle, images } = extractGalleryData(componentData);

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

                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'info-pap-smear')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'keedah-pap-smear')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'kriteria-kelayakan1')
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
                                if (papSmearData[1] !== null) {
                                    Linking.openURL(papSmearData[1]);
                                } else {
                                    Alert.alert('Link not available');
                                }
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>{papSmearData[0]}</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{height: 10, backgroundColor: '#FFF'}}></View>
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'info-hpv')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    <View>
                        <View style={{height: 30, backgroundColor: '#FFF'}}></View>
                        <View style={[styles.subTextOneContainer, { alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15 }]}>
                            <Text style={styles.subTextOne}>{bulletPointData.title}</Text>
                        </View>
                        <View style={[styles.bulletContainer, {marginTop:0}]}>
                            {bulletPointData.bulletPoints && bulletPointData.bulletPoints.map((item, index) => (
                                <View key={index} style={[styles.bulletPointContainer, index === bulletPointData.bulletPoints.length - 1 && styles.lastBulletPointContainer]}>
                                    <View style={[styles.textContainer, {marginBottom: -5, paddingTop: 5}]}>
                                        <Text style={[styles.bullet, { marginBottom: 120, marginRight: 13 }]}>{'\u2022'}</Text>
                                        {typeof item === 'object' && item.mainPoint ? (
                                            <View>
                                                <Text style={styles.bulletPointText}>{item.mainPoint}</Text>
                                                <View style={{ marginLeft: 20,}}>
                                                    {item.subPoints && item.subPoints.map((subItem, subIndex) => (
                                                        <View key={subIndex} style={[styles.subBulletContainer, { marginTop: 5 }]}>
                                                            <Text style={styles.subBullet}>{'\u2022'}</Text>
                                                            <Text style={[styles.bulletPointText, {fontWeight: 'bold'}]}>{subItem}</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            </View>
                                        ) : (
                                            <Text style={styles.bulletPointText}>{item}</Text>
                                        )}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{height: 10, backgroundColor: '#FFF', marginTop: -40}}></View>
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'kriteria-kelayakan2')
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
                                if (hpvDnaData[1] !== null) {
                                    Linking.openURL(hpvDnaData[1]);
                                } else {
                                    Alert.alert('Link not available');
                                }
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>{hpvDnaData[0]}</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 50, backgroundColor: '#FFF'}}></View>

                    {/* Galeri */}
                    <GalleryBasic title={galleryTitle} images={images} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>

      <View style={{height: 100, backgroundColor: '#FFF'}}></View>
    </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HpvDna;