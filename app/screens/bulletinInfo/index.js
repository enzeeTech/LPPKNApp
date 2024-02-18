import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Header from './BulletinInfoHeader';
import InfoSection from './BulletinInfoSection';
import { ScrollView } from 'react-native';
import GlobalApi from '../../services/GlobalApi';


// Get the full height of the screen
const screenHeight = Dimensions.get('window').height;

const BulletinInfoMain = ({navigation, route}) => {
    const insets = useSafeAreaInsets();
    const bottomNavBarHeight = insets.bottom;
    const {itemId} = route.params;
    const [itemDetails, setItemDetails] = useState(null);

    // Function to format the date correctly
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        // Create a date object from dateString
        const date = new Date(dateString);
        // Format date to local string with specified options
        const formattedDate = date.toLocaleDateString('ms-MY', options);

        return formattedDate;
    };

    // Fetch item details when itemId changes
    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await GlobalApi.getBulletinPostById(itemId);
                setItemDetails({
                    id: response.data.data.id,
                    title: response.data.data.attributes.Title,
                    date: formatDate(response.data.data.attributes.Date),
                    images: response.data.data.attributes.PostImages.data.map(image => ({
                        id: image.id,
                        url: image.attributes.url,
                    })),
                    information: response.data.data.attributes.Information,
                    link: response.data.data.attributes.NewsArticleWebsiteLink,
                });
            } catch (error) {
                console.error("Fetching item details failed: ", error);
            }
        };
    
        if (itemId) {
            fetchItemDetails();
        }
    }, [itemId]);


    const infoContainerStyle = {
        flex: 1, 
        paddingBottom: bottomNavBarHeight, 
    };

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header onBackPress={handleBackPress} />
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                style={{marginTop: -13}}
            >
                <View style={[styles.infoContainer, infoContainerStyle]}>
                        <InfoSection
                            title={itemDetails?.title}
                            date={itemDetails?.date}
                            images={itemDetails?.images}
                            information={itemDetails?.information}
                            link={itemDetails?.link}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#9448DA',
        // backgroundColor: 'transparent',
    },
    headerContainer: {
        backgroundColor: '#9448DA', 
        zIndex: 5,
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    image: {
        width: '100%',
        height: screenHeight * 0.3,
        // marginTop: 0,
    },
    infoContainer: {
        flex:1,
        
    },
});

export default BulletinInfoMain;