import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import CustomBulletinTile from './BulletinCustomTile';

const BulletinDetailsSection = ({ items, onLoadMore }) => {

    const handlePress = () => {
        console.log('Tile Pressed!');
    };

    return (
        <View style={styles.container}>
      {items.map((item, index) => (
        <CustomBulletinTile
          key={item.id}
          onPress={() => handlePress(item)}
          image={item.image}
          title={item.title}
          date={item.date}
        />
      ))}
      {onLoadMore && (
        <View style={styles.loadMoreContainer}>
            <TouchableOpacity style={styles.loadMoreItemContainer} onPress={onLoadMore}>
                <Image source={require('../../assets/downArrow.png')} style={styles.downArrowIcon}/>
                <Text style={styles.loadMoreText} >Lagi</Text>
            </TouchableOpacity>
        </View>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    loadMoreText: {
        fontSize: 20,
        color: '#5C2D86',
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
    },
    downArrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});

export default BulletinDetailsSection;