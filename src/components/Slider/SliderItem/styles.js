import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';
import { slideSpaceByControlSize } from '../constants';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    itemContainer: (width) => ({
      width: width - (theme.space[6] * 2 + slideSpaceByControlSize),
      alignItems: 'center',
      justifyContent: 'center'
    }),
    image: {
      borderRadius: theme.radii.xl
    }
  });
};
