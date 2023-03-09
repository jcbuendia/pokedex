import _ from 'lodash';
import { useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const useStyles = ({ color }) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      padding: theme.space[4]
    },
    title: {
      textAlign: 'center',
      color: _.get(theme.colors, color),
      marginBottom: 15,
      textTransform: 'none',
      fontWeight: 'bold'
    },
    description: {
      marginBottom: theme.space[4]
    }
  });
};
