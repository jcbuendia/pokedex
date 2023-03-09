/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  View,
  Text,
  Linking,
  Platform,
  TouchableOpacity,
  AppState
} from 'react-native';
import compareVersions from 'compare-versions';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import { ModalWrapper } from '@components/ModalWrapper';
import { useApi } from '@hooks/useApi';

export const AppVersion = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isOldVersion, setOldVersion] = useState(false);
  const [minimumVersionAvailable, setminimumVersionAvailable] =
    useState('0.0.0');

  const [getVersion, , loading] = useApi({
    endpoint: '/config',
    method: 'get'
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  useEffect(() => {
    const response = compareVersions.compare(
      DeviceInfo.getReadableVersion(),
      minimumVersionAvailable,
      '<'
    );
    setOldVersion(response);
  }, [minimumVersionAvailable]);

  useEffect(() => {
    if (appStateVisible === 'active') {
      getRemoteVersion();
    }
  }, [appStateVisible]);

  useEffect(() => {
    getRemoteVersion();
  }, []);

  const getRemoteVersion = async () => {
    try {
      const { version } = await getVersion();
      setminimumVersionAvailable(version);
    } catch (err) {
      console.error('catch: ', err);
    }
  };

  const onPress = useCallback(() => {
    if (Platform.OS === 'android') {
      redirectToAppStore();
    } else if (Platform.OS === 'ios') {
      redirectToAppleStore();
    }
  }, []);

  const redirectToAppStore = () => {
    Linking.canOpenURL(`market://details?id=${1}`)
      .then(() => {
        Linking.openURL(`market://details?id=${1}`);
      })
      .catch();
  };

  const redirectToAppleStore = () => {
    Linking.canOpenURL(`itms://itunes.apple.com/us/app/apple-store/${1}`)
      .then(() =>
        Linking.openURL(
          'itms://itunes.apple.com/us/app/apple-store/id1485216306'
        )
      )
      .catch();
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!loading && isOldVersion) {
    return (
      <ModalWrapper visible={true}>
        <View style={styles.card}>
          <Text style={styles.title}>Esta versión esta desactualizada !</Text>
          <TouchableOpacity style={styles.redirectButton} onPress={onPress}>
            <Text style={styles.redirectButtonText}>Ir a la tienda</Text>
          </TouchableOpacity>
        </View>
      </ModalWrapper>
    );
  }
  return null;
};
