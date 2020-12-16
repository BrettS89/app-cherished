import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from '../../../../components/Modal';
import Txt from '../../../../components/Txt';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import styles from '../styles';

const AddAlbumModal = ({ isOpen, closeModal, setAlbumName, createAlbum }) => {
  return (
    <Modal isOpen={isOpen}>
      <View>
        <Txt styles={styles.modalTitle}>
          Create photo album
        </Txt>

        <View style={styles.modalInput}>
          <Input
            labelText="album"
            placeholder="Album name"
            onChangeText={e => setAlbumName(e)}
          />
        </View>

        <Button
          text="Create"
          onPress={createAlbum}
        />

        <TouchableOpacity style={styles.modalNevermind} onPress={closeModal}>
          <Text style={styles.nevermindText}>
            Nevermind
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddAlbumModal;
