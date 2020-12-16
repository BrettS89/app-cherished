import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

import AddAlbumModal from './components/AddAlbumModal';
import AlbumCard from './components/AlbumCard';
import styles from './styles';

const SelectAlbumView = ({ albums, closeModal, createAlbum, createAlbumModalOpen, selectAlbum, setAlbumName }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={album => album._id}
        renderItem={({ item }) => {
          return (
            <AlbumCard
              album={item}
              selectAlbum={selectAlbum}
            />
          );
        }}
      />
      <AddAlbumModal
        isOpen={createAlbumModalOpen}
        closeModal={closeModal}
        setAlbumName={setAlbumName}
        createAlbum={createAlbum}
      />
    </View>
  );
};

export default SelectAlbumView;
