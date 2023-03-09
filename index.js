/**
 * @format
 */

import { AppRegistry, Linking, Platform } from 'react-native';
import { AppRoot as App } from './src/root';
import { name as appName } from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification, { Importance } from 'react-native-push-notification';

export const handleNotificationDeepLinking = (notification) => {
  Linking.openURL(notification.data.route);

  notification.finish(PushNotificationIOS.FetchResult.NoData);
};

PushNotification.configure({
  popInitialNotification: false,
  onNotification: function (notification) {
    handleNotificationDeepLinking(notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  requestPermissions: Platform.OS === 'ios'
});

PushNotification.channelExists('beacons', (exists) => {
  if (!exists) {
    PushNotification.createChannel({
      channelId: 'beacons',
      channelName: 'Beacon found',
      channelDescription: 'A channel to the found beacons',
      importance: Importance.HIGH
    });
  }
});

AppRegistry.registerComponent(appName, () => App);
