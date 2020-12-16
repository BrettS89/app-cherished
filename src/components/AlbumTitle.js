import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../shared/styles/colors';

const AlbumTitle = () => {
  const albumTitle = useSelector(state => state.content.selectedAlbum);

  return (
    <View>
      <Text style={styles.text}>
        {albumTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: colors.secondary,
    fontFamily: 'title',
  },
});

export default AlbumTitle;
