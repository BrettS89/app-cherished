import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../shared/styles/colors';
import Txt from './Txt';

const AlbumCard = ({ album, album: { _id, name }, selectAlbum }) => {
  return (
    <TouchableOpacity
      style={styles.albumCard}
      onPress={() => selectAlbum(album)}
    >
      <View style={styles.icon}>
        <Icon
          name="book"
          size={31}
          color={colors.main}
        />
      </View>
      <View>
        <Txt styles={styles.albumText}>
          {name}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  albumCard: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  icon: {
    marginRight: 15,
  },
  albumText: {
    fontWeight: '600',
    fontSize: 15
  },
});

export default AlbumCard;
