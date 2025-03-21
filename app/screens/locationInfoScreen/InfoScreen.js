import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { openURL } from 'expo-linking';
import { Alert } from 'react-native';

function InfoScreen({title, location, icon, phoneNo, faxNo, operationTime, locationURL, activeState}) {

    // Lihat Peta Button Pressed
    const onLihatPetaPressed = () => {
        if (locationURL === '-') {
            Alert.alert(
                'Location URL Not Available',
                'Sorry, the location URL is not available for this location.',
                [{ text: 'OK', style: 'cancel' }],
                { cancelable: true },
            );
            return;
        }
        openURL(locationURL);
    };

    // Hubungi Pejabat Button Pressed
    const onHubungiPejabatPressed = (phoneNumber) => {
        // Split the phone number string into an array of numbers
        const phoneNumbers = phoneNumber.split(' / ').map(number => {
            // Remove spaces and hyphens, and ignore extension part for dialing
            let cleanedNumber = number.split(' ext.')[0].replace(/[\s-]/g, '');
            return cleanedNumber;
        });
    
        // Function to dial a single number 
        const dialNumber = (number) => {
            openURL(`tel:${number}`);
        };
        
        // If there's only one number, dial it directly. If there are multiple numbers, let the user choose.
        if (phoneNumbers.length === 1) {
            // Only one number, dial it directly
            dialNumber(phoneNumbers[0]);
        } else {
            // Multiple numbers, let the user choose
            Alert.alert(
                'Select Number',
                'Which number would you like to call?',
                phoneNumbers.map((number) => ({
                    text: number,
                    onPress: () => dialNumber(number),
                })).concat([{ text: 'Cancel', style: 'cancel' }]), 
                { cancelable: true },
            );
        }
    };

    // Function to check if phone number is empty or has '-' in it
    const isPhoneNumberEmpty = (phoneNumber) => phoneNumber === '-';

    // Format the phone number to change ext. to samb.
    const formatPhoneNumber = (phoneNumber) => {
        return phoneNumber.replace("ext.", "samb.");
    };

    console.log('activeState: ', activeState);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Title and Building Icon */}
                <View style={styles.titleContainer}>
                    <Image source={{uri: icon}} style={styles.iconBuilding} />
                    <Text style={styles.infoTextTitle}>{title}</Text>
                </View>

                {/* Address */}
                <View style={styles.infoContainerLocation}>
                    <Image source={require('../../assets/locationPinIcon.png')} style={styles.iconLocation} />
                    <View style={styles.textContainerLocation}>
                        <Text style={styles.infoText}>{location}</Text>
                        {/* <Text style={styles.infoText}>{address}</Text> */}
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/phoneIcon.png')} style={styles.icon} />
                    <Text style={styles.infoText}>{formatPhoneNumber(phoneNo)}</Text>
                </View>

                {/* If active state is pahang, dont show this view component */}
                {activeState === 'Pahang' ? null : 
                    <View style={styles.infoContainer}>
                        <Image source={require('../../assets/faxIcon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>{faxNo}</Text>
                    </View>
                }

                {/* Operating Hours */}
                <View style={styles.infoContainerTime}>
                    <Image source={require('../../assets/timeIcon.png')} style={styles.icon} />
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.infoTextColumn}>Isnin - Jumaat</Text> */}
                        <Text style={styles.infoTextColumn}>{operationTime}</Text>
                    </View>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    {/* Button Lihat Peta */}
                    <TouchableOpacity style={styles.buttonOne} onPress={onLihatPetaPressed} >
                        <Text style={styles.buttonTextOne}>Lihat Lokasi</Text>
                    </TouchableOpacity>

                    {/* Button Hubungi Pejabat */}
                    <TouchableOpacity 
                        style={[styles.buttonTwo, isPhoneNumberEmpty(phoneNo) ? styles.buttonDisabled : {}]}
                        onPress={() => onHubungiPejabatPressed(phoneNo)}
                        disabled = {isPhoneNumberEmpty(phoneNo)}
                    >
                        <Text style={styles.buttonTextTwo}>Hubungi Pejabat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'colummn',
        marginTop: 0,
    },
    contentContainer: {
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: Platform.OS === 'ios' ? 5 : 15,
        maxWidth: '100%',
        marginBottom: 10,
    },
    infoContainerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 17,
        paddingLeft: Platform.OS === 'ios' ? 5 : 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '60%', 
        paddingLeft: Platform.OS === 'ios' ? 5 : 10,
        marginBottom: 5,
    },
    infoContainerTime: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '70%', 
        paddingLeft: Platform.OS === 'ios' ? 5 : 10,
        paddingBottom: Platform.OS === 'ios' ? 5 : 15,
        marginBottom: 1,
    },
    textContainer: {
        flexDirection: 'column', 
        paddingTop: 5,
        height: 50, 
    },
    textContainerLocation: {
        flex: 1,
        // height: 70, 
        paddingTop: 5,
        justifyContent: 'center',
    },
    doubleInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        maxWidth: '85%',
    },
    icon: {
        width: 25,
        height: 25, 
        marginRight: 10,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    iconLeft: {
        width: 25,
        height: 25, 
        marginRight: 10,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    iconRight: {
        width: 25,
        height: 25, 
        marginLeft: 30,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    iconLocation: {
        width: 25,
        height: 30, 
        marginRight: 10,
        marginBottom: 15,
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
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10,
      },
    infoText: {
        color: '#777777',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 15,
        paddingLeft: 5,
        marginBottom: 12,
    },
    infoTextColumn: {
         color: '#777777',
         fontWeight: '600',
         fontSize: 14,
         lineHeight: 15,
         paddingLeft: 5,
    },
    buttonContainer: {
        paddingTop: '2%',
        marginTop: 30,
        // paddingBottom: '20%',
        alignItems: 'center',
        // marginBottom: 20,
    },
    buttonOne: {
        backgroundColor: '#9448DA',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center', 
        width: 300, 
    },
    buttonTwo: {
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
    buttonDisabled: {
        opacity: 0.4,
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