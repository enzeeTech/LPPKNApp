import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

function StateTable() {
    const numRows = 5;
    const numColumns = 3;
    const nameList = ['Perlis', 'Kedah', "Pulau Pinang", "Perak", "Selangor", "WP Kuala Lumpur",
                      "Negeri Sembilan", "Melaka", "Johor", "Pahang", "Terengganu", "Kelantan", "Sabah",
                      "WP Labuan",  "Sarawak"];

    const handleItemPress = (itemText) => {
        // Handle the press event for the specific item 
        console.log(`Item "${itemText}" is pressed`);
      };
    
    // Generate button elements
    const buttons = [];
    let itemIndex = 0; // Initialize the index for itemsArray

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
        if (itemIndex < nameList.length) {
            const itemText = nameList[itemIndex];
            row.push(
            <TouchableOpacity
                style={[styles.button, {
                    // marginLeft: j > 0 ? buttonMargin : 5, // Horizontal margin
                    // marginTop: i > 0 ? buttonMargin : 5, // Vertical margin
                    }
                ]}
                key={itemIndex}
                onPress={() => handleItemPress(itemText)}
            >
                <Text style={styles.buttonText}>{itemText}</Text>
            </TouchableOpacity>
            );
            itemIndex++; // Increment the index for itemsArray
        }
        }
        buttons.push(
        <View style={styles.buttonRow} key={i}>
            {row}
        </View>
        );
    }

    return (
        <View style={styles.container}>
          {/* Render the button rows */}
          {buttons}
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
        justifyContent: 'space-between',
        // marginHorizontal: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#EAFFEE', 
        borderRadius: 10, // Rounded edges
        borderColor: '#21CF44',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 114
    },
    buttonText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#777777',
        textAlign: 'center',
    },
  });

export default StateTable;
