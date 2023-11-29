import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocationInfoScreen from './app/screens/locationInfoScreen/index';
import HomeScreen from './app/screens/homeScreen/index';
import LocationScreen from './app/screens/locationInfoScreen/index';
import ChatScreen from './app/screens/chatScreen/index';
import SupportScreen from './app/screens/supportScreen/index';
import FeedbackScreen from './app/screens/feedbackScreen/index';
import BottomTabBar from './app/screens/locationInfoScreen/BottomNavBar';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false 
};

export default function App() {
  // Load the custom font
  const [loaded] = useFonts({
    'roboto-regular': require('./app/assets/fonts/Roboto-Regular.ttf'), 
  });

  if (!loaded) {
    // Font is not loaded yet, you can render a loading component here if needed
    return null;
  }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="LocationInfoScreen" screenOptions={tabBarOptions}>
        <Tab.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options= {{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./app/assets/UtamaActive.png') : require('./app/assets/utamaIcon.png')}
              style={{ width: 24, height: 24 }}
              />
            ),
          }} />
        <Tab.Screen 
          name="LocationInfoScreen"
          component={LocationInfoScreen} 
          options={{
            tabBarVisible: false, 
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./app/assets/LokasiActive.png') : require('./app/assets/lokasiIcon.png')}
              style={{ width: 24, height: 24 }}
              />
            ),
          }} />
        <Tab.Screen name="ChatScreen" component={ChatScreen}/>
        <Tab.Screen 
          name="SupportScreen" 
          component={SupportScreen} 
          options= {{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./app/assets/PerkhidmatanActive.png') : require('./app/assets/perkhidmatanIcon.png')}
              style={{ width: 24, height: 24 }}
              />
            ),
          }} />
        <Tab.Screen 
          name="FeedbackScreen" 
          component={FeedbackScreen} 
          options= {{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./app/assets/AduanActive.png') : require('./app/assets/aduanIcon.png')}
              style={{ width: 24, height: 24 }}
              />
            ),
          }} />
      </Tab.Navigator>
      <BottomTabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
