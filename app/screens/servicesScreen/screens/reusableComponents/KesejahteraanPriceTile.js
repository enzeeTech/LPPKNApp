import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListItem from './tileListItems/ListItems';


const KesejahteraanPriceTile = ({ prices, dataPakej1, dataPakej2, isLastTile }) => {
  const [activeTab, setActiveTab] = useState('resident');

  const tileStyle = isLastTile ? { marginRight: 20 } : {};


  return (
    <View style={[styles.tabParentContainer, tileStyle]}>
      
      {!isLastTile && (
        <View style={styles.tabButtonContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'resident' ? styles.buttonActive : styles.buttonInactive
            ]}
            onPress={() => setActiveTab('resident')}
          >
            <Text style={[styles.tabText, activeTab === 'resident' ? styles.tabTextActive : styles.tabTextInactive]}>
              Pakej 1
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
              Pakej 2
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.priceText}>{prices[activeTab]}</Text>

      {/* List of items */}
      <View style={{ marginTop: 10 }}>
    {activeTab === 'resident' && dataPakej1.map((item, index) => (
        <ListItem key={index} title={item.title} />
    ))}
    {activeTab === 'nonResident' && dataPakej2.map((item, index) => (
        <ListItem key={index} title={item.title} />
    ))}
</View>
    </View>
  );
};

export default KesejahteraanPriceTile;

const styles = StyleSheet.create({
    tabParentContainer: {
        flex: 1,
        backgroundColor: '#F9F3FF',
        ...Platform.select({
            ios: {
                // iOS styles
                width: '100%',
                marginTop: '10%',
                marginLeft: '15%',
                paddingBottom: 20,

            },
            android: {
                // Android styles
                width: '102%',
                marginTop: '10%',
                marginLeft: '16%',
                paddingBottom: 30,

            },
        }),
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
        height: '13%',
        marginLeft: '5%',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#777777', 
        borderWidth: 1,
    },
    tabButton: {
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'transparent', 
        // height: 50,
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
        marginTop: 20,
        marginBottom: 10,
        fontSize: 46,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5D2E86',
    },
    itemListContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1, 
        borderTopColor: '#D6BDF4', 
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1, 
        borderBottomColor: '#D6BDF4', 
    },
    itemIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    itemTextContainer: {
        flex: 1, 
    },
    itemText: {
        fontSize: 16,
        color: '#5D2E86',
    },
    itemSeparator: {
        borderBottomColor: '#121112',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginBottom: 5,
    },
    headerText:{
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 15,
        color: '#9448DA',
    },
});
