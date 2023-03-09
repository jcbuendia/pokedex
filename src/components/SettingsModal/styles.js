import _ from 'lodash';
import { useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      padding: theme.space[4]
    },
    title: {
      textAlign: 'center',
      marginTop: theme.space[4],
      marginBottom: theme.space[6],
      textTransform: 'none',
      fontWeight: 'bold'
    },
    description: {
      marginBottom: theme.space[4]
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    switchLabel: {
      flex: 1
    },
    cancelButton: {
      marginTop: theme.space[8]
    }
  });
};
