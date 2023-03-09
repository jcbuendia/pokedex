import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    flatList: {
      flexGrow: 1
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.space[2],
      marginBottom: theme.space[5]
    },
    boxTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    boxDescription: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: theme.space[4]
    },
    boxHeaderDecoration: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    boxTransition: {
      // transi
      // paddingTop: theme.space[4],
      // '&:active': {
      //   paddingTop: theme.space[2]
      // }
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
    title: {
      textAlign: 'center',
      color: theme.colors.lightText,
      fontWeight: `${theme.fontWeights.bold}`,
      textTransform: 'uppercase'
    },
    titleDecoration: {
      paddingRight: theme.space[4]
    },
    invisible: {
      opacity: 0
    },
    description: {
      textAlign: 'center',
      color: theme.colors.lightText,
      fontWeight: `${theme.fontWeights.bold}`,
      textTransform: 'uppercase'
    },
    titleHome: {
      textAlign: 'center',
      color: theme.colors.lightText,
      paddingTop: theme.space[3],
      fontWeight: `${theme.fontWeights.bold}`
    },
    emptyComponent: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    discoverButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    emptyMessage: {
      textAlign: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    footer: { flex: 1, justifyContent: 'flex-end' },
    searchText: {
      color: theme.colors.secondary[200]
    }
  });
};
