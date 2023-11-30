import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

function StateTable() {
    const numRows = 5;
    const numColumns = 3;
    const nameList = [
        'Perlis', 'Kedah', 'Pulau Pinang', 'Perak', 'Selangor', 'WP Kuala Lumpur',
        'Negeri Sembilan', 'Melaka', 'Johor', 'Pahang', 'Terengganu', 'Kelantan', 'Sabah',
        'WP Labuan', 'Sarawak'
    ];

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleItemPress = (index) => {
        // Toggle the active state or set it to null if it's already active
        setActiveButtonIndex(activeButtonIndex === index ? null : index);
    };


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

    // To show the active state text, make sure to check if the index is not null
    const activeStateText = activeButtonIndex !== null ? nameList[activeButtonIndex] : "None";

    return (
        <View style={styles.container}>
            {buttons}
            {/* Show the active button's name or "None" if no button is active */}
            <Text style={styles.activeStateText}>
                {`Active: ${activeStateText}`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
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
        height: 48,
        width: 114
    },
    buttonText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        fontWeight: '900',
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
});

export default StateTable;
