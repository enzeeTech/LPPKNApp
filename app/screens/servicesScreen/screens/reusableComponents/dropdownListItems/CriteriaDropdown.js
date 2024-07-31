import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CriteriaDropdown = ({ data }) => {
  const [dropdownStates, setDropdownStates] = useState(data[0].map(() => false));

  const upArrowImage = require('../../../../../assets/pullUpArrow.png');
  const downArrowImage = require('../../../../../assets/dropdownArrow.png');

  const toggleDropdown = (index) => {
    // check if the index is false, if so set to true, else set to false
    setDropdownStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const renderDropdown = (items) => (
    <View style={styles.dropdownContainer}>
      {items.map((item, index) => (
        <View key={`dropdown-${index}`} style={styles.dropdownItemContainer}>
          <View style={styles.dropdownPointContainer}>
            <Icon name="circle" size={8} color="#9448DA" style={styles.pointIcon} />
            <Text style={styles.dropdownPointText}>{item}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View>
      {data[0].map((item, index) => (
        <View key={index} style={[styles.subTextFourContainer, { borderTopWidth: 1, borderBottomWidth: index < data[0].length - 1 ? 1 : 0, borderColor: 'rgba(123, 128, 126, 0.18)', position: 'relative', zIndex: dropdownStates[index] ? 2 : 1 }]}>
          {item.hasDropdown ? (
            <>
              <TouchableOpacity
                onPress={() => toggleDropdown(index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  paddingLeft: 20,
                  marginBottom: 1,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '82%' }}>
                  <Image
                    source={require('../../../../../assets/GreenTickIcon.png')} 
                    style={{ width: 20, height: 20, marginBottom: 10, marginRight: 10, marginTop: 10 }}
                  />
                  <Text style={styles.subTextThree}>{item.label}</Text>
                </View>
                <Image
                  source={dropdownStates[index] ? upArrowImage : downArrowImage}
                  style={{ width: 20, height: 19, marginLeft: 30 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {dropdownStates[index] && renderDropdown(item.dropdownItems)}
            </>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '82%', paddingLeft: 20, marginBottom: 1 }}>
              <Image
                source={require('../../../../../assets/GreenTickIcon.png')} 
                style={{ width: 20, height: 20, marginBottom: 10, marginRight: 10, marginTop: 10 }}
              />
              <Text style={styles.subTextThree}>{item.label}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

export default CriteriaDropdown;

const styles = StyleSheet.create({
  subTextFourContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 5,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  dropdownContainer: {
    width: '100%',
    marginLeft: 20,
    paddingTop: 10,
  },
  dropdownItemContainer: {
    backgroundColor: '#F8F2FF',
    borderColor: '#9448DA',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 5,
    width: '90%',
  },
  dropdownPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  dropdownPointText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#777777',
  },
  subTextThree: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '600',
    color: '#777777',
  },
});
