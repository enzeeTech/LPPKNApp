import React from 'react';
import { View, StyleSheet, Platform, FlatList, ScrollView, Dimensions } from 'react-native';
import CustomSorotanTile from './SorotanCustomTile';

const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 500;
const ROWS_PER_COLUMN = 4;

const SorotanDetailsSection = ({ navigation, items }) => {

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

    const renderFooter = () => {
        return <View style={styles.footer} />;
    };

    if (isLargeScreen) {
        const columns = [];
        for (let i = 0; i < items.length; i += ROWS_PER_COLUMN) {
            columns.push(items.slice(i, i + ROWS_PER_COLUMN));
        }

        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.columnsRow}>
                {columns.map((columnItems, columnIndex) => (
                    <View key={`col-${columnIndex}`} style={styles.column}>
                        {columnItems.map((item) => (
                            <View key={item.id} style={styles.itemContainerLarge}>
                                <CustomSorotanTile
                                    onPress={() => handlePress(item)}
                                    image={item.tileImage}
                                    title={item.title}
                                    date={item.date}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
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
    columnsRow: {
        paddingHorizontal: 47,
        paddingTop: 10,
        paddingBottom: 120,
        backgroundColor: '#FFF',
    },
    column: {
        width: 400,
        marginRight: -40,
    },
    itemContainerLarge: {
        marginTop: 50,
        marginBottom: 12,
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
