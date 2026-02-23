import React from 'react';
import { View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import CustomSorotanTile from './SorotanCustomTile';

const SorotanDetailsSection = ({ navigation, items }) => {
    const { width, height } = useWindowDimensions();
    const smallestSide = Math.min(width, height);
    const longestSide = Math.max(width, height);
    const isLargeScreen = smallestSide >= 500 || longestSide >= 960;

    const largeHorizontalPadding = Math.max(16, Math.min(40, Math.round(width * 0.025)));
    const largeGutter = Math.max(10, Math.min(18, Math.round(width * 0.012)));
    const largeTileWidth = 252;
    const availableWidth = width - (largeHorizontalPadding * 2);
    const calculatedColumns = Math.floor((availableWidth + largeGutter) / (largeTileWidth + largeGutter));
    const numColumns = isLargeScreen ? Math.max(2, Math.min(4, calculatedColumns)) : 2;
    const largeItemWidthPercent = `${100 / numColumns}%`;

    const handlePress = (item) => {
        navigation.navigate('SorotanArticle', {itemId: item.id});
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

    const renderLargeItem = ({ item }) => {
        return (
            <View style={[styles.itemContainerLarge, { width: largeItemWidthPercent, paddingHorizontal: largeGutter / 2 }]}>
                <CustomSorotanTile
                    onPress={() => handlePress(item)}
                    image={item.tileImage}
                    title={item.title}
                    date={item.date}
                    compact={true}
                />
            </View>
        );
    };

    const renderFooter = () => {
        return <View style={styles.footer} />;
    };

    if (isLargeScreen) {
        return (
            <FlatList
                key={`sorotan-grid-${numColumns}`}
                data={items}
                renderItem={renderLargeItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                columnWrapperStyle={styles.rowLarge}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={renderFooter}
                contentContainerStyle={[
                    styles.listContentLarge,
                    {
                        paddingHorizontal: largeHorizontalPadding,
                        paddingTop: Math.max(10, Math.min(24, Math.round(width * 0.015))),
                        paddingBottom: 120,
                    },
                ]}
            />
        );
    }

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
    itemContainerLarge: {
        marginTop: 24,
        marginBottom: 10,
        alignItems: 'center',
    },
    listContentLarge: {
        backgroundColor: '#FFF',
    },
    rowLarge: {
        justifyContent: 'flex-start',
        paddingBottom: 10,
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
