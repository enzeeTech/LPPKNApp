import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListItem from './tileListItems/ListItems';

const PriceTabTile = ({ data, prices, activeTab, setActiveTab, price1Title, price2Title }) => {
    // Function to determine if the title needs to be split into multiple lines
    const renderTitle = (title) => {
        if (title.length > 12) {
            return title.split(' ').join('\n');
        }
        return title; 
    };

    return (
        <View style={styles.tabParentContainer}>
            {/* Tab buttons */}
            <View style={styles.tabButtonContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 'resident' ? styles.buttonActive : styles.buttonInactive
                    ]}
                    onPress={() => setActiveTab('resident')}
                >
                    <Text style={[styles.tabText, activeTab === 'resident' ? styles.tabTextActive : styles.tabTextInactive]}>
                        {renderTitle(price1Title)}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 'nonResident' ? styles.buttonActive : styles.buttonInactive
                    ]}
                    onPress={() => setActiveTab('nonResident')}
                >
                    <Text style={[styles.tabText, activeTab === 'nonResident' ? styles.tabTextActive : styles.tabTextInactive]}>
                        {renderTitle(price2Title)}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>RM{prices[activeTab]}</Text>
            <View style={{ marginTop: 10 }}>
                {data.map((item, index) => (
                    <ListItem key={index} title={item.title} subtitle={item.subtitle ? item.subtitle : null} />
                ))}
            </View>
        </View>
    );
};

export default PriceTabTile;

const styles = StyleSheet.create({
    tabParentContainer: {
        flex: 1,
        backgroundColor: '#F9F3FF',
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10,
        borderColor: '#D6BDF4',
        borderWidth: 1,
        overflow: 'hidden',
        //Add shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 2,
    },
    tabButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        marginLeft: '5%',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#777777', 
        borderWidth: 1,
    },
    tabButton: {
        flexGrow: 1, 
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'transparent', 
        borderWidth: 1,
        borderLeftWidth: 0, 
        borderRightWidth: 0,
    },
    buttonActive: {
        backgroundColor: '#21CF44',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
    },
    buttonInactive: {
        backgroundColor: 'transparent',
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        color: '#777777',
    },
    tabTextActive: {
        color: '#FFFFFF',
    },
    tabTextInactive: {
        color: '#777777',
    },
    priceText: {
        marginTop: 15,
        marginBottom: 10,
        fontSize: 46,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5D2E86',
    },
});
