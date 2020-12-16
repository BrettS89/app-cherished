import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import api from '../../../lib/api';
import { SET_ALBUM, TOGGLE_CREATE_ALBUM_MODAL } from '../../../redux/actions';

const SelectAlbum = ({ navigation }) => {
  const dispatch = useDispatch();
  const { createAlbumModalOpen, selectedFamily } = useSelector(state => state.admin);
  const [albums, setAlbums] = useState([]);
  const [albumName, setAlbumName] = useState('');

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const { data } = await api.service('content/album').find({ account_id: selectedFamily });
    setAlbums(data);
  };

  const selectAlbum = (_id) => {
    dispatch({ type: SET_ALBUM, payload: _id });
    navigation.navigate('PhotoStudio');
  };

  const createAlbum = async () => {
    const data = await api.service('content/album').create({ name: albumName, account_id: selectedFamily })

    dispatch({ type: SET_ALBUM, payload: data._id });
    const updatedAlbums = [data, ...albums];
    setAlbums(updatedAlbums);
    closeModal();
    navigation.navigate('PhotoStudio');
  };

  const closeModal = () => {
    dispatch({ type: TOGGLE_CREATE_ALBUM_MODAL });
  };

  return (
    <View
      albums={albums}
      selectAlbum={selectAlbum}
      createAlbumModalOpen={createAlbumModalOpen}
      closeModal={closeModal}
      setAlbumName={setAlbumName}
      createAlbum={createAlbum}
    />
  );
};

export default SelectAlbum;
