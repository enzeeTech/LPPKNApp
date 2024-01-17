import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import DropdownMenu from './reusableComponents/ServicesDropdownList';

const Peka = ({ navigation }) => {

    // Data for carousel
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

    // Data for galeri
    const galeriData = [
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
        { image: require('../../../assets/galeriPlaceholder.png') },
    ];

    // Data for dropdown menu
    const dropdownData = {
        type: 'bulletNoPrice', 
        items: [
          {
            title: 'Activiti 1',
            items: [
              { label: 'Mesti Ambil Tahu'},
            ],
          },
          {
            title: 'Activiti 2',
            items: [
              { label: 'Selamatkah Keluarga Kita' },
            ],
          },
          {
            title: 'Activiti 3',
            items: [
                { label: 'Kotak Beracun' },
            ],
          }
        ],
    }
    
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
                    <Image source={require('../../../assets/pekaBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>PROGRAM PENDIDIKAN KESELAMATAN KELUARGA DAN ANAK (PEKA)</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Mempertingkatkan kesedaran ibu bapa/penjaga dan masyarakat bagi, menangani isu pengabaian, kecuaian' +
                        ' dan penderaan anak-anak.'}
                        </Text>
                    </View>
                    {/* Ticket Image */}
                    <View style={styles.ticketContainer}>
                        <Image source={require('../../../assets/pekaTicket.png')} 
                        style={styles.ticketImage}
                        />
                    </View>
                    {/* Dropdown Menu */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Pengisian Interaktif</Text>
                    </View>
                    <View style={styles.dropdownContainer}>
                        {/* Dropdown Menu for Perancang Keluarga */}
                        <DropdownMenu 
                            data={dropdownData.items}
                            headerTitle="Panduan Kesedaran Keselamatan Keluarga dan Anak"
                            type={dropdownData.type} />
                        <DropdownMenu
                            data={dropdownData.items}
                            headerTitle="Panduan Pencegahan"
                            type={dropdownData.type} />
                        <DropdownMenu
                            data={dropdownData.items}
                            headerTitle="Kemahiran Menyelamat"
                            type={dropdownData.type} />
                        <DropdownMenu
                            data={dropdownData.items}
                            headerTitle="Keselamatan Siber"
                            type={dropdownData.type} />
                    </View>
                    {/* Image plus text carousel */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Tip PEKA</Text>
                    </View>
                    <View style={styles.carouselContainer}>
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
                                        <View style={styles.textContainer}>
                                            <Text style={styles.text}>{item.text}</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    {/* Galeri */}
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
                    {/* Buttons section */}
                    <View style={[styles.buttonContainer]}>
                        <TouchableOpacity style={styles.buttonViewOne}>
                            <Text style={styles.buttonTextOne}>Hubungi Pejabat LPPKN Negeri</Text>
                        </TouchableOpacity>
                    </View>
                    {/* View created to add padding */}
                    <View style={{height: 100, backgroundColor: '#FFF'}}></View>
                </View>                
            </ScrollView>
        </SafeAreaView>
    );
}

export default Peka;