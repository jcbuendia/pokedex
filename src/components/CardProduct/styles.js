import { StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      marginBottom: theme.space[4],
      marginTop: theme.space[3],
      backgroundColor: theme.colors.primary[600],
      width: '100%',
      maxWidth: 450,
      alignSelf: 'center',
      borderRadius: theme.radii.lg,
      overflow: 'hidden'
    },
    boxDate: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    seeMore: {
      paddingLeft: theme.space[2]
    },
    backgroundCard: {},
    titleCard: {
      color: theme.colors.secondary[300]
    },
    storeInformation: {
      color: theme.colors.lightText
    },
    description: {
      color: theme.colors.lightText
    },
    footer: {
      alignItems: 'flex-start',
      paddingLeft: theme.space[4],
      paddingBottom: theme.space[4]
    }
  });
};
