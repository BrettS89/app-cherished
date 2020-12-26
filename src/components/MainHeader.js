import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../shared/styles/colors';

const Logo = () => {  
  const family = useSelector(state => state.user.family);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {family.name || 'Cherished'}
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
