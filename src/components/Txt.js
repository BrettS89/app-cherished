import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../shared/styles/colors';

const Txt = ({ children, styles }) => {
  return (
    <>
      <Text style={[style.text, styles]}>
        {children}
      </Text>
    </>
  )
};

const style = StyleSheet.create({
  text: {
    fontWeight: '500',
    color: colors.text,
  }
});

export default Txt;
