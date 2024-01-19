import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import HPVPriceTile from './reusableComponents/HPVPriceTile';

const HpvDna = ({navigation}) => {

    const bulletPointTextData1 = [
        'Pap Smear adalah salah satu ujian saringan awal bagi mengesan kanser serviks.',
        'Ia dapat mengesan sel kanser pada peringkat awal.',
        'Pengesanan dan rawatan awal dapat menyembuhkan kanser serviks.',
        'Pengesanan dan rawatan awal dapat menyembuhkan kanser serviks.',
    ];

    const bulletPointTextData2 = [
        'Ujian Pap Smear boleh dilakukan pada bila-bila masa kecuali pada masa haid dan nifas.',
        'Ianya dilakukan oleh anggota klinikal yang terlatih dengan memasukkan spekulum ke dalam faraj.',
        'Sel permukaan serviks akan diambil dengan menggunakan spatula atau berus serviks dan dihantar'
        + ' ke makmal untuk dianalisis yang akan mengambil masa beberapa minggu.',
    ];

    const bulletPointTextData3 = [
        'Human Papillomavirus (HPV) adalah virus yang menyebabkan jangkitan kelamin yang boleh dijangkiti'
        + ' melalui hubungan seksual serta penyebab utama kanser serviks.',
        'Kanser serviks merupakan kanser',
    ];

    const bulletPointTextData4 = [
        'Human Papillomavirus (HPV) adalah virus yang menyebabkan jangkitan kelamin yang boleh dijangkiti'
        + ' melalui hubungan seksual serta penyebab utama kanser serviks.',
        'Kanser serviks merupakan kanser',
    ];

    const bulletPointTextData5 = [
        {
            mainPoint: 'Wanita akan dibekalkan dengan Kit Ujian HPV DNA dan boleh mengambil sampel sendiri'
                        + ' atau dengan bantuan jururawat di Klinik Nur Sejahtera.',
            subPoints: [
                'Tidak Menyakitkan',
                'Mudah',
                'Tiada Kesan Sampingan',
                // Add more sub-points as needed
            ],
        },
    ];

    const bulletPointTextData6 = [
        'Wanita Warganegara Malaysia dan penduduk tetap',
        'Wanita berumur 30 - 65 tahun',
        'Wanita dalam kalangan B40 dan M40',
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
                    <Image source={require('../../../assets/HPVDNABackground.png')}
                        style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>SARINGAN KANSER REPRODUKTIF</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Pengesanan awal kanser reproduktif dapat menyelamatkan nyawa anda. LPPKN sentiasa menggalakkan pengesanan'
                        + ' kanser payudara dan serviks dilakukan melalui ujian dan pemeriksaan berikut:'}
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
                            resident: 'RM5',
                            nonResident: 'RM10',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/HPVPerkhidmatan1.png')}
                        additionalText="Pendaftaran Ujian Pap Smear"
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                    
                        prices={{
                            resident: 'RM20',
                            nonResident: 'RM40',
                            // Add more prices as needed
                        }}
                        imageSource={require('../../../assets/HPVPerkhidmatan1.png')}
                        additionalText="Pendaftaran Ujian Pap Smear"
                    />
                    </View>
                    <View style={{ width: 300 }}>
                    <HPVPriceTile
                        prices={{
                        resident: 'RM80',
                        }}
                        imageSource={require('../../../assets/HPVPerkhidmatan2.png')}
                        additionalText="Ujian HPV DNA"
                        isLastTile={true}
                    />
                    </View>
                    <View style={{ width: 25 }} />
                    </ScrollView>

                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 60, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Info Pap Smear</Text>
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
                        <Text style={styles.subTextOne}>Kaedah Pap Smear</Text>
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
                        <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
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

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewTwo}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>Info Pap Smear</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 60, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Info HPV</Text>
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


                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Kit HPV DNA</Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData5.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData5.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={[styles.bullet, { marginBottom: 120, marginRight: 13 }]}>{'\u2022'}</Text>
                                    {typeof item === 'object' ? (
                                        <View>
                                            <Text style={styles.bulletPointText}>{item.mainPoint}</Text>
                                            <View style={{ marginLeft: 20 }}>
                                                {item.subPoints.map((subItem, subIndex) => (
                                                    <View key={subIndex} style={[styles.subBulletContainer, { marginTop: 5 }]}>
                                                        <Text style={styles.subBullet}>{'\u2022'}</Text>
                                                        <Text style={styles.bulletPointText}>{subItem}</Text>
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
                    
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20, marginBottom: 15}]}>
                        <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
                    </View>
                    
                    <View style={styles.bulletContainer}>
                        {bulletPointTextData6.map((item, index) => (
                            <View key={index} style={[styles.bulletPointContainer, index === bulletPointTextData6.length - 1 && styles.lastBulletPointContainer]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.bullet}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewTwo}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.buttonTextTwo}>Info HPV DNA</Text>
                            <Image source={require('../../../assets/linkIcon.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.subTextOneContainer, { marginTop: 65 }]}>
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
                        <TouchableOpacity style={styles.buttonViewOne}>
                            <Text style={styles.buttonTextOne}>Lokasi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>

      <View style={{height: 100, backgroundColor: '#FFF'}}></View>
    </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HpvDna;