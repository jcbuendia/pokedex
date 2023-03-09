import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen } from '@screens/IntroScreen';
import { CustomHeader } from '@components/CustomHeader';
import { RegisterScreen } from '@screens/RegisterScreen';
import { SplashScreen } from '@screens/SplashScreen';
import { LoginScreen } from '@screens/LoginScreen';

const Stack = createStackNavigator();

export const LoggedOutNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="intro"
        component={IntroScreen}
        options={{
          header: CustomHeader
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          header: () => <CustomHeader showBackButton />
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          header: () => <CustomHeader showBackButton />
        }}
      />
    </Stack.Navigator>
  );
};
