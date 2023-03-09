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
    titleHome: {
      textAlign: 'center',
      color: theme.colors.lightText,
      paddingTop: theme.space[3],
      fontWeight: `${theme.fontWeights.bold}`
    },
    discoverButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    button: {
      backgroundColor: theme.colors.secondary[300]
    },
    buttonSearch: {
      backgroundColor: theme.colors.secondary[300],
      borderRadius: theme.radii.lg,
      marginRight: theme.space[2],
      display: 'flex',
      paddingRight: theme.space[1],
      paddingBottom: theme.space[1],
      justifyContent: 'center',
      alignItems: 'center'
    },
    discover: {
      color: theme.colors.lightText
    },
    footer: { flex: 1, justifyContent: 'flex-end' },
    titleFooter: {
      textAlign: 'center',
      color: theme.colors.lightText,
      paddingHorizontal: theme.space[4],
      fontWeight: `${theme.fontWeights.bold}`
    },
    titleFooter2: {
      textAlign: 'center',
      color: theme.colors.lightText,
      paddingTop: theme.space[2],
      fontWeight: `${theme.fontWeights.bold}`
    },
    boxFooter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    l: { width: '25%' },
    r: {
      width: '75%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    boxDecoration: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  });
};
