import React from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import CustomSorotanTile from './SorotanCustomTile';

const SorotanDetailsSection = ({ navigation, items }) => {

    const handlePress = (item) => {
        // navigation.navigate('BulletingInfo', {itemId: item.id});
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <CustomSorotanTile
                    onPress={() => handlePress(item)}
                    image={item.tileImage}
                    title={item.title}
                    date={item.date}
                />
            </View>
        );
    };

    const renderFooter = () => {
        return <View style={styles.footer} />;
    };

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row} 
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 13,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around', 
    },
    footer: {
        height: 100, 
        backgroundColor: 'transparent',
    },
});

export default SorotanDetailsSection;