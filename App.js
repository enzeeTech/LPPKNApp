import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Platform, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

// Import screens
import LocationStack from './app/screens/locationScreen/LocationStack';
import ChatScreen from './app/screens/chatScreen/index';
import ServicesStack from './app/screens/servicesScreen/ServicesStack';
import FeedbackScreen from './app/screens/feedbackScreen/index';
import HomeStack from './app/screens/homeScreen/HomeStack';
import NotificationsHomeScreen from './app/screens/notifications';
import { LocationProvider } from './app/services/LocationProvider';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false 
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  // Animation Splash Screen
  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 2000); // 2 seconds
  };

  const scheme = useColorScheme();

  // Load the custom font
  const [loaded] = useFonts({
    'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  // Notification-related state and ref hooks
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // Register for notifications
  useEffect(() => {
    registerForPushNotificationsAsync().then(async token => {
      try {
        // const vv = await fetch('https://d77e-202-186-149-47.ngrok-free.app/save-token', {
        const vv = await fetch('https://lppkn-node.onrender.com/save-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })  
        console.log(vv)
      } catch (error) {
        console.warn("FAIL TO REGISTER TOKEN: DEVICE WONT GET NOTIFICATION", error)  
      }
      console.log("REGISTER TOKEN AGAIN", token)
      return token && setExpoPushToken(token)
    });

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!loaded) {
    return null;
  }

  if (!animationDone) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <LottieView 
          source={require('./app/assets/Json/splashScreenWhite.json')} 
          autoPlay 
          speed={1.8}
          loop={false} 
          onAnimationFinish={handleAnimationComplete}
          style={styles.lottieView}
        />
      </SafeAreaView>
    );
  }

  // Custom tab bar button
  function CustomTabBarButton({ onPress }) {
    const navigation = useNavigation();
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <TouchableOpacity
          style={{
            top: Platform.OS === 'ios' ? -17 : -25,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
          }}
          onPress={() => navigation.navigate('ChatScreen')}
        >
          <View style={styles.customButton}>
            <Image
              source={require('./app/assets/tanyaKasihIcon.png')}
              style={styles.customIcon}
            />
          </View>
        </TouchableOpacity> 
      </GestureHandlerRootView>
    );
  }

  return (
    <LocationProvider>
      <GestureHandlerRootView style={{flex:1}}>
        <SafeAreaProvider style={{flex:1}}>
          <StatusBar style="dark" /> 
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="HomeScreen"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                  let iconSource;
                  let iconStyle = styles.tabIcon; 
                  if (route.name === 'HomeScreen') {
                    iconSource = focused
                      ? require('./app/assets/UtamaActive.png')
                      : require('./app/assets/utamaIcon.png');
                  } else if (route.name === 'LocationScreen') {
                    iconSource = focused
                      ? require('./app/assets/LokasiActive.png')
                      : require('./app/assets/lokasiIcon.png');
                  } else if (route.name === 'ServicesScreen') {
                    iconSource = focused
                      ? require('./app/assets/PerkhidmatanActive.png')
                      : require('./app/assets/perkhidmatanIcon.png');
                    iconStyle = {...styles.tabIcon, width: 80, height: 80 };
                  } else if (route.name === 'FeedbackScreen') {
                    iconSource = focused
                      ? require('./app/assets/AduanActive.png')
                      : require('./app/assets/aduanIcon.png');
                  }
                  return (
                    <Image
                      source={iconSource}
                      style={iconStyle}
                      resizeMode="contain"
                    />
                  );
                },
                tabBarButton: (props) => {
                  if (route.name === 'ChatScreen') {
                    return <CustomTabBarButton {...props} />;
                  } else {
                    return <TouchableOpacity {...props} />;
                  }
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
              })}
            >
              <Tab.Screen name="HomeScreen" component={HomeStack} />
              {/* <Tab.Screen name="HomeScreen" component={NotificationsHomeScreen} /> */}
              <Tab.Screen name="LocationScreen" component={LocationStack} />
              <Tab.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                  tabBarButton: () => <CustomTabBarButton />,
                }}
              />
              <Tab.Screen name="ServicesScreen" component={ServicesStack} />
              <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </LocationProvider>
  );
}

// Notification functions
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "New Bulletin Post Available!! 📬",
      body: 'Go read it now ;)',
      data: { data: 'goes here' },
      icon: '../../assets/notification-icon.png',
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: '8d7a4c07-5171-4e06-9cd0-0d2899e2ee47' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const styles = StyleSheet.create({
  splashContainer: { 
    flex: 1, 
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  lottieView: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    position: 'absolute',
    elevation: 10,
    backgroundColor: '#FFFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: Platform.OS === 'ios' ? 75 : 60,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: -1, width: 0 },
  },
  tabIcon: {
    width: 40,
    height: 40,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  customIcon: {
    width: 70, 
    height: 70, 
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -1 },
    elevation: 10,
  },
});
