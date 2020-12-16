import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../shared/styles/colors';

const CustomModal = ({ isOpen, closeModal, children }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      supportedOrientations={['portrait', 'landscape']}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  exit: {
    width: '100%',
    alignItems: 'flex-end',
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  tokensIcon: {
    marginVertical: 25,
  },
  noThanksText: {
    fontWeight: '700',
    color: colors.main,
    fontSize: 15,
  },
});

export default CustomModal;
