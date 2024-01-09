import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import CustomBulletinTile from './BulletinCustomTile';
import { LinearGradient } from 'expo-linear-gradient';

const BulletinDetailsSection = ({ items, onLoadMore }) => {

    const handlePress = () => {
        console.log('Tile Pressed!');
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
                        image={item.image}
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
            {onLoadMore && (
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
        marginBottom: Platform.OS === 'ios' ? 100 : 150,
    },
    loadMoreContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    loadMoreItemContainer: {
        height: Platform.OS === 'ios' ? 120 : 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-10%',
        zIndex: 1,
        marginTop: '-30%',
        // marginBottom: '10%',
        // backgroundColor: '#FFFFFF',
    },
    loadMoreText: {
        fontSize: 20,
        color: '#5C2D86',
        textAlign: 'center',
        // padding: 20,
        paddingLeft: 20, 
        height: Platform.OS === 'ios' ? 40 : 40,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 105 : 123,
    },
    downArrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 90 : 110,
        marginRight: -10,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -50,
        height: Platform.OS === 'ios' ? 255 : 250,
        zIndex: 1,

    }
});

export default BulletinDetailsSection;