import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './app/screens/locationInfoScreen/MainScreen';
import { useFonts } from 'expo-font';

export default function App() {
  useFonts({
    'roboto-regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <MainScreen />
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
