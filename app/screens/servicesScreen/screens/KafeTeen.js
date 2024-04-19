import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';

const Ilmukeluarga = ({ navigation }) => {

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

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/kafeTeenBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>PUSAT ITERAKTIF REMAJA</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'KafeTEEN merupakan pusat remaja serba moden mesra ditubuhkan oleh Lembaga Penduduk dan Pembangunan '
                         + 'Keluarga Negara (LPPKN) bagi tujuan membantu remaja berumur 13 hingga 24 tahun melalui alam remaja dengan selesa dan penuh yakin.'}
                        </Text>
                    </View>
                    {/* Subsection One */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15, marginTop: 20}]}>
                        <Text style={styles.subTextOne}>KafeeTEEN membantu anda dalam masalah</Text>
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
                        <TouchableOpacity style={styles.buttonViewOne}>
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

export default Ilmukeluarga;