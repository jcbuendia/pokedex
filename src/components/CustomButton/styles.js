import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'native-base';

const { width } = Dimensions.get('window');

export default () => {
  const theme = useTheme();

  return StyleSheet.create({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      backgroundColor: theme.colors.primary[700],
      justifyContent: 'center',
      alignItems: 'center',
      width: width - 100,
      height: 50,
      marginTop: 20,
      marginBottom: 20,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    title: {
      color: 'white'
    }
  });
};
