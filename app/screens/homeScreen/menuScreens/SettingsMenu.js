import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback, Platform } from 'react-native';
import CustomSwitchLanguage from '../switches/CustomSwitchLanguage';
import CustomSwitchNotif from '../switches/CustomSwitchNotif';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SettingsScreen = ({ onClose }) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isBmSelected, setIsBmSelected] = useState(false);

  const toggleNotificationsSwitch = () => {
    setIsNotificationsEnabled(previousState => {
      console.log('Notifications Switch new state:', !previousState);
      return !previousState;
    });
  };
  
  const toggleLanguageSwitch = () => {
    setIsBmSelected(previousState => {
      console.log('Language Switch new state:', !previousState);
      return !previousState;
    });
  };

  return (
      <TouchableOpacity
        activeOpacity={1} // Keeps the settings box non-opaque
        style={styles.settingsOverlay}
        onPress={onClose} 
      >
        <TouchableWithoutFeedback>
          <View style={styles.settingsContainer}>
            <TouchableOpacity onPress={onClose} style={styles.backButtonContainer}>
              <Image source={require('../../../assets/backButtonHome.png')} style={styles.backButton}/>
            </TouchableOpacity>
            <View style={styles.settingItemContainer}>
              <View style={styles.settingItemInfoContainer}>
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTextMain}>Notifikasi</Text>
                  <Text style={styles.settingTextSub}>Dapatkan notifikasi untuk info terbaharu</Text>
                </View>
                <CustomSwitchNotif
                  isEnabled={isNotificationsEnabled}
                  onToggle={toggleNotificationsSwitch}
                />
              </View>
              {/* <View style={styles.settingItemInfoContainer}>
                <View style={styles.settingTextContainer}>
                    <Text style={styles.settingTextMain}>Pilih Bahasa</Text>
                    <Text style={styles.settingTextSub}>Pilih bahasa pilihan anda</Text>
                  </View>
                {/* <CustomSwitchLanguage
                  isEnabled={isBmSelected}
                  onToggle={toggleLanguageSwitch}
                /> */}
              {/* </View> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    settingsOverlay: {
      position: 'absolute',
      top: 0,
      width: windowWidth,
      height: windowHeight,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    settingsContainer: {
      marginTop: Platform.OS === 'ios' ? -60 : -50,
      backgroundColor: '#9448DA',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding: 20,
      width: '100%',
    },
    backButtonContainer: {
      alignSelf: 'flex-start',
      marginTop: 50,
      marginBottom: 10,
      width: 30,
    },
    backButton: {
      width: 30,
      height: 20,
      resizeMode: 'contain',
    },
    settingItemContainer: {
      flexDirection: 'column',
      width: '90%',
      marginLeft: '5%',
      marginTop: 10,
      // backgroundColor: 'red',
    },
    settingItemInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      // backgroundColor: 'green',
    },
    settingTextContainer: {
      flexDirection: 'column',
    },
    settingTextMain: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '700',
    },
    settingTextSub: {
      color: '#DDC1FF',
      fontSize: 12,
      fontWeight: '400',
    },
  })

export default SettingsScreen;
