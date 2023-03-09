import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return {
    drawer: {
      backgroundColor: theme.colors.background[900],
      width: '100%'
    }
  };
};
