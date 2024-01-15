// Creates a list component for items that include a header text with bullet points and a price
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DropdownItemBulletWithPrice = ({ title, items, isFirstItem }) => {
    return (
        <View style={[styles.container, isFirstItem ? styles.firstItem : null]}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{marginBttom: 0}}>
                    {items.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.itemLabel}>{String(item.label)}</Text>
                            <Text style={styles.itemPrice}>{String(item.price)}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 91,
        width: '100%',
        borderTopWidth: 0.25,
        borderColor: '#000000',
    },
    firstItem: {
        borderTopWidth: 0,
    },
    innerContainer: {
        width: '90%',
        height: 89,
        marginLeft: '5%',
    },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#777777',
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    bullet: {
        marginRight: 8,
    },
    itemLabel: {
        flex: 1,
        fontSize: 15,
        color: '#777777',
    },
    itemPrice: {
        fontSize: 16,
        color: '#777777',
    },
});

export default DropdownItemBulletWithPrice;
