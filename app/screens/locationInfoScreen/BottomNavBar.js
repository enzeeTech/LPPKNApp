import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/utamaIcon.png')} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/lokasiIcon.png')} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="TanyaKasih"
        component={TanyaKasihScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.centerButtonContainer}>
              <Image source={require('../../assets/tanyaKasihIcon.png')} style={styles.centerButton} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perkhidmatan"
        component={PerkhidmatanScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/perkhidmatanIcon.png')} style={styles.serviceIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Aduan"
        component={AduanScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/aduanIcon.png')} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  serviceIcon: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  centerButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  centerButton: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});