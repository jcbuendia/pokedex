import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailsScreen } from '@screens/ProductDetailsScreen';
import { CustomHeader } from '@components/CustomHeader';
import { HistoricalScreen } from '@screens/HistoricalScreen';

const Stack = createStackNavigator();

export const HistoricalStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HistoricalScreen}
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
