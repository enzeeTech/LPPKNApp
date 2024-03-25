import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './LocationScreenHeader';
import StateTable from './StateTable';

function LocationScreen({navigation}) {
  
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <ScrollView 
                style={styles.stateContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                <Text style={styles.bodyText}>Pilih Negeri</Text>
                <StateTable navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#9448DA',
    },
    headerContainer: {
        backgroundColor: 'transparent', 
        zIndex: 5,
    },
    stateContainer: {
        flex: 1, 
        backgroundColor: '#FFFF',
        marginTop: -12,
    },
    bodyText: {
        color: '#777777',
        paddingLeft: '4%',
        fontSize: 12,
        paddingTop: '8%',
    },
    contentContainer: {
        paddingBottom: 100, 
    },
});

export default LocationScreen;