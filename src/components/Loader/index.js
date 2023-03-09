import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import { useLoader } from '@hooks/useLoader';
import { useStyles } from './styles';
import { useTheme } from 'native-base';

export const Loader = () => {
  const theme = useTheme();
  const { visible } = useLoader();
  const styles = useStyles();

  return (
    <Modal
      statusBarTranslucent
      hardwareAccelerated
      renderToHardwareTextureAndroid
      animationType="fade"
      transparent
      visible={visible}>
      <View style={styles.backdrop}>
        <ActivityIndicator size="large" color={theme.colors.secondary[300]} />
      </View>
    </Modal>
  );
};
