import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import HPVPriceTile from './reusableComponents/HPVPriceTile';
import { openURL } from 'expo-linking';

const Subfertiliti = ({navigation}) => {

    const handleImageClick1 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=pgF9EGGsEw8');
      };
    
    // Hubungi button navigation
    const hubungiButton = () => {
        navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
    }


    const bulletPointTextData1 = [
        'Usia perkahwinan sekurang-kurangnya setahun bagi yang berumur kurang dari 35 tahun; atau',
        'Usia perkahwinan sekurang-kurangnya 6 bulan bagi lebih dari 35 tahun.',
    ];

    const bulletPointTextData2 = [
        'Kad pengenalan/Pasport Pasangan (suami & isteri)',
        'Sijil Perkahwinan/Kad Nikah yang diperaku sah oleh Kerajaan Malaysia',
        'Laporan Perubatan/ Dokumen sokongan daripada Klinik Kerajaan/Swasta (jika ada)'
    ];

    const bulletPointTextData3 = [
        'Kami menerima Surat Jaminan daripada MARA dan DBKL sahaja.',
        'Bagi kakitangan kerajaan yang lain, anda perlu menggunakan kaedah Pay & Claim.',
        'Tertakluk kepada syarat iaitu tidak pernah mengandung (pernah melahirkan anak, keguguran,'
        + ' kehamilan luar rahim dan kehamilan morlar adalah tidak layak)',
    ];

    const bulletPointTextData4 = [
        'KWSP membolehkan pencarum mengeluarkan wang dari Akaun 2 untuk rawatan subfertiliti seperti IUI, IVF dan ICSI.',
        'Sila rujuk laman web KWSP pada butang di bawah untuk mendapatkan maklumat dan dokumen sokongan yang diperlukan.',
    ];

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



    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{ marginTop: -10 }} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/SubfertilitiBackground.png')}
                        style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>SUBFERTILITI</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Zuriat suatu anugerah kepada perkahwinan anda. Kesukaran untuk hamil sering merungsingkan anda'
                        + ' dan pasangan. Dapatkan segera pemeriksaan dan rawatan subfertiliti di klinik LPPKN sebelum terlambat.'}
                        </Text>
                    </View>
                    {/* Image Slider */}
                    <View style={styles.subTextOneContainer}>
                        <Text style={[styles.subTextOne, {marginTop: 10, marginBottom: 20}]}>Bayaran Perkhidmatan</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    {/* Add the PriceTabTile component here */}
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                        
                        prices={{
                            resident: 'RM160 - RM200',
                            nonResident: 'RM320 - RM400',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan1.png')}
                        additionalText="Saringan"
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile

                        prices={{
                            resident: 'RM40',
                            nonResident: 'RM80',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan2.png')}
                        additionalText="Pendaftaran"
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                    
                        prices={{
                            resident: 'RM1,000 - RM1,500',
                            nonResident: 'RM2,000 - RM3,000',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan3.png')}
                        additionalText={"Permanian Berhadas\n(IUI)"}
                        onPress={handleImageClick1}
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                    
                        prices={{
                            resident: 'RM10,000 - RM15,000',
                            nonResident: 'RM20,000 - RM30,000',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan4.png')}
                        additionalText={"Persenyawaan\nIn-Vitro (IVF)"}
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                    
                        prices={{
                            resident: 'RM10,000 - RM15,000',
                            nonResident: 'RM20,000 - RM30,000',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan5.png')}
                        additionalText={"Suntikan Sperma\nIntrasitoplasma (ICSI)"}
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                    
                        prices={{
                            resident: 'RM300 - RM500',
                            nonResident: 'RM600 - RM1,000',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/SubfertilitiPerkhidmatan6.png')}
                        additionalText={"Penyimpanan Krio Beku\n(Embrio & Sperma)"}
                    />
                    </View>
                    <View style={{ width: 25 }} />
                    </ScrollView>

                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 60, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={[styles.introText, {fontWeight: 'bold', color: '#A09FA2'}]}>
                        {'Berkahwin'}
                        </Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData1.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData1.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.bullet}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Dokumen Diperlukan</Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData2.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData2.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.bullet}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Surat Jaminan</Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData3.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData3.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.bullet}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Caruman KWSP</Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                    {bulletPointTextData4.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData4.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.bullet}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewTwo} onPress={() => Linking.openURL('https://www.kwsp.gov.my/ms/member/withdrawals/partial/health#Rawatan_Kesuburan')}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>Pengeluaran Caruman KWSP</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subTextFiveContainer}>
          <Text style={[styles.subTextOne, { marginTop: 40 }]}>Tatacara Mendaftar</Text>
        </View>
        <View style={styles.cartaAlirTextContainer}>
          <Text style={styles.cartaAlirText}>
          </Text>
        </View>
        <View style={styles.SubfertilitiImageStyle}>
          <Image
            source={require('../../../assets/TatacaraMendaftarSubfertiliti.png')} 
          />
        </View>

                    <View style={[styles.subTextOneContainer, { marginTop: 50 }]}>
                        <Text style={styles.subTextOne}>Galeri</Text>
                    </View>
                    <View style={styles.galleryParentContainer}>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            style={styles.HPVScrollStyle}
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

export default Subfertiliti;