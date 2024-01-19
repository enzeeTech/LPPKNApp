import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';

const KeluargaKerja = ({ navigation }) => {

    // Data for bullet point text
    const bulletPointTextData = [
        'Meningkatkan kesedaran dan pengetahuan kepada ibubapa mengenai pentingnya mengimbangi peranan sebagai pekerja; dan',
        'Memberi kemahiran serta panduan cara gaya keibubapaan untuk menghadapi cabaran keluarga di setiap kitaran hidup keluarga.',
    ];

    const bulletPointTextDataTwo = [
        'Ibubapa/ pasangan yang bekerja',
        'Ibubapa yang mempunyai anak kecil dan anak remaja.',
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
        { title: 'Sesi 1', subtitle: 'Kenali Fitrah' },
        { title: 'Sesi 2', subtitle: 'Satu Badan Banyak Topi' },
        { title: 'Sesi 3', subtitle: 'Kebapaan & Keibuan' },
        { title: 'Sesi 4', subtitle: 'Keibuan Kreatif'},
        { title: 'Sesi 5', subtitle: 'Pengurusan Tekanan & Daya Tindak'},
      ];
    
      const prices = {
        resident: 'RM70',
        nonResident: 'RM90', 
      };

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/keluargaKerjaBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>KELUARGA@KERJA</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Melalui kursus ini, ibu bapa berpeluang untuk mempelajari teknik-teknik mengimbangi keluarga dan kerjaya serta memperolehi pengetahuan dan kemahiran keibubapaan.'}
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
                        {'Kursus Keluarga@Kerja (Parenting@Work) dijalankan secara interaktif dan meliputi ceramah, perbincangan sedutan senario keluarga, main peranan serta perkongsian pengalaman.'}
                        </Text>
                    </View>
                    <View style={{height: 40, backgroundColor: '#FFF'}}></View>
                    {/* Subsection Three */}
                    <View style={[styles.subTextOneContainer, {alignItems: 'flex-start', marginLeft: 15}]}>
                        <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
                    </View>
                    {/* Subsection Three Bullet Point Text */}
                    <View style={styles.bulletContainer}>
                        {bulletPointTextDataTwo.map((item, index) => {
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

export default KeluargaKerja;