import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    container: {
      flex: 1,
      padding: theme.space[6],
      backgroundColor: theme.colors.primary[600]
    },
    pagination: {
      color: theme.colors.secondary[300],
      textAlign: 'center',
      marginTop: theme.space[2],
      fontSize: theme.fontSizes.sm
    }
  });
};
