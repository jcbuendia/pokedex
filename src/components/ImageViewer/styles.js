import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeButtonContainer: {
      position: 'absolute',
      right: theme.space[9],
      top: insets.top + theme.space[9],
      zIndex: 100000
    },
    closeButtonImg: {
      width: 21,
      height: 21
    },
    zoomContainer: {
      flexShrink: 1,
      height: '100%',
      width: '100%'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius: theme.radii.lg
    }
  });
};
