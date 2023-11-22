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
                <View style={styles.infoContainerLocation}>
                    <Image source={require('../../assets/locationPinIcon.png')} style={styles.iconLocation} />
                    <Text style={styles.infoText}>Tingkat 1, Bangunan Persekutuan Kangar, Persiaran Jubli Emas, 01000 Kangar, Perlis</Text>
                </View>

                <View style={styles.doubleInfoContainer}>
                    <View style={styles.infoContainer}>
                        <Image source={require('../../assets/phoneIcon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>04-9762855</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Image source={require('../../assets/faxIcon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>04-9762855</Text>
                    </View>
                </View>

                {/* Operating Hours */}
                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/timeIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>Isnin - Jumaat                8.00 pagi - 5.30 petang</Text>
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
        backgroundColor: 'transparent',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // padding: 10,
        // borderRadius: 5, 
        flexDirection: 'colummn',
        marginTop: 0,
        //   flex: 1,
    },
    contentContainer: {
        padding: 10,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 0,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        maxWidth: '80%',
    },
    infoContainerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '60%', 
        paddingVertical: 5,
        paddingLeft: 5,
    },
    
    doubleInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        maxWidth: '85%',
    },
    icon: {
        width: 25,
        height: 25, 
        marginRight: 10,
        resizeMode: 'contain',
    },
    iconLocation: {
        width: 25,
        height: 30, 
        marginRight: 10,
        resizeMode: 'contain',
    },
    iconBuilding: {
        width: 40,
        height: 40,
        marginRight: 10,
      },
    infoTextTitle: {
        flex: 1,
        color: '#9448DA',
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10,
      },
    infoText: {
        flex: 1,
        color: '#777777',
        fontWeight: '600',
        fontSize: 15,
        paddingVertical: 5
    },
    buttonOne: {
        // backgroundColor: '#9448DA',
        // padding: 15,
        // borderRadius: 10,
        // alignItems: 'center',
        // marginTop: 10,
        backgroundColor: '#9448DA',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center', 
        width: 300, 
        marginTop: 30,
    },
    buttonTwo: {
        // backgroundColor: '#FFFFFF',
        // padding: 15,
        // borderRadius: 10,
        // alignItems: 'center',
        // marginTop: 10,
        // borderWidth: 1,
        // borderColor: '#9448DA',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#9448DA',
        alignItems: 'center',
        alignSelf: 'center', 
        width: 300, 
        marginTop: 10,
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