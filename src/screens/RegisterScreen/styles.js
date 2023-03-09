import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: { flex: 1 },
    title: {
      textAlign: 'center',
      color: theme.colors.lightText,
      fontWeight: `${theme.fontWeights.bold}`
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
