/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator } from 'react-native';
import {
  Heading,
  Text,
  View,
  Box,
  FlatList,
  useTheme,
  Center
} from 'native-base';
import React from 'react';
import { useStyles } from './styles';
import { useApi } from '@hooks/useApi';
import { productTemplate } from './helpers';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { useTranslate } from '@hooks/useTranslate';
import { CardProduct } from '@components/CardProduct';
import { FooterDecoration1 } from '@assets/images/svg/FooterDecoration1';
import FooterDecoration2 from '@assets/images/svg/FooterDecoration2';
import { ArrowsDown } from '@assets/images/svg/ArrowsDown';

export const HistoricalScreen = withBaseLayout(() => {
  const theme = useTheme();
  const styles = useStyles();
  const { translate } = useTranslate();

  const [getHistorical] = useApi({
    endpoint: 'historical/mobile/list',
    method: 'get',
    showLoader: false
  });

  const [historical, handleGetHistorical, infiniteScroll] = useInfiniteScroll(
    getHistorical,

    { itemTemplate: productTemplate }
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.2}
      onEndReached={
        infiniteScroll.thereIsMore ? handleGetHistorical : undefined
      }
      contentContainerStyle={styles.flatList}
      data={historical}
      renderItem={({ item }) => (
        <CardProduct item={{ ...item, id: item.beaconId }} />
      )}
      ListHeaderComponent={() => (
        <Box style={styles.header}>
          <Box style={styles.headerSection}>
            <Center>
              <FooterDecoration1 />
            </Center>
          </Box>
          <Box style={styles.headerSection}>
            <Heading fontSize="4xl" style={styles.title}>
              {translate('HISTORICAL')}
            </Heading>
          </Box>
          <Box style={styles.headerSection}>
            <Center>
              <View style={styles.arrowContainer}>
                <FooterDecoration2 />
                <Box mt={4}>
                  <ArrowsDown />
                </Box>
              </View>
            </Center>
          </Box>
        </Box>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyComponent}>
          {infiniteScroll.loadingInitial ? (
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
          {infiniteScroll.thereIsMore && (
            <Box pt={6}>
              <ActivityIndicator
                size="large"
                color={theme.colors.secondary[300]}
              />
            </Box>
          )}
        </View>
      )}
    />
  );
});
