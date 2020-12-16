import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../../../shared/styles/colors';
import styles from '../styles';
import Txt from '../../../../components/Txt';

const AlbumCard = ({ album: { _id, name }, selectAlbum }) => {
  return (
    <TouchableOpacity
      style={styles.albumCard}
      onPress={() => selectAlbum(_id)}
    >
      <View style={styles.icon}>
        <Icon
          name="book"
          size={30}
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

export default AlbumCard;
