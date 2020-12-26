import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { APP_LOADING } from '../../../redux/actions';
import api from '../../../lib/api';
import View from './view';
import uploadPhoto from '../../../utilities/uploadPhoto';

const PhotoStudio = () => {
  const dispatch = useDispatch();
  const { selectedAlbum, selectedFamily } = useSelector(state => state.admin);
  const [photo, setPhoto] = useState(null);
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    getPermissionAsync();
  });

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status: cameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status: camera } = await Permissions.askAsync(Permissions.CAMERA);
      if (camera !== 'granted' || cameraRoll !== 'granted') {
        alert('Sorry, we need camera and camera roll permissions to make this work!');
        return;
      }
    }
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    try {
      var manipResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [
          { resize: { width: 200 } },
        ],
      );
    } catch(e) {
      console.log(e)
    }
    
    setThumbnail(manipResult.uri);
    setPhoto(result.uri);
    setShowImageEditor(true);
  };

  const saveImage = async (uri) => {
    dispatch({ type: APP_LOADING, payload: true });
    try {      
      const [thumb, mainPhoto] = await Promise.all([
        uploadPhoto(thumbnail),
        uploadPhoto(uri),
      ]);

      await api.service('content/photo').create({
        account_id: selectedFamily,
        album_id: selectedAlbum,
        url: mainPhoto,
        thumbnail: thumb,
      });

      dispatch({ type: APP_LOADING, payload: false });
    } catch(e) {
      dispatch({ type: APP_LOADING, payload: false });
      console.log('ERROR', e);
    }
  };

  return (
      <View
        launchCamera={launchCamera}
        photo={photo}
        saveImage={saveImage}
        setShowImageEditor={setShowImageEditor}
        showImageEditor={showImageEditor}
      />
  );
};

export default PhotoStudio;
