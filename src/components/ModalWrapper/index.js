import React, { useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import styles from './styles';

export const ModalWrapper = (props) => {
  const { children, visible, closeVisible } = props;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setVisible(true);
    }
  }, [visible]);

  const handleCloseModal = () => setVisible(false);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {closeVisible && (
            <Text onPress={handleCloseModal} style={styles.closeButton}>
              x
            </Text>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};
