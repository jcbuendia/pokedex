import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    scrollViewContentContainer: {
      flexGrow: 1
    },
    container: {
      flex: 1,
      paddingRight: theme.space[12],
      paddingTop: theme.space[8],
      paddingBottom: theme.space[16],
      alignItems: 'flex-end'
    },
    itemsContainer: {
      alignItems: 'flex-end',
      marginVertical: theme.space[8]
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.space[5]
    },
    itemText: {
      color: theme.colors.lightText,
      fontWeight: `${theme.fontWeights.bold}`
    },
    itemTextActive: {
      color: theme.colors.secondary[300]
    },
    iconWrapper: {
      height: 28,
      width: 28,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: theme.space[3]
    },
    logoutImage: {
      width: 28,
      height: 28,
      marginLeft: 2
    }
  });
};
