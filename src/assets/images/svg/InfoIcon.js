import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const InfoIcon = ({ color = '#fff', ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23.425}
    height={23.425}
    {...props}>
    <G fill={color}>
      <Path
        data-name="Path 3325"
        d="M11.713 2.365a9.344 9.344 0 1 1-6.611 2.737 9.309 9.309 0 0 1 6.611-2.737m0-2.365a11.713 11.713 0 1 0 11.712 11.713A11.711 11.711 0 0 0 11.713 0Z"
      />
      <Path
        data-name="Path 3326"
        d="M12.895 17.569H10.53V10.53h2.365Zm0-9.347H10.53V5.857h2.365Z"
      />
    </G>
  </Svg>
);
