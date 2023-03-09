import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    optionalText: {
      color: theme.colors.gray[400]
    },
    boxButton: {
      marginTop: theme.space[6],
      marginBottom: theme.space[8],
      flexDirection: 'row',
      justifyContent: 'center'
    },
    button: {
      width: '60%'
    },
    containerCheck: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.space[4]
    },
    termsText: {
      color: theme.colors.white
    },
    textLabel: {
      color: theme.colors.white
    },
    notice: {
      color: theme.colors.secondary[500],
      textDecorationLine: 'underline'
    },
    checkbox: {
      backgroundColor: '#00000000'
    },
    checked: {
      paddingTop: theme.space[2],
      color: 'red'
    },
    modalItems: {
      alignItems: 'center'
    },
    titleModal: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.secondary[500]
    },
    contentModal: {}
  });
};
