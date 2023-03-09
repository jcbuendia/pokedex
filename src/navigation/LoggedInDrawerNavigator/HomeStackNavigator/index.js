import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screens/HomeScreen';
import { ProductDetailsScreen } from '@screens/ProductDetailsScreen';
import { CustomHeader } from '@components/CustomHeader';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader showMenuButton />
        }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetailsScreen}
        options={{
          header: () => <CustomHeader showBackButton showMenuButton />
        }}
      />
    </Stack.Navigator>
  );
};
