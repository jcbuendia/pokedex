import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import useStyles from './styles';

export const CustomButton = (props) => {
  const { onPress, title, buttonColor } = props;

  const styles = useStyles();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          styles.button,
          buttonColor && { backgroundColor: buttonColor }
        ]}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  buttonColor: PropTypes.string
};

CustomButton.defaultProps = {};
