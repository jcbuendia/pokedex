import { useSelector } from 'react-redux';
import { themeSelector } from '../selectors';

export const makeStyles = (generateStyles) => () => {
  const theme = useSelector(themeSelector);

  return generateStyles(theme);
};
