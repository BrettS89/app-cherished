import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ExpoImageManipulator } from 'react-native-expo-image-cropper';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const PhotoStudioView = ({ launchCamera, photo, saveImage, setShowImageEditor, showImageEditor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={launchCamera} style={styles.camera}>
        <Icon
          name="camera"
          size={40}
          color='#fff'
          style={{ paddingBottom: 6 }}
        />
      </TouchableOpacity>
      <ExpoImageManipulator
        photo={{ uri: photo }}
        isVisible={showImageEditor}
        onPictureChoosed={(data) => {
          saveImage(data.uri);
        }}
        onToggleModal={() => setShowImageEditor(false)}
        saveOptions={{
          compress: 1,
          format: 'png',
          base64: false,
        }}
      />
    </View>
  );
};

export default PhotoStudioView;
