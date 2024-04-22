import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Header from './Header';
import React from 'react';
import LocationDetailsList from './LocationDetailsList';
import { useLocation } from '../../../services/LocationProvider';
import GlobalApi from '../../../services/GlobalApi';

function LocationCollection({navigation, route}) {
    const [responseData, setResponseData] = useState([]);
    const [loading, setLoading] = useState(true);
    let title = '';

    const query = route.params.query;
    // console.log(query);

    const { stateName } = useLocation();
    // console.log(stateName);

    // Helper function for formatting the data
    const formatData = (data) => {
        if (!data) return [];
        return data.map((item) => ({
            id: item.id,
            title: item.Title || '-',
            location: item.Location || '-',
            phoneNo: item.PhoneNo || '-',
            faxNo: item.FaxNo || '-',
            operationTime: item.OperationTime || '-',
            icon: item.Icon?.url,
            background: item.BackgroundImage?.url,
        }));
    };

    // Helper function for formatting the title
    if (query === 'Pejabat') {
        title = 'Pejabat LPPKN Negeri';
    } else if (query === 'Klinik Nur Sejahtera') {
        title = 'Klinik Nur Sejahtera'; 
    } else if (query === 'KafeTEEN') {
        title = 'KafeTEEN';
    }

    // Call the api to get the location collectiton
    const getLocationCollection = () => {
        GlobalApi.searchCollection(encodeURIComponent(query), stateName)
            .then((response) => {
                setResponseData(formatData(response.data));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }
    
    // navigate back to the previous screen
    const handleBackButton = () => {
        navigation.goBack();
    };


    useEffect(() => {
        getLocationCollection();
    }, []);

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
                <LocationDetailsList navigation={navigation} data={responseData} title={title} loading={loading}/>
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