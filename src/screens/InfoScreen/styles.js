import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: theme.space[10],
      paddingBottom: theme.space[12]
    },
    right: {
      alignItems: 'flex-end'
    },
    title: {
      color: 'white',
      marginTop: theme.space[6],
      textTransform: 'uppercase'
    },
    description: {
      color: theme.colors.lightText,
      marginTop: theme.space[6]
    },
    credits: {
      color: theme.colors.grayText,
      marginTop: theme.space[4]
    },
    link: {
      color: theme.colors.secondary[500],
      textDecorationLine: 'underline',
      marginTop: theme.space[4]
    }
  });
};
