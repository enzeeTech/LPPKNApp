import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DropdownItemWithPrice = ({ items }) => {

    return (
        items.map((item, index) => (
            console.log(item.text, item.price, item.isFirstItem),
            <View key={index} style={[styles.item, item.isFirstItem ? styles.firstItem : null]}>
                <View  style={styles.itemContext}>
                    <Text style={styles.itemText}>{item.name}</Text> 
                    <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderTopWidth: 0.25,
    borderColor: '#000000',
  },
  firstItem: {
    borderTopWidth: 0,
  },
  itemContext: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#777777',
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    color: '#777777',
  },
});

export default DropdownItemWithPrice;
