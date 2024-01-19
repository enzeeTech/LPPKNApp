import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PenyelidikanList = ({ title, imageSource, additionalText, titleStyle }) => {

  return (
    <View style={[styles.parentContainer]}>
      <Image source={imageSource} style={styles.imageAboveTitle} />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{additionalText}</Text>
      </View>
    </View>
  );
};

export default PenyelidikanList;

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        height: 500, 
        backgroundColor: '#F9F3FF',
        width: '82%',
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
    imageAboveTitle: {
        width: '85%',
        height: 170,
        borderRadius: 14,
        marginBottom: 10,
        marginTop: 25,
        marginLeft: 25,
        shadowColor: "#000000",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        },
        textContainer: {
            flex: 1,
            justifyContent: 'space-between',
            paddingVertical: 15, // Adjusted padding for consistent spacing
            paddingHorizontal: 15,
        },
    title: {
        marginTop: 7,
        marginBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9448DA',
        paddingHorizontal: 15,
    },
    text:{
        fontSize: 15,
        color: '#777777',
        paddingHorizontal: 15,
    },

});