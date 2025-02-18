import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import Buttoncompo from '../Button/Buttoncompo'; // Assuming this is your custom button component
import FONT_SIZES from '../../constants/text';

const CustomModal = ({ isVisible, onClose, message, deleteUserHandle }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.contentText}>{message}</Text>

          <View style={styles.buttons}>
            <Buttoncompo style={styles.closebtn} onPress={onClose}>
              <Text style={styles.btntext}>Close</Text>
            </Buttoncompo>
            <Buttoncompo style={styles.delete} onPress={deleteUserHandle}>
              <Text style={styles.btntext}>Delete</Text>
            </Buttoncompo>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.CARD_BG,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 250, 
  },
  contentText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZES.BUTTON_TEXT,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  closebtn: {
    backgroundColor: COLORS.BUTTON_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 100,
    height: 40,
  },
  delete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 100,
    height: 40,
  },
  btntext: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZES.BUTTON_TEXT,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomModal;
