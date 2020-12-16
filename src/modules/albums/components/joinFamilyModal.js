import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Txt from '../../../components/Txt';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';

const JoinFamilyModal = ({ acceptInvitation, isOpen, closeModal, invite: { family_name } }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <View style={styles.modal}>
        <Txt styles={styles.modalTitle}>
          You have been invited to join {family_name}
        </Txt>

        <Button
          text="Join"
          buttonStyle={styles.joinButton}
          onPress={() => acceptInvitation(true)}
        />

        <TouchableOpacity onPress={() => acceptInvitation(false)}>
          <Txt styles={styles.noThanks}>
            No thanks
          </Txt>
        </TouchableOpacity>

      </View>

    </Modal>
  )
};

export default JoinFamilyModal;
