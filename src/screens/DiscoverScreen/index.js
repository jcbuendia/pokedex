/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator } from 'react-native';
import {
  Heading,
  Text,
  View,
  Box,
  FlatList,
  useTheme,
  IconButton
} from 'native-base';
import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { useApi } from '@hooks/useApi';
import {
  beaconTemplate,
  startBackgroundService,
  stopBackgroundService
} from './helpers';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { useTranslate } from '@hooks/useTranslate';
import { CardProduct } from '@components/CardProduct';
import { FooterDecoration1 } from '@assets/images/svg/FooterDecoration1';
import { ArrowsDown } from '@assets/images/svg/ArrowsDown';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchIcon } from '@assets/images/svg/SearchIcon';
import { Animated } from 'react-native';
import { responseMapper } from '@utils/responseMapper';
import { usePermissions } from '@hooks/usePermissions';
import { useRef } from 'react';

export const DiscoverScreen = withBaseLayout(() => {
  const theme = useTheme();
  const styles = useStyles();
  const permissions = usePermissions();
  const [discoverState, setDiscoverState] = useState(false);
  const [explore, setExplore] = useState([]);

  const mounted = useRef(true);
  const [bluetoothDevices, setBluetoothDevices] = useState([]);
  const [fetchedBeacons, setFetchedBeacons] = useState([]);

  const [loading, setloading] = useState(false);
  const [transition, setTransition] = useState(new Animated.Value(12));
  const { translate } = useTranslate();
  const [exploreBeacons] = useApi({
    endpoint: 'beacon/mobile/explore',
    method: 'get',
    showLoader: false
  });

  useEffect(() => {
    mounted.current = true;

    return () => (mounted.current = false);
  }, []);

  const handleDiscover = async () => {
    if (permissions.location.status !== 'granted') {
      if ((await permissions.location.request()) !== 'granted') {
        return;
      }
    }

    if (permissions.bluetooth.status !== 'granted') {
      if ((await permissions.bluetooth.request()) !== 'granted') {
        return;
      }
    }

    setDiscoverState(!discoverState);

    setTransition(new Animated.Value(12));
  };

  useEffect(() => {
    [permissions.bluetooth.status, permissions.location.status].includes(
      false
    ) && setDiscoverState(false);
  }, [permissions.bluetooth.status, permissions.location.status]);

  useEffect(() => {
    if (discoverState) {
      startBackgroundService({ translate, setBluetoothDevices, mounted });
    } else {
      stopBackgroundService();
    }
  }, [discoverState]);

  useEffect(() => {
    (async () => {
      if (
        bluetoothDevices.some(
          (bluetoothDevice) => !fetchedBeacons.includes(bluetoothDevice.id)
        )
      ) {
        try {
          setloading(true);
          const {
            headerResponse: { status },
            payload
          } = await exploreBeacons({
            queryString: {
              beacons_names: bluetoothDevices.map(({ id }) => id)
            }
          });

          if (status === 200) {
            setExplore(
              responseMapper({ template: beaconTemplate, data: payload })
            );

            setFetchedBeacons(bluetoothDevices.map(({ id }) => id));
          }
        } catch (error) {
          console.log(error);
        } finally {
          setloading(false);
        }
      }
    })();
  }, [bluetoothDevices]);

  useEffect(() => {
    Animated.timing(transition, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: false
    }).start();
  });

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.2}
      contentContainerStyle={styles.flatList}
      data={explore}
      renderItem={({ item }) => <CardProduct item={item} />}
      ListHeaderComponent={() => (
        <View>
          <Box style={styles.header}>
            <TouchableOpacity
              onPress={handleDiscover}
              activeOpacity={0.7}
              style={styles.discoverButton}>
              <IconButton variant="solid" style={styles.buttonSearch}>
                <SearchIcon />
              </IconButton>
              {discoverState === true ? (
                <Text style={styles.discover}>{translate('PAUSE')}</Text>
              ) : (
                <Text style={styles.discover}>
                  {translate('DISCOVER_HOME')}
                </Text>
              )}
            </TouchableOpacity>
            <Box style={styles.boxHeaderDecoration}>
              <FooterDecoration1 />
              {discoverState === true ? (
                <Animated.View
                  style={{
                    marginTop: transition
                  }}>
                  <Text style={styles.searchText}>{translate('SEARCH')}</Text>
                </Animated.View>
              ) : (
                <Box mt={3}>
                  <ArrowsDown />
                </Box>
              )}
            </Box>
          </Box>
          <Box style={styles.boxTitle}>
            <Box>
              <Box style={styles.titleDecoration}>
                <FooterDecoration1 />
              </Box>
            </Box>
            <Box>
              <Heading numberOfLines={1} fontSize="3xl" style={styles.title}>
                {translate('DISCOVER_HOME')}
              </Heading>
            </Box>
            <Box style={[styles.invisible, styles.titleDecoration]}>
              <FooterDecoration1 />
            </Box>
          </Box>
          <Box pt={2} style={styles.boxDescription}>
            <Text fontSize="2xl" style={styles.description}>
              {translate('NEAR_YOU')}
            </Text>
          </Box>
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyComponent}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={theme.colors.secondary[300]}
            />
          ) : (
            <Text
              fontSize="lg"
              color={theme.colors.secondary[300]}
              style={styles.emptyMessage}>
              {translate('COME_BACK_LATER')}
            </Text>
          )}
        </View>
      )}
      ListFooterComponentStyle={styles.footer}
      ListFooterComponent={() => (
        <View>
          {/* {infiniteScroll.thereIsMore && (
            <Box pt={6}>
              <ActivityIndicator
                size="large"
                color={theme.colors.secondary[300]}
              />
            </Box>
          )} */}
        </View>
      )}
    />
  );
});
