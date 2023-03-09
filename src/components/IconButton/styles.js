import { useTheme } from 'native-base';

export const useStyles = () => {
  const theme = useTheme();

  return {
    iconButton: {
      padding: theme.space[3],
      borderRadius: theme.radii.full
    }
  };
};
