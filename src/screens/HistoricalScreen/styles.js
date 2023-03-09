import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    flatList: {
      flexGrow: 1
    },
    emptyComponent: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    emptyMessage: {
      textAlign: 'center'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.space[2],
      marginBottom: theme.space[5]
    },
    headerSection: {
      flexGrow: 1
    },
    title: {
      color: theme.colors.lightText,
      fontWeight: `${theme.fontWeights.bold}`,
      textTransform: 'uppercase'
    },
    arrowContainer: {
      alignItems: 'flex-end'
    },
    footer: { flex: 1, justifyContent: 'flex-end' }
  });
};
