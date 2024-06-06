// BulletPointList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BulletPointList = ({ title, bulletPoints }) => {
    return (
        <View>
            <View style={[styles.subTextOneContainer, { alignItems: 'flex-start', marginLeft: 15, marginTop: 40 }]}>
                <Text style={styles.subTextOne}>{title}</Text>
            </View>
            <View style={styles.bulletContainer}>
                {bulletPoints.map((item, index) => (
                    <View key={index} style={styles.bulletPointContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.bulletPointText}>{item}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default BulletPointList;

const styles = StyleSheet.create({
    subTextOneContainer: {
        width: '90%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    subTextOne: {
        fontSize: 20,
        fontWeight: '800',
        color: '#5C2D86',
    },
    bulletContainer: {
        width: '100%',
        marginTop: 10,
    },
    bulletPointContainer: {
        width: '100%',
        borderColor: '#DDDDDD',
        borderTopWidth: 1,
        paddingVertical: 5,
    },
    textContainer: {
        width: '85%',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    bullet: {
        fontSize: 14,
        color: '#777777',
        marginRight: 10,
    },
    bulletPointText: {
        fontSize: 14,
        color: '#777777',
    },
});
