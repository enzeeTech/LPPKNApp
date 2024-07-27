import React, {useState, useEffect} from 'react';
import { View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';
import styles from '../StyleServices';
import PenyelidikanList from './reusableComponents/PenyelidikanList';
import GlobalApi from '../../../services/GlobalApi';

const Penyelidikan = ({ navigation }) => {

    const [responseData, setResponseData] = useState([]);
    const [componentData, setComponentData] = useState([]);
    const [linkTitle, setLinkTitle] = useState([]);
    const [linkURL, setLinkURL] = useState([]);

    const fetchPerkhidmatanKeluarga = async () => {
        try {
            const response = await GlobalApi.getServiceByName('Penyelidikan');
            
            if (response.data.data.length > 0) {
                const service = response.data.data[0].attributes;
    
                const componentData = service.Content.map(component => {
                    if (component.__component === 'tiles.image-desc-tile') {
                        return component.TileData.tile.items;
                    }
                    return null;
                }).flat().filter(item => item !== null);

                setLinkTitle(service.Content.map(component => {
                    if (component.__component === 'links.link1') {
                        return component.Title;
                    }
                    return null;
                }).flat().filter(item => item !== null));

                setLinkURL(service.Content.map(component => {
                    if (component.__component === 'links.link1') {
                        return component.URL;
                    }
                    return null;
                }).flat().filter(item => item !== null));


                const responseData = {
                    ServiceID: service.ServiceID,
                    Title: service.ServiceTitle,
                    ServiceImage: service.ServiceImage.data.attributes.url,
                    Description: service.Description,
                };
                
                setResponseData(responseData);
                setComponentData(componentData);
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error('Error fetching KafeTEEN service:', error);
        }
    };

    useEffect(() => {
        fetchPerkhidmatanKeluarga();
    }, []);

    const handleBackPress = () => {
        navigation.goBack();
    }

    if (!responseData.ServiceID) {
        return (
            <SafeAreaView style={styles.container}>
                <Header onBackPress={handleBackPress} />
                <ScrollView style={{marginTop: -10}} showsVerticalScrollIndicator={false}>
                    <View style={styles.backgroundContainer}>
                        <Image source={{uri: 'https://placehold.co/150x150/DEDEDE/DEDEDE/png'}} style={styles.backgroundImage} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Loading...</Text>
                        </View>
                        {/** padding till the end of the screen */}
                        <View style={{height: 500, backgroundColor: '#FFF'}}></View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );    
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={handleBackPress} />
            <ScrollView style={{ marginTop: -10 }} showsVerticalScrollIndicator={false}>

                {/* Background Image */}
                <View style={styles.backgroundContainer}>
                    <Image source={{ uri: responseData.ServiceImage }} style={styles.backgroundImage} />
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{responseData.Title}</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>
                        {responseData.Description}
                        </Text>
                    </View>
                    <View style={{height: 20, backgroundColor: '#FFF'}}></View>

                    {/* Containers */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20, paddingRight: 40 }}>
                            {componentData.map((item, index) => (
                                <PenyelidikanList 
                                    key={`${item.title}-${index}`}
                                    title={item.title}
                                    imageSource={{ uri: item.imageSource }}
                                    additionalText={item.additionalText}
                                />
                            ))}
                    </ScrollView>

                    <View style={{ height: 50, backgroundColor: '#FFF' }}></View>

                    {/* Button selection */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.buttonViewTwo}
                            onPress={() => Linking.openURL(linkURL[0])}  
                        >
                            <Text style={styles.buttonTextTwo}>{linkTitle}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 100, backgroundColor: '#FFF' }}></View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Penyelidikan;
