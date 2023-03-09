import React from 'react';
import { Image } from 'native-base';
import { images } from '@common';
import { useStyles } from './styles';
import { TouchableOpacity } from 'react-native';

export const Control = ({ variant = 'back', onPress, disabled = false }) => {
  const styles = useStyles();
  const arrowStyles = [styles.arrow];

  if (variant === 'right') {
    arrowStyles.push(styles.arrowRight);
  }

  if (disabled) {
    arrowStyles.push(styles.disabledOpacity);
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={images.IOSArrowBack} style={arrowStyles} alt={variant} />
    </TouchableOpacity>
  );
};
