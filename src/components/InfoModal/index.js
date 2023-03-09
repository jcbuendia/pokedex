import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { useModal } from '@hooks/useModal';
import { useStyles } from './styles';
import { Text, Button, useTheme } from 'native-base';

export const InfoModal = ({
  title,
  description,
  buttonText,
  buttonOnPress = () => null,
  color = 'primary.600'
}) => {
  const styles = useStyles({ color });
  const modal = useModal();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text fontSize="xl" style={styles.title}>
        {title}
      </Text>
      {!!description && <Text style={styles.description}>{description}</Text>}
      <Button
        color={_.get(theme.colors, color)}
        onPress={() => {
          modal.handleClose();
          buttonOnPress();
        }}>
        {buttonText}
      </Button>
    </View>
  );
};
