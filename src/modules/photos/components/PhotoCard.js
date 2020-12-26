import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const PhotoCard = ({ photo: { thumbnail, url }, setSelectedPhoto }) => {
  return (
    <TouchableOpacity
      style={styles.photoCard}
      onPress={() => setSelectedPhoto(url)}  
    >
      <Image
        source={{ uri: thumbnail }}
        resizeMode="cover"
        style={styles.photo}
      />
    </TouchableOpacity>
  );
};

export default PhotoCard;
