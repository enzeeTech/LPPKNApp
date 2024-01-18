import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';

const Smartstart = ({ navigation }) => {

    // Data for bullet point text
    const bulletPointTextData = [
        'Memberi ilmu pengetahuan dalam menempuh alam perkahwinan.',
        'Memberi panduan, petua dan kemahiran ke arah persediaan mental dan pembinaan sikap yang positif.',
        'Menyelia platform yang selamat kepada pasangan untuk memahami dan mengenali diri.',
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

    // Data for tab tile
    const data = [
        { title: 'Sesi 1', subtitle: 'Mengenali Dirimu' },
        { title: 'Sesi 2', subtitle: 'Meneroka Harapan Kita' },
        { title: 'Sesi 3', subtitle: 'Menangani Konflik dan Cabaran' },
        { title: 'Sesi 4', subtitle: 'Ingat! Luahkan Perasaan Anda'},
        { title: 'Sesi 5', subtitle: 'Membina Kemesraaan Seksual'},
        { title: 'Sesi 6', subtitle: 'Mengurus Sumber Keluarga'},
        { title: 'Sesi 7', subtitle: 'Undang-undang Keluarga'}
      ];
    
      const prices = {
        resident: 'RM20',
        nonResident: 'RM60', 
      };

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
                        <Text style={styles.headerText}>SMARTSTART 2.0</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Memberi pengetahuan dan kemahiran kepada pasangan yang akan berkahwin tentang pelbagai aspek perkahwinan dan'
                         + ' keibubapaan bagi memberi sokongan psikososial dalam menempuhi alam perkahwinan yang  sejahtera.' +
                        ' dan penderaan anak-anak.'}
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
                    {/* Subsection Two */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Tempoh Kursus</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={styles.introText}>
                        {'Kursus ini dikendalikan selama 2 hari untuk 25 pasangan.'}
                        </Text>
                    </View>
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>
                    {/* Subsection Three */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Kumpulan Sasar</Text>
                    </View>
                    <View style={[styles.introContainer, {marginBottom: 5}]}>
                        <Text style={styles.introText}>
                        {'Pasangan yang akan berkahwin dan pengantin baharu (usia perkahwinan di bawah 25 tahun).'}
                        </Text>
                    </View>
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>
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
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne}>
                            <Text style={styles.buttonTextOne}>Hubungi Pejabat LPPKN Negeri</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Smartstart;