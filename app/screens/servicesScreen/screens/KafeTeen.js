import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import GlobalApi from '../../../services/GlobalApi';

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
                    Title: service.Title,
                    ServiceImage: service.ServiceImage.data.attributes.url,
                    Description: service.Description,
                };
    
                setResponseData(responseData);
                setComponentData(componentData);
                console.log('componentData:', componentData);
                console.log('responseData:', responseData);
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

    // Data for bullet point text
    const bulletPointTextData = [
        'Kesihatan perempuan',
        'Kesihatan lelaki',
        'Seksualiti',
        'Merokok/penyalahgunaan dadah',
        'Perhubungan',
        'Penjagaan kulit',
        'Kesihatan mental',
    ];

    // Data for galeri
    const galeriData = [
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
    ];

    // Handle back press navigation
     const handleBackPress = () => {
        navigation.goBack();
    }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'KafeTEEN' });
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
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20}]}>
                        <Text style={styles.subTextOne}>KafeTEEN membantu anda dalam masalah</Text>
                    </View>
                    {/* Subsection One Bullet Point Text */}
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData.map((item, index) => {
                            return (
                                <View key={index} style={[styles.bulletPointContainer]}>
                                    <View style={[styles.textContainer, {paddingVertical: 5}]}>
                                        <Image source={require('../../../assets/greenTick.png')} style = {{height:20, width:20}} />
                                        <Text style={styles.bulletPointTextBold}>{item}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    {/* Galeri */}
                    <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>Perkhidmatan Yang Ditawarkan</Text>
                    </View>
                    <View style={styles.galleryParentContainer}>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            style={styles.galleryScrollStyle}
                        >
                            <View style={styles.galeriContainer}>
                                {galeriData.map((item, index) => (
                                    <View key={index} style={styles.galeriItemContainer}>
                                        <Image source={item.image} style={styles.galeriImage}/>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    {/* Buttons section */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={kafeTeenAppRedirectButton}> 
                            <Text style={styles.buttonTextOne}>Muat Turun Aplikasi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewTwo} onPress={hubungiButton}>
                            <Text style={styles.buttonTextTwo}>Hubungi KafeTEEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default KafeTEEN;