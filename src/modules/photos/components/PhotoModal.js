import React, { useEffect } from 'react';
import { Modal, View, Image, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import useDeviceOrientation from '@rnhooks/device-orientation';
import Back from 'react-native-vector-icons/Feather';
import Spinner from '../../../components/Spinner';

import colors from '../../../shared/styles/colors';

const CustomModal = ({ isOpen, closeModal, photoUrl }) => {
  const deviceOrientation = useDeviceOrientation();
  const dispatch = useDispatch();

  const photoStyles = () => {
    if (deviceOrientation === 'portrait') {
      return {
        flex: 1,
        width: Dimensions.get('window').width,
        zIndex: 50,
      }
    }

    return {
      flex: 1,
      height: Dimensions.get('window').height,
      width: 2000,
      zIndex: 50,
    }
  }

  return (
    <Modal
      visible={!!isOpen}
      transparent
      animationType="fade"
      supportedOrientations={['portrait', 'landscape']}
    >
      <View style={styles.modalContainer}>
        <SafeAreaView style={styles.content}>
          <TouchableOpacity onPress={closeModal} style={styles.backButton}>
            <Back 
              name="chevron-left"
              size={44}
              color={colors.white}
            />
          </TouchableOpacity>
          <View style={styles.loader}><Spinner /></View>
            <Image
              source={{ uri: photoUrl }}
              style={photoStyles()}
              resizeMode='contain'
            />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.black, 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 15    // alignItems: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    // padding: 10,
    justifyContent: 'flex-end',
    zIndex: 51,
    // paddingHorizontal: 20,
  },
  loader: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CustomModal;
