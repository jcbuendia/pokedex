import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      paddingTop: theme.space[3],
      paddingHorizontal: theme.space[4],
      flex: 1
    }
  });
};
