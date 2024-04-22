import React, { useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import DetailsComponent from './DetailsSection';
import * as Location from 'expo-location';
import { useLocation } from '../../services/LocationProvider';
import { useFocusEffect } from '@react-navigation/native';

function StateTable({navigation}) {
    const numRows = 5;
    const numColumns = 3;
    const nameList = [
        'Perlis', 'Kedah', 'Pulau Pinang', 'Perak', 'Selangor', 'WP                Kuala Lumpur',
        'Negeri Sembilan', 'Melaka', 'Johor', 'Pahang', 'Terengganu', 'Kelantan', 'Sabah', 'Sarawak'
    ];
    const { stateName } = useLocation();
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [userHasSelected, setUserHasSelected] = useState(false);

    const handleItemPress = (index) => {
        // Toggle the active state or set it to null if it's already active thus deactivating it
        setActiveButtonIndex(index);
        setUserHasSelected(true);
    };

    // Function to set the active state based on user's location
    const setActiveStateFromLocation = useCallback(() => {
        if (!userHasSelected) { // Only auto-set location if user hasn't selected a state
            let index = nameList.findIndex(name =>
                name.toLowerCase().includes(stateName ? stateName.toLowerCase().replace(/\s+/g, ' ').trim() : '')
            );
            if (index === -1) {
                index = nameList.findIndex(name => name.includes("Kuala Lumpur"));
            }
            setActiveButtonIndex(index);
        }
        // If the user has selected a state, do nothing
    }, [stateName, userHasSelected]);

    // Effect to set the active state when the component mounts
    useEffect(() => {
        setActiveStateFromLocation();
    }, [setActiveStateFromLocation]);

    // Effect to set the active state when the Lokasi tab gains focus
    useFocusEffect(
        useCallback(() => {
            setActiveStateFromLocation();
        }, [setActiveStateFromLocation])
    );

    const buttons = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            const buttonIndex = j + i * numColumns;
            if (buttonIndex < nameList.length) {
                const isPressed = buttonIndex === activeButtonIndex;
                row.push(
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isPressed ? styles.buttonActive : styles.buttonInactive,
                            {marginLeft: 4, marginTop: 4}
                        ]}
                        key={buttonIndex}
                        onPress={() => handleItemPress(buttonIndex)}
                    >
                        <Text style={{
                            color: isPressed ? '#FFFFFF' : '#777777',
                            fontWeight: isPressed ? 'bold' : '600',
                            fontSize: Platform.OS === 'ios' ? 14 : 16,
                            textAlign: 'center',
                            padding: 3,
                             }}>
                            {nameList[buttonIndex]}
                        </Text>
                    </TouchableOpacity>
                );
            }
        }
        buttons.push(
            <View style={styles.buttonRow} key={i}>
                {row}
            </View>
        );
    }

    // For testing purposes
    const activeStateText = activeButtonIndex !== null ? nameList[activeButtonIndex] : "None";

    return (
        <View style={styles.container}>
            {buttons}
            {/* Render the DetailsComponent only if the activeButtonIndex is not null */}
            <View style={styles.listView}>
                {activeButtonIndex !== null && (
                    <DetailsComponent navigation={navigation} activeState={nameList[activeButtonIndex]} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        // flex: 1, 
        padding: '4%', 
        paddingTop: '1%',
    },
    buttonRow: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        backgroundColor: '#EAFFEE', 
        borderRadius: 10, 
        borderColor: '#21CF44',
        borderWidth: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 49,
        // width: 114,
        width: Platform.OS === 'ios' ? 114 : 80,
    },
    buttonText: {
        fontSize: 14,
        color: '#777777',
        textAlign: 'center',
    },
    activeStateText: {
        color: 'black',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    },
    buttonActive: {
        backgroundColor: '#21CF44', // Active button color
    },
    buttonInactive: {
        backgroundColor: '#EAFFEE', // Inactive button color
    },
    listView: {
        flex: 1,
        marginTop: 20,
    },
});

export default StateTable;
