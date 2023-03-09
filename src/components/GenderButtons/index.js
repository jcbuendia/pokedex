import React from 'react';
import { Box } from 'native-base';
import { useStyles } from './styles';
import { Image, TouchableOpacity } from 'react-native';
import ManIcon from '@assets/images/man.png';
import WomanIcon from '@assets/images/woman.png';

export const GenderButtons = ({ genderButton, setGenderButton, onChange }) => {
  const styles = useStyles();

  return (
    <Box style={styles.container}>
      <Box
        style={
          genderButton === 'Femenino'
            ? styles.boxButtonActive
            : styles.boxButton
        }>
        <TouchableOpacity
          onPress={() => {
            setGenderButton('Femenino');
          }}>
          <Image source={WomanIcon} />
        </TouchableOpacity>
      </Box>
      <Box
        style={
          genderButton === 'Masculino'
            ? styles.boxButtonActive
            : styles.boxButton
        }>
        <TouchableOpacity
          onPress={() => {
            setGenderButton('Masculino');
          }}>
          <Image source={ManIcon} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};
