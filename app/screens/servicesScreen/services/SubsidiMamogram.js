import React, { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubsidiMamogram = ({ navigation }) => {
  const kriteriaItems = [
    { label: 'Wanita warganegara Malaysia atau penduduk tetap', hasDropdown: false },
    { label: 'Berumur 35-70 tahun', hasDropdown: false },
    { label: 'Pendapatan isi rumah RM10,000 dan ke bawah(Anda layak menerima subsidi penuh)', hasDropdown: false },
    { label: 'Jika pendapatan isi rumah RM10,000 ke atas subsidi RM50', hasDropdown: false },
    { label: 'Wanita yang berusia 40-70 tahun dan menepati syarat seperti:', hasDropdown: true, dropdownItems: ['Mempunyai risiko tinggi untuk mendapat kanser payudara', 'Wanita yang dirujuk untuk ujian diagnostik mamogram', 
                                                                                                                'Ujian mamogram saringan sebelum memulakan Terapi Hormon Gantian', 'Ujian mamogram ulangan bagi program subsidi'] },
    { label: 'Wanita yang berusia 35-39 tahun dan menepati syarat seperti:', hasDropdown: true, dropdownItems: ['Mempunyai sejarah keluarga mendapat kanser payudara pada usia kurang dari 40 tahun', 'Telah menjalani penilaian oleh doktor'] },
  ];

  const initialArrowDirection = kriteriaItems.map(item => (item.hasDropdown ? 'down' : 'down'));


  const [showDropdown, setShowDropdown] = useState(Array(kriteriaItems.length).fill(false));
  const [arrowDirection, setArrowDirection] = useState(initialArrowDirection);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const upArrowImage = require('../../../assets/dropdownArrow.png');
  const downArrowImage = require('../../../assets/pullUpArrow.png');

  const toggleDropdown = (index) => {
    const newDropdownState = [...showDropdown];
    newDropdownState[index] = !newDropdownState[index];
    setShowDropdown(newDropdownState);

    const newArrowDirection = [...arrowDirection];
    newArrowDirection[index] = newDropdownState[index] ? 'up' : 'down';
    setArrowDirection(newArrowDirection);
  };

  const renderDropdown = (items) => (
    <View style={styles.dropdownContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.dropdownItemContainer}>
          <View style={styles.dropdownPointContainer}>
            <Icon name="circle" size={8} color="#9448DA" style={styles.pointIcon} />
            <Text style={styles.dropdownPointText}>{item}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const galeriData = [
    { image: require('../../../assets/galeriPlaceholder.png') },
    { image: require('../../../assets/galeriPlaceholder.png') },
    { image: require('../../../assets/galeriPlaceholder.png') },
    { image: require('../../../assets/galeriPlaceholder.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={handleBackPress} />
      <ScrollView style={{ marginTop: -10, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundContainer}>
          <Image source={require('../../../assets/subsidiMamogramBackground.png')} style={styles.backgroundImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>SUBSIDI MAMOGRAM</Text>
          </View>
          <View style={styles.introContainer}>
            <Text style={styles.introText}>
              {'Subsidi kepada wanita yang layak bagi menjalani saringan awal ujian mamogram di pusat-pusat mamogram yang terpilih.\n\n' +
                'Saringan awal mamogram berkesan untuk meneliti kesihatan payudara serta mengesan ketulan payudara di peringkat awal yang mendorong kepada kanser payudara.'}
            </Text>
          </View>
          <View style={styles.subTextFiveContainer}>
            <Text style={styles.subTextOne}>Kriteria Kelayakan</Text>
          </View>
          {kriteriaItems.map((item, index) => (
          <View key={index} style={[styles.subTextFourContainer, { borderTopWidth: 1, borderBottomWidth: index < kriteriaItems.length - 1 ? 1 : 0, borderColor: 'rgba(123, 128, 126, 0.18)', position: 'relative', zIndex: showDropdown[index] ? 2 : 1 }]}>
            <TouchableOpacity
              disabled={!(item.hasDropdown && (index === 4 || index === 5))}
              onPress={() => (item.hasDropdown && (index === 4 || index === 5)) ? toggleDropdown(index) : null}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                paddingHorizontal: 1,
                marginBottom: 1,
                marginTop: -5,
              }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', maxWidth: '80%' }}>
                  <Image
                    source={require('../../../assets/GreenTickIcon.png')} 
                    style={{ width: 20, height: 20, marginBottom: 10, marginRight: 10, marginTop: 10 }}
                  />
                <Text style={styles.subTextThree}>{item.label}</Text>
              </View>
              {item.hasDropdown && (
                <Image
                  source={showDropdown[index] ? upArrowImage : downArrowImage}
                  style={{ width: 20, height: 19, marginLeft: 30 }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            {item.hasDropdown && showDropdown[index] && renderDropdown(item.dropdownItems)}
          </View>
        ))}
         <View style={[styles.subTextFiveContainer, { marginTop:5 }]}>
          <Text style={styles.subTextOne}>Carta Alir Ujian Mamogram</Text>
        </View>
        <View style={styles.cartaAlirTextContainer}>
          <Text style={styles.cartaAlirText}>
          </Text>
        </View>
        <View style={styles.cartaAlirImageContainer}>
          <Image
            source={require('../../../assets/cartaAlirUjianMamogram.png')} 
            style={styles.subsidiMamoImage}
          />
        </View>
          <View style={styles.subTextSixContainer}>
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
          <View style={styles.subsidiButtonContainer}>
                <TouchableOpacity style={styles.buttonViewOne}>
                    <Text style={styles.buttonTextOne}>Lokasi Klinik Nur Sejahtera</Text>
                </TouchableOpacity>
          </View>
          {/* View created to add padding */}
          <View style={{ height: 100, backgroundColor: '#FFF' }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubsidiMamogram;
