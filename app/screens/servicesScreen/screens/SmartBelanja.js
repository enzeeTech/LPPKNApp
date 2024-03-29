import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';

const SmartBelanja = ({ navigation }) => {

    const [showPopup, setShowPopup] = useState(false);

    // Data for bullet point text
    const bulletPointTextData = [
        'Memberi kesedaran mengenai peranan dan tanggungjawab setiap anggota terhadap kewangan keluarga.',
        'Memberi pengetahuan kepada keluarga mengenai kepentingan merancang dan mempraktikkan pengurusan kewangan yang lebih baik.',
        'Membolehkan keluarga membina pelan kewangan yang lebih berkesan.',
        'Membantu keluarga mengawal pendapatan yang diperolehi melalui perbelanjaan berhemah.',
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

    const openPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }


    // Data for tab tile
    const data = [
        { title: 'Kenali Wang Anda (Pancing Ringgit)'},
        { title: 'Ceramah Pengurusan Kewangan Keluarga Secara Berhemah'},
        { title: 'Pemburu Wang (Money Hunter)'},
      ];
    
      const prices = {
        resident: 'RM20',
        nonResident: 'RM30', 
      };

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/smartBelanjaBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>SMART BELANJA</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Membantu ahli keluarga meningkatkan pengetahuan dan kemahiran dalam merancang kewangan dan perbelanjaan dengan bijak.'}
                        </Text>
                    </View>
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    {/* Info tile with tab */}
                    <TabTile data={data} prices={prices} />
                    {/* Subsection One */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 40}]}>
                        <Text style={styles.subTextOne}>Objektif</Text>
                    </View>
                    {/* Subsection One Bullet Point Text */}
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData.map((item, index) => {
                            return (
                                <View key={index} style={[styles.bulletPointContainer]}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.bullet}>{'\u2022'}</Text>
                                        <Text style={styles.bulletPointText}>{item}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    {/* Subsection Two */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Metodologi</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={styles.introText}>
                        {'SMARTBelanja dijalankan secara interaktif meliputi ceramah, main peranan (roleplay) dan perkongsian pengalaman.'}
                        </Text>
                    </View>
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>
                    {/* Subsection Three */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={styles.introText}>
                        {'Terbuka kepada semua, keluarga yang berminat untuk meningkatkan kemahiran pengurusan kewangan keluarga.'}
                        </Text>
                    </View>
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={openPopup}>
                            <Text style={styles.buttonTextOne}>Hubungi Pejabat LPPKN Negeri</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
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
            </ScrollView>
        </SafeAreaView>
    );
}

export default SmartBelanja;