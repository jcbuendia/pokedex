import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { useStyles } from './styles';

export const IconButton = ({ children, onPress, style, ...props }) => {
  const styles = useStyles();

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#00000030', false, 30)}>
      <View style={[styles.iconButton, style]} {...props}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};
