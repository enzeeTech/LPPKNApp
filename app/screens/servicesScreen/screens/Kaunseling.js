import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import { canOpenURL, openURL } from 'expo-linking';

const Kaunseling = ({navigation}) => {

    const [showPopup, setShowPopup] = useState(false);

    // Data for galeri
    const galeriData = [
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
    ];

    // Data for image slider
    const data = [
        {
          image: require('../../../assets/KaunselingPerkhidmatan1.png'),
        },
        {
          image: require('../../../assets/KaunselingPerkhidmatan2.png'),
        },
        {
          image: require('../../../assets/KaunselingPerkhidmatan3.png'),
        },
        {
          image: require('../../../assets/KaunselingPerkhidmatan4.png'),
        },
      ];

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }

    const openPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/KaunselingBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>KAUNSELING KELUARGA DAN PERKAHWINAN</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Menyediakan perkhidmatan kaunseling keluarga untuk membantu masalah seperti penceraian, keganasan rumahtangga,'
                          + ' tekanan, kewangan, komunikasi, kendiri, kerjaya, personaliti dan lain-lain.\n\n'
                          + 'Kemudahan ini boleh diakses di 49 buah Klink Nur Sejahtera di seluruh negara.'}
                        </Text>
                        <View style={styles.KaunselingImageContainer}>
                            <Image source={require('../../../assets/KaunselingPayment.png')} style={styles.KaunselingImageStyle} resizeMode="contain" />
                        </View>
                    </View>
                {/* Image Slider */}
                <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>Perkhidmatan Kaunseling</Text>
                </View>
                <View style={styles.carouselContainer}>
                    {/* <ItemCarousel /> */}
                    <View style={styles.sliderContainer}>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false} 
                        style={styles.scrollViewStyle} > 
                    {/*Render items from data*/}
                    {data.map((item, index) => (
                    <View key={index} style={styles.slide}>
                        <View style={styles.imageView}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                    </View>
                        ))}
                    </ScrollView>
                    </View>
                </View>
                <View style={[styles.subTextOneContainer, {marginTop:-50}]}>
                        <Text style={styles.subTextOne}>Galeri</Text>
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
                        <TouchableOpacity style={styles.buttonViewOne}>
                            <Text style={styles.buttonTextOne}>Lokasi KNS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewTwo} onPress={openPopup}>
                        <Text style={styles.buttonTextTwo}>Hubungi Kami</Text>
                    </TouchableOpacity>
                </View>

                {/* Popup/Modal */}
                <Modal
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
                        <TouchableOpacity style={[styles.buttonViewOne, { marginBottom: 10 }]} onPress={() => openURL('tel:+15999')}>
                            <Text style={styles.buttonTextOne}>Hubungi Talian KASIH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={() => Linking.openURL('https://wa.me/+60192615999')}>
                            <Text style={styles.buttonTextOne}>WhatsApp Talian KASIH</Text>
                        </TouchableOpacity>
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
                </Modal>
                 {/* View created to add padding */}
                 <View style={{height: 100, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Kaunseling;