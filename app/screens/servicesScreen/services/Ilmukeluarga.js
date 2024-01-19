import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import TabTile from './reusableComponents/PriceTabTile';

const Ilmukeluarga = ({ navigation }) => {

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

export default Ilmukeluarga;