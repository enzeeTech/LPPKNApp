import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import KesejahteraanPriceTile from './reusableComponents/KesejahteraanPriceTile';

const SaringanKesejahteraan = ({ navigation }) => {

    // Data for bullet point text
    const bulletPointTextData = [
        'Memberi kesedaran mengenai peranan dan tanggungjawab setiap anggota terhadap kewangan keluarga.',
        'Memberi pengetahuan kepada keluarga mengenai kepentingan merancang dan mempraktikkan pengurusan kewangan yang lebih baik.',
        'Membolehkan keluarga membina pelan kewangan yang lebih berkesan.',
        'Membantu keluarga mengawal pendapatan yang diperolehi melalui perbelanjaan berhemah.',
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
        navigation.navigate('LocationCollection', { query: 'Klinik Nur Sejahtera' });
    }

    const dataPakej1 = [
        { title: 'Pemeriksaan Tekanan Darah'},
        { title: 'Pemeriksaan Indeks Jisim Tubuh'},
        { title: 'Pemeriksaan Darah Kolestrol'},
        { title: 'Pemeriksaan Darah Glukos'},
    ];
    
    const dataPakej2 = [
        { title: 'Pemeriksaan Tekanan Darah'},
        { title: 'Pemeriksaan Indeks Jisim Tubuh'},
        { title: 'Pemeriksaan Darah Kolestrol'},
        { title: 'Pemeriksaan Darah Glukos'},
        { title: 'Saringan Kanser Serviks'},
        { title: 'Pemeriksaan Klinikal Payudara'}
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/saringanKesejahteraanBackground.png')} 
                    style={styles.backgroundImage}
                    />
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>SARINGAN KESEJAHTERAAN</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {'Memantau status kesihatan anda secara berkala dapat mengekalkan kesejahteraan hidup. \n\n' + 
                        'Datanglah ke Klinik Nur Sejahtera LPPKN bagi mendapatkan pakej-pakej saringan kesejahteraan dengan harga yang berpatutan.'}
                        </Text>
                    </View>
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>
                    {/* Ticket Pictures */}
                    <View style={[styles.ticketContainer]}>
                        <Image source={require('../../../assets/saringanTicket1.png')} 
                        style={styles.ticketImage}
                        />
                        <Image source={require('../../../assets/saringanTicket2.png')}
                        style={styles.ticketImage}
                        />
                    </View>
                    {/* Subsection One */}
                    <View style={[styles.subTextOneContainer]}>
                        <Text style={styles.subTextOne}>Pakej Yang Disediakan</Text>
                    </View>
                    <View style={{ width: 300 }}>
                    <KesejahteraanPriceTile
                        prices={{
                            resident: 'RM10',
                            nonResident: 'RM25',
                        }}
                        dataPakej1={dataPakej1} 
                        dataPakej2={dataPakej2} 
                    />
                    </View>
                    <View style={[styles.buttonContainer, {marginTop: 30}]}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={hubungiButton}>
                            <Text style={styles.buttonTextOne}>Hubungi Klinik Nur Sejahtera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 110, backgroundColor: '#FFF'}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SaringanKesejahteraan;