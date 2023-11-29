import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationInfoScreen from './app/screens/locationInfoScreen/LocationInfoScreen';
import { useFonts } from 'expo-font';

export default function App() {
  useFonts({
    'roboto-regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <LocationInfoScreen />
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
