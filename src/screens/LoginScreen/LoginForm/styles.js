import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    boxButton: {
      marginTop: theme.space[10],
      flexDirection: 'row',
      justifyContent: 'center'
    },
    button: {
      paddingLeft: theme.space[20],
      paddingRight: theme.space[20]
    }
  });
};
