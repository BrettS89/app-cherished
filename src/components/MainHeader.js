import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../shared/styles/colors';

const Logo = () => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The Sodie Family
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    // width: 65,
    marginLeft: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.secondary,
    fontWeight: '700',
    fontFamily: 'title',
  }
});
