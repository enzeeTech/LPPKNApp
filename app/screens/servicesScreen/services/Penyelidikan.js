import React from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import PenyelidikanList from './reusableComponents/PenyelidikanList';

const Penyelidikan = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{ marginTop: -10 }} showsVerticalScrollIndicator={false}>

                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/PenyelidikanBG.png')}
                        style={styles.backgroundImage}
                    />
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>PENYELIDIKAN</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={[styles.introText, { fontSize: 15 }]}>
                            {'Pendapat awam atau '}
                            <Text style={{ fontStyle: 'italic' }}>public opinion</Text>
                            {' didefinisikan \n'
                                + 'sebagai pandangan umum tentang sesuatu isu dan \n'
                                + 'polisi yang akan diambil kira dalam membuat sesuatu\nkeputusan.'}
                        </Text>
                    </View>

                    {/* Containers */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ width: 400, marginRight: -50}}>
                        <PenyelidikanList

                            title="Penyelidikan Kependudukan & Keluarga"
                            imageSource={require('../../../assets/Penyelidikan1.png')}
                            additionalText="Fungsi utama Lembaga Penduduk dan Pembangunan Keluarga (LPPKN) adalah untuk mempromosi dan menjalankan aktiviti penyelidikan berkaitan penduduk, keluarga, dan kesihatan reproduktif."
                        

                        />
                    </View>
                    <View style={{ width: 400, marginRight: -50 }}>
                        <PenyelidikanList

                            title="Penerbitan"
                            imageSource={require('../../../assets/Penyelidikan2.png')}
                            additionalText="Kaedah terbaik untuk memelihara dan menyebarkan maklumat dan mempromosikan hasil penyelidikan adalah dengan penerbitan. Sejak ditubuhkan, pelbagai produk penerbitan merangkumi buku-buku kajian, infografik dan POPinfo telah dihasilkan."
                            titleStyle={{ marginBottom: 40}}
                        />
                    </View>
                    <View style={{ width: 400, marginRight: -50 }}>
                        <PenyelidikanList

                            title="Persidangan/Seminar/Forum/Webinar"
                            imageSource={require('../../../assets/Penyelidikan3.png')}
                            additionalText="Malaysia telah mula meraikan Hari Penduduk Sedunia sejak tahun 2006 di mana setiap tahun, Badan Tabung Kependudukan Bangsa-bangsa Bersatu (United Nations Population Fund [UNFPA]) akan memperkenalkan tema-tema tertentu bagi meningkatkan kesedaran masyarakat dunia mengenai isu kependudukan global setiap tahun."
                        

                        />
                    </View>
                    <View style={{ width: 400, marginRight: -50 }}>
                        <PenyelidikanList

                            title="Klinik Dan Newsletter Konsultasi Statistik"
                            imageSource={require('../../../assets/Penyelidikan4.png')}
                            additionalText="Penganjuran Klinik Konsultasi Statistik adalah bertujuan untuk meningkatkan kefahaman masyarakat mengenai statistik khususnya memahami data dan mengenal pasti kaedah analisa yang bersesuaian."
                        

                        />
                    </View>
                    <View style={{ width: 400 }}>
                        <PenyelidikanList

                            title="Malaysia Population Research Hub (MPRH)"
                            imageSource={require('../../../assets/Penyelidikan5.png')}
                            additionalText="Malaysia Population Research Hub (MPRH) adalah perkhidmatan awam yang merangkumi multi disiplin, berfungsi sebagai hab intelektual untuk penyelidikan demografi terutamanya berkaitan kependudukan dan keluarga di Malaysia"
                        

                        />
                    </View>

                    </ScrollView>

                    <View style={{ height: 50, backgroundColor: '#FFF' }}></View>

                    {/* Button selection */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonViewOne} onPress={() => Linking.openURL('https://www.lppkn.gov.my/lppkngateway/frontend/web/index.php?r=portal/article&menu=81&id=UGMzMjExaGE0STI0cG5ZMXhFTDlNUT09#kajian')}>
                            <Text style={styles.buttonTextOne}>Layari Portal</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 100, backgroundColor: '#FFF' }}></View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Penyelidikan;
