import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    boxButton: {
      backgroundColor: theme.colors.primary[600],
      marginLeft: theme.space[4],
      marginRight: theme.space[4],
      borderRadius: 12,
      borderWidth: 3,
      borderColor: '#00000000'
    },
    boxButtonActive: {
      backgroundColor: theme.colors.primary[600],
      marginLeft: theme.space[4],
      marginRight: theme.space[4],
      borderRadius: 12,
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: theme.colors.secondary[300]
    }
  });
};
