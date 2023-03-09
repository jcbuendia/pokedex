import React from 'react';
import { BaseLayout } from './index';

export const withBaseLayout = (ScreenComponent) => (props) =>
  (
    <BaseLayout>
      <ScreenComponent {...props} />
    </BaseLayout>
  );
