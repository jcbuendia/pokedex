import { Linking } from 'react-native';

export const openUrl = (url) => {
  const supported = Linking.canOpenURL(url);

  if (supported) {
    Linking.openURL(url);

    return true;
  } else {
    return false;
  }
};
