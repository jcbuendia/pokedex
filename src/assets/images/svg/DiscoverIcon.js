import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DiscoverIcon = ({ color = '#fff', ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23.497}
    height={23.503}
    {...props}>
    <Path
      data-name="Icon ionic-ios-search"
      d="m23.222 21.807-6.535-6.6a9.313 9.313 0 1 0-1.413 1.432l6.492 6.553a1.006 1.006 0 0 0 1.42.037 1.012 1.012 0 0 0 .036-1.422Zm-13.854-5.09a7.354 7.354 0 1 1 5.2-2.154 7.308 7.308 0 0 1-5.2 2.154Z"
      fill={color}
    />
  </Svg>
);
