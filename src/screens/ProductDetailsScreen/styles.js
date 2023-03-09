import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    container: {
      padding: theme.space[6]
    },
    title: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl,
      fontWeight: String(theme.fontWeights.bold),
      textAlign: 'center',
      marginTop: theme.space[3],
      marginBottom: theme.space[6]
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: theme.space[6]
    },
    store: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xs,
      fontWeight: String(theme.fontWeights.normal)
    },
    date: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xs,
      fontWeight: String(theme.fontWeights.normal)
    },
    descriptiveTitle: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.sm,
      fontWeight: String(theme.fontWeights.normal),
      lineHeight: 19,
      marginBottom: theme.space[4]
    },
    description: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.sm,
      fontWeight: String(theme.fontWeights.normal),
      lineHeight: 16
    },
    button: {
      minWidth: '80%',
      alignSelf: 'center',
      marginTop: theme.space[10],
      marginBottom: theme.space[1],
      fontSize: theme.fontSizes.sm,
      backgroundColor: theme.colors.primary[600],
      color: theme.colors.white,
      paddingBottom: theme.space[3],
      paddingTop: theme.space[3],
      borderRadius: 15
    }
  });
};
