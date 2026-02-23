import React from 'react';
import { View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import CustomSorotanTile from './SorotanCustomTile';

const SorotanDetailsSection = ({ navigation, items }) => {
    const { width } = useWindowDimensions();
    const isLargeScreen = width >= 840;
    const numColumns = isLargeScreen ? 4 : 2;

    const handlePress = (item) => {
        navigation.navigate('SorotanArticle', {itemId: item.id});
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={[
                    styles.itemContainer,
                    isLargeScreen ? styles.itemContainerLarge : styles.itemContainerMobile,
                ]}
            >
                <CustomSorotanTile
                    onPress={() => handlePress(item)}
                    image={item.tileImage}
                    title={item.title}
                    date={item.date}
                    compact={numColumns === 4}
                />
            </View>
        );
    };

    const renderFooter = () => {
        return <View style={styles.footer} />;
    };

    return (
        <FlatList
            key={`sorotan-grid-${numColumns}`}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.listContent}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    itemContainerLarge: {
        width: '25%',
        paddingHorizontal: 6,
    },
    itemContainerMobile: {
        width: '50%',
        paddingHorizontal: 8,
    },
    listContent: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 120,
        backgroundColor: '#FFF',
        paddingLeft: 40,
        paddingRight: 10,
    },
    
    row: {
        justifyContent: 'flex-start',
        paddingBottom: 15,
    },
    footer: {
        height: 100, 
        backgroundColor: 'transparent',
    },
});

export default SorotanDetailsSection;
