import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigator } from './HomeStackNavigator';
import { LoggedInDrawerContent } from '@components/LoggedInDrawerContent';
import { useStyles } from './styles';
import { HistoricalStackNavigator } from './HistoricalStackNavigator';
import { DiscoverStackNavigator } from './DiscoverStackNavigator';
import { InfoScreen } from '@screens/InfoScreen';
import { CustomHeader } from '@components/CustomHeader';
import { usePermissions } from '@hooks/usePermissions';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { handleNotificationDeepLinking } from 'index';

const Drawer = createDrawerNavigator();

export const LoggedInDrawerNavigator = () => {
  const permissions = usePermissions();
  const styles = useStyles();

  useEffect(() => {
    permissions.location.check();
    permissions.bluetooth.check();

    const suscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        permissions.location.check();
        permissions.bluetooth.check();
      }
    });

    return () => suscription?.remove();
  }, []);

  useEffect(() => {
    PushNotification.popInitialNotification((notification) => {
      if (notification) {
        handleNotificationDeepLinking(notification);
      }
    });
  }, []);

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={styles.drawer}
      drawerContent={(props) => <LoggedInDrawerContent {...props} />}
      drawerType="front"
      initialRouteName="home">
      <Drawer.Screen name="home" component={HomeStackNavigator} />
      <Drawer.Screen name="discover" component={DiscoverStackNavigator} />
      <Drawer.Screen name="historical" component={HistoricalStackNavigator} />
      <Drawer.Screen
        name="info"
        options={{
          header: () => <CustomHeader showMenuButton />,
          headerShown: true
        }}
        component={InfoScreen}
      />
    </Drawer.Navigator>
  );
};
