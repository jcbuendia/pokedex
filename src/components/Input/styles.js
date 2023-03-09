import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    containerInput: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: theme.space[2],
      paddingBottom: theme.space[2]
    },
    viewText: {
      paddingBottom: theme.space[4]
    },
    textLabel: {
      color: theme.colors.white
    },
    input: {
      borderColor: theme.colors.white,
      color: theme.colors.gray[200]
    },
    requiredText: {
      paddingTop: theme.space[1],
      color: 'red'
    }
  });
};
