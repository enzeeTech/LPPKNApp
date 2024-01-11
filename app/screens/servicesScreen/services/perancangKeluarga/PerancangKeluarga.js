import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, Dimensions } from 'react-native';
import Header from '../Header';
import styles from '../../StyleServices';
import ItemCarousel from './itemCarousel';

const PerancangKeluarga = ({navigation}) => {

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
                    <Image source={require('../../../../assets/perancangKeluargaBackground.png')} 
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
                    {/* Image Carousel */}
                    <View style={styles.imageSliderTextContainer}>
                        <Text style={styles.imageSliderText}>Tujuan Lain Merancang Kehamilan</Text>
                    </View>
                    <View style={styles.carouselContainer}>
                        <ItemCarousel />
                    </View>
                    {/* View created to add padding */}
                    <View style={{height: 200, backgroundColor: '#FFF'}}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PerancangKeluarga;