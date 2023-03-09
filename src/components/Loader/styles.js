import { StyleSheet } from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    backdrop: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  });
};
