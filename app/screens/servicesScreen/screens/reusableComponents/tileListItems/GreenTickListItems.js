// BulletPointSection.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BulletPointSection = ({ title, bulletPoints }) => {
  return (
    <View>
      {/* Subsection One */}
      <View style={[styles.subTextOneContainer, { alignItems: 'flex-start', marginLeft: 15, marginTop: 20 }]}>
        <Text style={styles.subTextOne}>{title}</Text>
      </View>
      {/* Subsection One Bullet Point Text */}
      <View style={styles.bulletContainer}>
        {bulletPoints.map((item, index) => (
          <View key={index} style={styles.bulletPointContainer}>
            <View style={[styles.textContainer, { paddingVertical: 5 }]}>
              <Image source={require('../../../../../assets/greenTick.png')} style={{ height: 20, width: 20 }} />
              <Text style={styles.bulletPointTextBold}>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTextOneContainer: {
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  subTextOne: {
    fontSize: 20,
    fontWeight: '800',
    color: '#5C2D86',
  },
  bulletContainer: {
    width: '100%',
    marginBottom: 40,
    marginTop: 10,
  },
  bulletPointContainer: {
    width: '100%',
    borderColor: '#DDDDDD',
    borderTopWidth: 1,
    paddingVertical: 5,
  },
  textContainer: {
    width: '85%',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  bulletPointTextBold: {
    marginLeft: 5,
        fontSize: 16,
        color: '#777777',
        fontWeight: 'bold',
  }
});

export default BulletPointSection;
