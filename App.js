import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/homeScreen/index';
import LocationScreen from './app/screens/locationScreen/index';
// import LocationInfoScreen from './app/screens/locationInfoScreen/index';
import ChatScreen from './app/screens/chatScreen/index';
import SupportScreen from './app/screens/supportScreen/index';
import FeedbackScreen from './app/screens/feedbackScreen/index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BulletinMain from './app/screens/bulletinMain/index';
import BulletinInfoScreen from './app/screens/bulletinInfo/index';

// import CustomTile from './app/screens/bulletinMain/BulletinCustomTile';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false 
};

export default function App() {
  // Load the custom font
  const [loaded] = useFonts({
    'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    // Font is not loaded yet, you can return a loading indicator or null
    return null;
  }

  function CustomTabBarButton({ onPress }) {
    // This is the custom component for the middle button
    const navigation = useNavigation();

    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <TouchableOpacity
        style={{
          top: -21,
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

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <SafeAreaProvider style={{flex:1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              // Add logic to determine the icon based on the route and focus state
              let iconSource;
              let iconStyle = styles.tabIcon; // default style
              if (route.name === 'HomeScreen') {
                iconSource = focused
                  ? require('./app/assets/UtamaActive.png')
                  : require('./app/assets/utamaIcon.png');
              } else if (route.name === 'LocationScreen') {
                iconSource = focused
                  ? require('./app/assets/LokasiActive.png')
                  : require('./app/assets/lokasiIcon.png');
              } else if (route.name === 'SupportScreen') {
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
              // Customize the tab bar button for ChatScreen
              if (route.name === 'ChatScreen') {
                return <CustomTabBarButton {...props} />;
              } else {
                // This is the default behavior for other buttons
                return <TouchableOpacity {...props} />;
              }
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          })}
        >
          {/* Tab screens */}
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="LocationScreen" component={LocationScreen} />
          <Tab.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              tabBarButton: () => <CustomTabBarButton />,
            }}
          />
          <Tab.Screen name="SupportScreen" component={SupportScreen} />
          <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 8,
    elevation: 3, // for Android shadow
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
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 10,
  },
});
