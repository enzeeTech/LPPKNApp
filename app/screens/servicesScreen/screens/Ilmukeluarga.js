import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';
import PriceTabTile from './reusableComponents/PriceTabTile';
import GlobalApi from '../../../services/GlobalApi';
import BulletPointList from './reusableComponents/bulletpointLists/BulletPointList';

const Ilmukeluarga = ({ navigation }) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [activeTab, setActiveTab] = useState('resident');

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('IlmuKeluarga');
            
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
        fetchPerkhidmatanKeluarga();
    }, []);

    if (!responseData.ServiceID) {
        return <Text>Loading...</Text>;
    }


    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Pejabat' });
    }

    // Extract prices and items for PriceTabTile component
    const priceTileComponent = componentData.find(component => component.__component === 'tiles.price-tile1');
    const priceData = priceTileComponent ? priceTileComponent.TileData.tile : null;

    const prices = priceData ? {
        resident: priceData.price1.value,
        nonResident: priceData.price2.value
    } : {};

    const price1Items = priceData ? priceData.price1.items : [];
    const price2Items = priceData ? priceData.price2.items : [];

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
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    {/* Info tile with tab */}
                    {priceData && (
                        <PriceTabTile
                            data={activeTab === 'resident' ? price1Items : price2Items}
                            prices={prices}
                            activeTab={activeTab} 
                            setActiveTab={setActiveTab} 
                        />
                    )}
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    {/* Subsection One */}
                    {componentData
                        .filter(component => component.__component === 'lists.bullet-point-list' && component.BulletPoints.bulletPointList.identifier === 'objektif')
                        .map(bulletPointComponent => (
                            <BulletPointList
                                key={bulletPointComponent.id}
                                title={bulletPointComponent.BulletPoints.bulletPointList.title}
                                bulletPoints={bulletPointComponent.BulletPoints.bulletPointList.bulletPoints}
                                description={bulletPointComponent.BulletPoints.bulletPointList.description ? bulletPointComponent.BulletPoints.bulletPointList.description : null}
                            />
                    ))}
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Pejabat LPPKN Negeri</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>

                {/* Popup/Modal */}
                {/* <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showPopup}
                    onRequestClose={closePopup}
                >
                    <View style={styles.popupContainer}>
                        <View style={styles.whiteBox}>
                        <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
                            <Image source={require('../../../assets/CloseButton.png')} style={styles.closeButtonImage} />
                        </TouchableOpacity>
                        <View style={styles.popupContent}>
                        <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.buttonViewTwo} onPress={() => openURL('tel:+0326137555')}>
                        <Text style={styles.buttonTextTwo}>Hubungi Ibu Pejabat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonViewTwo} onPress={() => openURL('tel:+0326137555')}>
                        <Text style={styles.buttonTextTwo}>Hubungi LPPKN Negeri</Text>
                    </TouchableOpacity>
                </View>
                </View>
                        </View>
                    </View>
                </Modal> */}
                 {/* View created to add padding */}
                 <View style={{height: 100, backgroundColor: '#FFF'}}></View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Ilmukeluarga;