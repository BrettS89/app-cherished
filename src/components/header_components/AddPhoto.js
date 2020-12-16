import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import colors from '../../shared/styles/colors';
import Txt from '../Txt';

const AddPhoto = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SelectFamily')}>
      <Txt styles={styles.nextText}>
        Add Photos
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  nextText2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#555555',
  },
});

export default withNavigation(AddPhoto);
