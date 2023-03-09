import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ color = '#fff', ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32.861}
    height={25.847}
    {...props}>
    <Path
      data-name="Icon material-home"
      d="M13.666 24.845v-8.293h5.53v8.293h6.91V13.787h4.147L16.431 1.345 2.606 13.787h4.147v11.058Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
