import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HistoryIcon = ({ color = '#fff', ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} {...props}>
    <Path
      data-name="Icon material-list"
      d="M0 9h3V6H0Zm0 6h3v-3H0ZM0 3h3V0H0Zm6 6h21V6H6Zm0 6h21v-3H6ZM6 0v3h21V0Z"
      fill={color}
    />
  </Svg>
);
