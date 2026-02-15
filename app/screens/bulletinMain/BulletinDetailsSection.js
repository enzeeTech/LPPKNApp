import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import CustomBulletinTile from './BulletinCustomTile';
import { LinearGradient } from 'expo-linear-gradient';

const BulletinDetailsSection = ({ navigation, items, onLoadMore }) => {

    const handlePress = (item) => {
        navigation.navigate('BulletingInfo', {itemId: item.id});
    };

    return (
        <View style={styles.container}>
            {items.map((item, index) => {
                // Check if this item is the last one
                const isLastItem = index === items.length - 1;
                return (
                    <View key={item.id}>
                        <CustomBulletinTile
                        onPress={() => handlePress(item)}
                        image={item.tileImage}
                        title={item.title}
                        date={item.date}
                        />
                        {/* If this is the last item, add the gradient overlay */}
                        {isLastItem && onLoadMore && (
                        <LinearGradient
                            colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
                            style={styles.gradient}
                            locations={[0, 0.5, 1]} // Adjust these numbers to change the gradient effect
                        />
                        )}
                    </View>
                );
            })}
            {onLoadMore &&  (
                <TouchableOpacity style={styles.loadMoreItemContainer} onPress={onLoadMore}>
                <Image source={require('../../assets/downArrow.png')} style={styles.downArrowIcon} />
                <Text style={styles.loadMoreText}>Lagi</Text>
                </TouchableOpacity>
            )}
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: Platform.OS === 'ios' ? 100 : 150,
        backgroundColor: '#FFFFFF',
    },
    loadMoreItemContainer: {
        height: 80, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, 
        zIndex: 5,
        backgroundColor: '#FFFFFF',
    },
    loadMoreText: {
        fontSize: 18,
        color: '#5C2D86',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    downArrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100, 
        zIndex: 1,
    }
});

export default BulletinDetailsSection;