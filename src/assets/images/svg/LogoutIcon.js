/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoutIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Path
      d="M23.992 6H6v36h18M33 33l9-9-9-9M16 23.992h26"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
