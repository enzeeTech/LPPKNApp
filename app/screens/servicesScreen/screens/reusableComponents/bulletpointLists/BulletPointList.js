import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BulletPointList = ({ title, description, bulletPoints }) => {
    return (
        <View>
            <View style={[styles.subTextOneContainer, { alignItems: 'flex-start', marginLeft: 15, marginTop: 40 }]}>
                <Text style={styles.subTextOne}>{title}</Text>
            </View>
            {description && (
                <View style={[styles.introContainer, { marginBottom: 5 }]}>
                    <Text style={styles.introText}>
                        {description}
                    </Text>
                </View>
            )}
            <View style={styles.bulletContainer}>
                {bulletPoints.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.bulletPointContainer,
                            index === bulletPoints.length - 1 ? styles.lastBulletPointContainer : null
                        ]}
                    >
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
    lastBulletPointContainer: {
        borderBottomWidth: 1, // Add bottom border for the last item
    },
    textContainer: {
        width: '85%',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    bullet: {
        fontSize: 16,
        color: '#777777',
        marginRight: 10,
    },
    bulletPointText: {
        fontSize: 16,
        color: '#777777',
    },
    introContainer: {
        width: '100%',
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 15,
        marginBottom: 20,
    },
    introText: {
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
        color: '#777777',
    },
});
