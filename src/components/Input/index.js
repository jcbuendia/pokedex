import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { useStyles } from './styles';
import { Input as InputBase } from 'native-base';

export const Input = ({
  value,
  handleChange,
  placeholder,
  textLabel,
  keyboardType,
  error,
  helperText,
  inputProps,
  ...morProps
}) => {
  const styles = useStyles();

  return (
    <View style={styles.containerInput}>
      <View style={styles.viewText}>
        <Text style={styles.textLabel}>{textLabel}</Text>
      </View>

      <InputBase
        style={styles.input}
        borderRadius="lg"
        value={value}
        onChangeText={(e) => handleChange(e)}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.requiredText}>{helperText}</Text>}
    </View>
  );
};
