import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailsScreen } from '@screens/ProductDetailsScreen';
import { CustomHeader } from '@components/CustomHeader';
import { DiscoverScreen } from '@screens/DiscoverScreen';

const Stack = createStackNavigator();

export const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="discover"
        component={DiscoverScreen}
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
