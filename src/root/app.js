import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from '@containers/App';
import { store } from './configureStore';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@config/themes/default';

export const AppRoot = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppContainer />
      </NativeBaseProvider>
    </Provider>
  );
};
