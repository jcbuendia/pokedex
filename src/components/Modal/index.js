import React from 'react';
import { Modal as RNModal, TouchableOpacity } from 'react-native';
import { useModal } from '@hooks/useModal';
import { useStyles } from './styles';

export const Modal = () => {
  const { handleClose, visible, content, options } = useModal();
  const styles = useStyles();

  return (
    <RNModal
      statusBarTranslucent
      hardwareAccelerated
      renderToHardwareTextureAndroid
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
      {...options}>
      <TouchableOpacity
        onPress={handleClose}
        activeOpacity={1}
        style={styles.backdrop}>
        <TouchableOpacity activeOpacity={1} style={styles.container}>
          {content}
        </TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  );
};
