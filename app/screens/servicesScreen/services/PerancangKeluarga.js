import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import DropdownMenu from './reusableComponents/ServicesDropdownList';

const PerancangKeluarga = ({navigation}) => {

    // Data for dropdown menu
    const pilData = {
        type: 'normal',
        items: [
            { name: 'Pil Mercilond', price: 'RM16.00' },
            { name: 'Pil Marvelon', price: 'RM7.00' },
            { name: 'Pil Noriday', price: 'RM10.00' },
            { name: 'Pil Rigevidon', price: 'RM5.00' },
            { name: 'Pil Minipill', price: 'RM16.00' },
            { name: 'Pil Yasmin', price: 'RM52.00' },
            { name: 'Pil Loette', price: 'RM16.00' },
        ]
    }
    
    const suntikanData = {
        type: 'normal',
        items: [
            { name: 'NON-PREG (3 Bulan)', price: 'RM36.00' },
            { name: 'Depoprovera (3 Bulan)', price: 'RM36.00' },
            { name: 'Depocon (2 Bulan)', price: 'RM18.00' },
        ]
    };

    const alatData = {
        type: 'bullet', 
        items: [
          {
            title: 'ADR (5 Tahun)',
            items: [

              { label: 'Termasuk caj pemasangan', price: 'RM110.00' },
              { label: 'Caj pengeluaran ADR', price: 'RM20.00' },
            ],
          },
          {
            title: 'ADR (5 Tahun)',
            items: [
              { label: 'Termasuk caj pemasangan', price: 'RM80.00' },
              { label: 'Caj pengeluaran ADR', price: 'RM20.00' },
            ],
          },
        ],
    };

    const implanData = {
        type: 'bullet', 
        items: [
          {
            title: 'Implan (3 Tahun)',
            items: [

              { label: 'Termasuk caj pemasangan', price: 'RM500.00' },
              { label: 'Caj pengeluaran implan', price: 'RM100.00' },
            ],
          },
        ],
    };

    const kondomData = {
        type: 'normal',
        items: [
            { name: 'Kondom Lelaki', price: 'RM4.00/Kotak' },
        ]
    };

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
          image: require('../../../assets/carouselItem1.png'),
          // text: 'Menjarakkan kehamilan supaya tidak terlalu rapat.',
          text: 'Menjarakkan kehamilan',
        },
        {
          image: require('../../../assets/perancangKeluargaBackground.png'),
          text: 'Merancang masa yang sesuai untuk mempunyai anak supaya tidak terlalu awal atau tidak terlalu lewat.',
        },
        {
          image: require('../../../assets/carouselItem1.png'),
          text: 'Mencegah kehamilan untuk ibu yang mempunyai masalah kesihatan.',
        },
      ];

    // Handle back press navigation
    const handleBackPress = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/perancangKeluargaBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>PERANCANG KELUARGA</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Menjarakkan kelahiran anak dapat memberi ruang memulihkan kesihatan anda selepas'
                        + 'bersalin serta tumpuan kepada anak dan keluarga.\n\n'+
                        'Selain itu, perancang keluarga dapat mengelakkan kehamilan tidak dirancang serta kehamilan berisiko.'}
                        </Text>
                    </View>
                    {/* Image Slider */}
                    <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>Tujuan Lain Merancang Kehamilan</Text>
                    </View>
                    <View style={styles.carouselContainer}>
                        {/* <ItemCarousel /> */}
                        <View style={styles.sliderContainer}>
                            <ScrollView 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false} 
                                style={styles.scrollViewStyle}    
                            > 
                                {/*Render items from data*/}
                                {data.map((item, index) => (
                                    <View key={index} style={styles.slide}>
                                        <View style={styles.imageView}>
                                            <Image source={item.image} style={styles.image} />
                                        </View>
                                        <View style={styles.carouselTextContainer}>
                                            <Text style={styles.text}>{item.text}</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.subTextOneContainer}>
                        <Text style={styles.subTextOne}>Kaedah Perancang Keluarga</Text>
                    </View>
                    {/* Dropdown Menu */}
                    <View style={styles.dropdownContainer}>
                        {/* Dropdown Menu for Perancang Keluarga */}
                        <DropdownMenu 
                            data={pilData.items}
                            headerTitle="Pil Perancang Keluarga"
                            imageSource={require('../../../assets/medicineIcon.png')}
                            type={pilData.type} />
                        {/* Dropdown Menu for Suntikan Kontraseptif */}
                        <DropdownMenu 
                            data={suntikanData.items}
                            headerTitle="Suntikan Kontraseptif"
                            imageSource={require('../../../assets/injectionIcon.png')}
                            type={suntikanData.type}/>
                        {/* Dropdown Menu for Alat Dalam Rahim (ADR) */}
                        <DropdownMenu 
                            data={alatData.items}
                            headerTitle="Alat Dalam Rahim (ADR)"
                            imageSource={require('../../../assets/adrIcon.png')}
                            type={alatData.type}
                        />
                        {/* Dropdown Menu for Implan */}
                        <DropdownMenu 
                            data={implanData.items}
                            headerTitle="Implan"
                            imageSource={require('../../../assets/implanIcon.png')}
                            type={implanData.type}/>
                        {/* Dropdown Menu for Kondom */}
                        <DropdownMenu 
                            data={kondomData.items}
                            headerTitle="Kondom"
                            imageSource={require('../../../assets/condomIcon.png')}
                            type={kondomData.type}/>
                    </View>
                    {/* Gallery Section */}
                    <View style={styles.subTextOneContainer}>
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
                    <View style={styles.subTextTwoContainer}>
                        <Text style={styles.subTextTwo}>Hubungi Klinik Nur Sejahtera LPPKN untuk temujanji anda.</Text>
                    </View>
                    {/* Buttons section */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne}>
                            <Text style={styles.buttonTextOne}>Lokasi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonViewTwo}>
                            <Text style={styles.buttonTextTwo}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>
                    {/* View created to add padding */}
                    <View style={{height: 100, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PerancangKeluarga;