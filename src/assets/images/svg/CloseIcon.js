import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CloseIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
    <Path
      data-name="Icon material-close"
      d="M21 2.115 18.885 0 10.5 8.385 2.115 0 0 2.115 8.385 10.5 0 18.885 2.115 21l8.385-8.385L18.885 21 21 18.885 12.615 10.5Z"
      fill="#fff"
    />
  </Svg>
);
