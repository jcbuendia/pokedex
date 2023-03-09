/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { LoggedInDrawerNavigator } from './LoggedInDrawerNavigator';
import { LoggedOutNavigation } from './LoggedOutNavigation';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar, useTheme } from 'native-base';
import { useAuth } from '@hooks/useAuth';
import { objectStatus } from '@containers/Auth/helpers';
import { screens } from './helpers';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00000000'
  }
};

export const Navigation = (props) => {
  const { status, handleRetrieveToken } = useAuth();
  const theme = useTheme();

  useEffect(() => {
    props.actions.handleInitializeAction();
    handleRetrieveToken();
  }, []);

  if (status !== objectStatus.waiting) {
    return (
      <LinearGradient
        colors={[
          theme.colors.primary[700],
          theme.colors.primary[800],
          theme.colors.primary[900],
          theme.colors.black
        ]}
        useAngle
        angle={115}
        style={{ flex: 1 }}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <NavigationContainer
          linking={{
            prefixes: ['proximity://'],
            config: {
              screens: screens[status]
            }
          }}
          theme={Theme}>
          {status === objectStatus.loggedIn ? (
            <LoggedInDrawerNavigator />
          ) : (
            <LoggedOutNavigation />
          )}
        </NavigationContainer>
      </LinearGradient>
    );
  } else {
    return null;
  }
};
