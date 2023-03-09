import { useTheme } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Adornament = (props) => {
  const { variant, ...rest } = props;

  const theme = useTheme();

  let primary = '#F9D773';
  let secondary = '#F2B243';
  let tertiary = '#F2B243';
  const styles = {};

  if (variant === 'bottom') {
    primary = '#F2B243';
    secondary = '#F9D773';
    tertiary = '#F9D773';
    styles.marginLeft = 'auto';
    styles.marginTop = theme.space[8];
  } else {
    styles.marginBottom = theme.space[3];
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={73}
      height={10}
      {...styles}
      {...rest}>
      <Path data-name="Rectangle 772" fill={primary} d="M0 0h21v10H0z" />
      <Path data-name="Rectangle 773" fill={secondary} d="M38 0h11v10H38z" />
      <Path data-name="Rectangle 774" fill={tertiary} d="M62 0h11v10H62z" />
    </Svg>
  );
};
