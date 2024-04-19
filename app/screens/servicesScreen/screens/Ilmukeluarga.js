import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';

const Ilmukeluarga = ({ navigation }) => {

    const [showPopup, setShowPopup] = useState(false);

    // Data for bullet point text
    const bulletPointTextData = [
        'Menyebarkan pendidikan mengenai pembangunan keluarga agar masyarakat dapat menambah maklumat berkaitan kemahiran keibubapaan, persediaan perkahwinan dan pemantapan keluarga serta pembangunan remaja.',
        'Menggalakkan masyarakat mengamalkan sikap dan amalan positif dalam menguruskan hidup berkeluarga.',
        'Mempromosikan kemahiran keibubapaan melalui proses pembelajaran.',
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

    // const openPopup = () => {
    //     setShowPopup(true);
    // }

    // const closePopup = () => {
    //     setShowPopup(false);
    // }

    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Pejabat' });
    }

    // Data for tab tile
    const data = [
        { title: 'Bahtera KASIH', subtitle: 'Pasangan Suami Isteri' },
        { title: 'Belaian KASIH', subtitle: 'Ibu/bapa yang mempunyai anak 12 tahun ke bawah' },
        { title: 'Mutiara KASIH', subtitle: 'Ibu/bapa yang mempunyai anak remaja' },
        { title: 'Permata KASIH', subtitle: 'Remaja berumur 12-19 tahun & belia berusia 20-25 tahun'},
        { title: 'Pancaran KASIH', subtitle: 'Bapa'},
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
                    <Image source={require('../../../assets/ilmukeluargaBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>@ILMUKELUARGA LPPKN</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Menyebarkan pendidikan mengenai pembangunan keluarga agar masyarakat dapat menambah maklumat berkaitan'
                         + ' kemahiran keibubapaan, persediaan perkahwinan dan pemantapan keluarga serta pembangunan remaja.'}
                        </Text>
                    </View>
                    {/* Info tile with tab */}
                    <TabTile data={data} prices={prices} />
                    {/* Subsection One */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 40}]}>
                        <Text style={styles.subTextOne}>Objektif</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={styles.introText}>
                        {'Mengukuhkan perkahwinan dan membina keluarga yang mantap, bahagia dengan:'}
                        </Text>
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