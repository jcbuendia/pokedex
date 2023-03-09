import _ from 'lodash';
import { useTheme } from 'native-base';
import { StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

export default () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: insets.left + theme.space[4],
      paddingRight: insets.right + theme.space[1],
      paddingBottom: theme.space[2],
      paddingTop: insets.top + theme.space[3]
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  });
};
