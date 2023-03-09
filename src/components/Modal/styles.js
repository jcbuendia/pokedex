import { useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    backdrop: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    container: {
      backgroundColor: theme.colors.background[50],
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: '100%',
      maxHeight: '90%',
      borderRadius: theme.radii['3xl']
    }
  });
};
