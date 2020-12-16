import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

import AlbumCard from '../../components/AlbumCard';
import JoinFamilyModal from './components/joinFamilyModal';
import styles from './styles';

const AlbumsView = ({ acceptInvitation, albums=[], selectAlbum, invite, inviteModal }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={album => album._id}
        renderItem={({ item }) => (
          <AlbumCard
            album={item}
            selectAlbum={selectAlbum}
          />
        )}
      />
      <JoinFamilyModal
        acceptInvitation={acceptInvitation}
        invite={invite}
        isOpen={inviteModal}
      />
    </View>
  );
};

AlbumsView.propTypes = {
  albums: PropTypes.array.isRequired,
  invite: PropTypes.object.isRequired,
  selectAlbum: PropTypes.func.isRequired,
  inviteModal: PropTypes.bool.isRequired,
};

export default AlbumsView;
