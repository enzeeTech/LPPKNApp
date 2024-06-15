import React, { useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import DropdownItemWithPrice from './dropdownListItems/DropdownItemWithPrice';
import DropdownItemBulletWithPrice from './dropdownListItems/DropdownItemBulletWithPrice';
import DropdownItemBulletNoPrice from './dropdownListItems/DropdownItemBulletNoPrice';

const Dropdown = ({ items, headerTitle, imageSource, type }) => {
    const [expanded, setExpanded] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    // Choose the arrow image based on the expanded state
    const arrowImageSource = expanded 
    ? require('../../../../assets/pullUpArrow.png') // Image when dropdown is expanded
    : require('../../../../assets/dropdownArrow.png'); // Image when dropdown is collapsed

    // Determine the type of dropdown
    const isBulletType = type === 'bullet';
    const componentType = type;

    // function to toggle the dropdown
    const toggleDropdown = () => {
        const toValue = expanded ? 0 : 1;
        Animated.timing(animationController, {
        toValue,
        duration: 200,
        useNativeDriver: false
        }).start();
        setExpanded(!expanded);
    };

    // styling the dropdown to adapt to the expanded state
    const buttonStyle = expanded 
        ? [styles.container, styles.expandedContainer] 
        : styles.container;

    // calculating the height of the dropdown
    const ITEM_HEIGHT = 49;
    const BULLET_ITEM_HEIGHT = 87;
    const BULLET_NO_PRICE_ITEM_HEIGHT = 65;

    // Adjust the height calculation if using different item heights
    let height;

    if (componentType === 'bullet') {
        height = items.length * BULLET_ITEM_HEIGHT;
    }
    else if (componentType === 'bulletNoPrice') {
        height = items.length * BULLET_NO_PRICE_ITEM_HEIGHT;
    }
    else {
        height = items.length * ITEM_HEIGHT;
    }
    // const height = isBulletType ? data.length * BULLET_ITEM_HEIGHT : data.length * ITEM_HEIGHT;

    
    // interpolating the height of the dropdown
    const heightInterpolation = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height+15]     
    });

    return (
        <View style={{marginBottom: 10}}>
            <View style={buttonStyle}>
                <TouchableWithoutFeedback onPress={toggleDropdown}>
                    <View style={styles.headerContainer}>
                        <View style={styles.subHeaderContainer}>
                            {imageSource && <Image source={imageSource} style={styles.headerImage}/>}
                            <Text style={styles.headerText}>{headerTitle}</Text>
                        </View>
                        <Image source={arrowImageSource} style={styles.dropdownImage}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Animated.View style={[styles.dropdownContainer, { height: heightInterpolation, opacity: expanded ? 1 : 0, borderTopWidth: 0 }]}>
                {items.map((item, index) => {

                    // console.log(items)
                    // Determine the component to render based on item type
                    if (componentType === 'bullet') {
                        return (
                            <DropdownItemBulletWithPrice 
                                key={index}
                                title={item.title}
                                items={item.items}
                                isFirstItem={index === 0}
                            />
                        );
                    }
                    else if (componentType === 'bulletNoPrice') {
                        return (
                            <DropdownItemBulletNoPrice 
                                key={index}
                                title={item.title}
                                items={item.items}
                                isFirstItem={index === 0}
                            />
                        );
                    }
                    else {
                        return (
                            <DropdownItemWithPrice 
                                key={index}
                                title={item.title}
                                items={item.items}
                                isFirstItem={index === 0}
                            />
                        );
                    }
                })}
            </Animated.View>
        </View>
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 73,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4EDF9',
        borderColor: '#D6BDF4',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: '5%',
        //Add shadow
        shadowColor: '#9648DC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 2,
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    },
    expandedContainer: {
        width: '90%',
        height: 73,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4EDF9',
        borderColor: '#D6BDF4',
        borderWidth: 1,
        marginLeft: '5%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        botderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    subHeaderContainer: {
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginRight: 25,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#5C2D86',
    },
    headerImage: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
        marginRight: 10,
    },
    dropdownImage: {
        resizeMode: 'contain',
        width: 18,
        height: 18,
        // marginLeft: 10,
    },
    dropdownContainer: {
        overflow: 'hidden',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D6BDF4',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 10,
        marginLeft: '5%',
    },
    item: {
        width: '100%',
        borderTopWidth: 0.25,
        // borderBottomWidth: 0.25,
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