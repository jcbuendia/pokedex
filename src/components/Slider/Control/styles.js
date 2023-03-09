import { StyleSheet } from 'react-native';
import { slideControlSize } from '../constants';

export const useStyles = () => {
  return StyleSheet.create({
    arrow: {
      width: slideControlSize,
      height: slideControlSize,
      resizeMode: 'contain'
    },
    arrowRight: {
      transform: [{ rotateY: '180deg' }]
    },
    disabledOpacity: {
      opacity: 0.5
    }
  });
};
