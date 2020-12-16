import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../shared/styles/colors';
import Txt from './Txt';
import { TOGGLE_CREATE_ALBUM_MODAL } from '../redux/actions';

const CreateAlbumButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch({ type: TOGGLE_CREATE_ALBUM_MODAL })}>
      <Txt styles={styles.nextText}>
        Create Album
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
    fontWeight: '800',
    color: colors.main,
  },
  nextText2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#555555',
  },
});

export default CreateAlbumButton;
