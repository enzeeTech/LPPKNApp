import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

function InfoScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Title and Building Icon */}
                <View style={styles.titleContainer}>
                    <Image source={require('../../assets/buildingIcon.png')} style={styles.iconBuilding} />
                    <Text style={styles.infoTextTitle}>PEJABAT LPPKN NEGERI PERLIS</Text>
                </View>

                {/* Address */}
                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/locationPinIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>Tingkat 1, Bangunan Persekutuan Kangar, Persiaran Jubli Emas, 01000 Kangar, Perlis</Text>
                </View>

                {/* Phone */}
                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/phoneIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>04-9762855</Text>
                </View>

                {/* Fax */}
                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/faxIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>04-9762855</Text>
                </View>

                {/* Operating Hours */}
                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/timeIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>Isnin - Jumaat 8.00 pagi - 5.30 petang</Text>
                </View>

                {/* Buttons */}
                <TouchableOpacity style={styles.buttonOne} onPress={() => console.log('Lihat Peta Button Pressed!')}>
                    <Text style={styles.buttonTextOne}>Lihat Peta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTwo} onPress={() => console.log('Hubungi Pejabat Button Pressed!')}>
                    <Text style={styles.buttonTextTwo}>Hubungi Pejabat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'colummn',
    //   flex: 1,
    },
    contentContainer: {
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
    },
    icon: {
      width: 20,
      height: 20, 
      marginRight: 10,
    },
    iconBuilding: {
        width: 40,
        height: 40,
        marginRight: 10,
      },
    infoTextTitle: {
        // flex: 1,
        color: '#9448DA',
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 5,
      },
    infoText: {
    //   flex: 1,
      color: '#777777',
      fontSize: 15,
      paddingVertical: 5
    },
    buttonOne: {
      backgroundColor: '#9448DA',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonTwo: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#9448DA',
      },
    buttonTextOne: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    buttonTextTwo: {
        color: '#9448DA',
        fontWeight: 'bold',
        fontSize: 16,
      },
  });

export default InfoScreen;  