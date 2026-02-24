import React, {useEffect, useState} from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Header from './Header';
import styles, { LARGE_SCREEN_BREAKPOINT, getBannerHeight } from '../StyleServices';
import PriceTabTile from './reusableComponents/PriceTabTile';
import GlobalApi from '../../../services/GlobalApi';

const SaringanKesejahteraan = ({ navigation }) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [activeTab, setActiveTab] = useState('resident');
    const [ticket1, setTicket1] = useState([]);
    const [ticket2, setTicket2] = useState([]);
    const { width, height } = useWindowDimensions();
    const isLargeScreen = width >= LARGE_SCREEN_BREAKPOINT;
    const bannerHeight = getBannerHeight(height, isLargeScreen);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('SaringanKesejahteraan');
            
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

    // Extract prices and items for PriceTabTile component
    const priceTileComponent = componentData.find(component => component.__component === 'tiles.price-tile1');
    const priceData = priceTileComponent ? priceTileComponent.TileData.tile : null;

    const prices = priceData ? {
        resident: priceData.price1.value,
        nonResident: priceData.price2.value
    } : {};

    const price1Items = priceData ? priceData.price1.items : [];
    const price2Items = priceData ? priceData.price2.items : [];

    const price1Title = priceData ? priceData.price1.title : '';
    const price2Title = priceData ? priceData.price2.title : '';


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
                <ScrollView
                    style={{ marginTop: -10, backgroundColor: '#FFF' }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.backgroundContainer, { height: bannerHeight }]}>
                        <Image source={{uri: 'https://placehold.co/150x150/DEDEDE/DEDEDE/png'}} style={[styles.backgroundImage, { height: bannerHeight }]} />
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
            <ScrollView
                    style={{ marginTop: -10, backgroundColor: '#FFF' }}
                    showsVerticalScrollIndicator={false}
                >
                {/* Background Image */}
                <View style={[styles.backgroundContainer, { height: bannerHeight }]}>
                    <Image 
                        source={{ uri: responseData.ServiceImage }} 
                        style={[styles.backgroundImage, { height: bannerHeight }]}
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
                    {/* Ticket Pictures */}
                    <View style={[styles.ticketContainer]}>
                        <Image source={{uri: ticket1[0]}} 
                        style={styles.ticketImage}
                        />
                        <Image source={{uri: ticket2[0]}}
                        style={styles.ticketImage}
                        />
                    </View>
                    {/* Subsection One */}
                    {priceData && (
                        <PriceTabTile
                            data={activeTab === 'resident' ? price1Items : price2Items}
                            prices={prices}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            price1Title={price1Title}
                            price2Title={price2Title}
                        />  
                    )}
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    {/* Hubungi Button */}
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SaringanKesejahteraan;