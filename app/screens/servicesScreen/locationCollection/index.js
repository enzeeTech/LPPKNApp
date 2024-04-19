import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './Header';
import React from 'react';
import LocationDetailsList from './LocationDetailsList';
import { useLocation } from '../../../services/LocationProvider';

function LocationCollection({navigation, route}) {

    const query = route.params.query;
    console.log(query);

    // let title = '';

    // if (query === 'Pejabat') {
    //     title = 'Pejabat LPPKN Negeri';
    // } else if (query === 'Klinik Nur Sejahtera') {
    //     title = 'Klinik Nur Sejahtera'; 
    // } else if (query === 'KafeTEEN') {
    //     title = 'KafeTEEN';
    // }

    
    // navigate back to the previous screen
    const handleBackButton = () => {
        navigation.goBack();
    };

    const { stateName } = useLocation();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header onBackPress={handleBackButton}/>
            </View>
            <ScrollView 
                style={styles.stateContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                {/* <Text style={styles.bodyText}>{title}</Text> */}
                <LocationDetailsList navigation={navigation} query={query} location={stateName}/>
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
        color: '#9448DA',
        paddingLeft: '4%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: '8%',
    },
    contentContainer: {
        paddingBottom: 100, 
    },
});

export default LocationCollection;