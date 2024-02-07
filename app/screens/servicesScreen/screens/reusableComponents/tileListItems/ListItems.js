// ListItem.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ListItem = ({ title, subtitle }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.contentContainer}>
        <Image source={require('../../../../../assets/greenTick.png')} style = {styles.image} />
        <View style={{ marginLeft: 10, width: '80%'}}>
            <Text style={styles.headerText}>{title}</Text>
            {subtitle && <Text style={styles.subHeaderText}>{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 11,
        borderTopWidth: 0.5,
        borderTopColor: '#C4C4C4',
    },
    contentContainer: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
    },
    headerText: {
        fontWeight: 'bold',
        color: '#777777',
        fontSize: 14,
    },
    subHeaderText: {
        color: '#777777',
        fontSize: 14,
    },
});