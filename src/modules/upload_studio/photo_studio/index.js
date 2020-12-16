import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { APP_LOADING } from '../../../redux/actions';
import api from '../../../lib/api';
import View from './view';
import uploadToS3 from '../../../utilities/uploadPhoto';

const PhotoStudio = () => {
  const dispatch = useDispatch();
  const { selectedAlbum, selectedFamily } = useSelector(state => state.admin);
  const [photo, setPhoto] = useState(null);
  const [showImageEditor, setShowImageEditor] = useState(false);

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
      quality: 0.4,
    });
    setPhoto(result.uri);
    setShowImageEditor(true);
  };

  const saveImage = async (uri) => {
    dispatch({ type: APP_LOADING, payload: true });
    try {
      const res = await fetch(uri);
      const blob = await res.blob();
      const fileType = blob.data.type;

      const { data } = await api.service('data/file').create({
        file_type: fileType,
      });
      
      await uploadToS3(data.url, blob, fileType);

      await api.service('content/photo').create({
        account_id: selectedFamily,
        album_id: selectedAlbum,
        url: data.key
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
