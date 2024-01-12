import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DropdownItem = ({ name, price}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemContext}>
        <Text style={styles.itemText}>{name}</Text> 
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderTopWidth: 0.25,
    borderColor: '#000000',
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
    marginTop: 5,
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

export default DropdownItem;
