import { useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageContainer: {
      backgroundColor: theme.colors.primary[600],
      borderRadius: theme.radii['3xl'],
      marginBottom: theme.space[12]
    },
    text: {
      color: theme.colors.lightText,
      fontWeight: 'bold',
      textAlign: 'center',
      maxWidth: 280,
      marginBottom: theme.space[12]
    },
    button: {
      backgroundColor: theme.colors.white,
      height: 80,
      width: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.space[12]
    }
  });
};
