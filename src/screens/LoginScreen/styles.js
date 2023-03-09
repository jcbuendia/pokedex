import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1
    },
    boxTitle: {
      alignItems: 'center'
    },
    title: {
      color: theme.colors.white,
      paddingTop: theme.space[20],
      paddingBottom: theme.space[10]
    },
    register: {
      color: theme.colors.white
    },
    notice: {
      color: theme.colors.secondary[500],
      textDecorationLine: 'underline'
    },
    boxRegister: {
      paddingTop: theme.space[20],
      justifyContent: 'center',
      flexDirection: 'row'
    },
    boxBackground: {
      justifyContent: 'center',
      flexDirection: 'row',
      zIndex: -1,
      position: 'absolute',
      left: 0,
      right: 10,
      bottom: 0,
      transform: [{ translateY: 473 / 2.5 }]
    }
  });
};
