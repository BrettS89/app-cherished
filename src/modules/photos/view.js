import React from 'react';
import { FlatList, View } from 'react-native';

import PhotoCard from './components/PhotoCard';
import PhotoModal from './components/PhotoModal';
import styles from './styles';
import colors from '../../shared/styles/colors';

const PhotosView = ({ photos=[], selectedPhoto, setSelectedPhoto }) => {
  return (
    <View style={[styles.container, { backgroundColor: selectedPhoto ? colors.black : colors.white }]}>
      <FlatList
        data={photos}
        keyExtractor={photo => photo._id}
        numColumns={3}
        renderItem={({ item }) => (
          <PhotoCard
            photo={item}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
      />
      <PhotoModal
        isOpen={selectedPhoto}
        closeModal={() => setSelectedPhoto(null)}
        photoUrl={selectedPhoto}
      />
    </View>
  );
};

export default PhotosView;
