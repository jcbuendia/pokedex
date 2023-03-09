/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator } from 'react-native';
import {
  Heading,
  IconButton,
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
import { SearchIcon } from '@assets/images/svg/SearchIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { productTemplate } from './helpers';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { useTranslate } from '@hooks/useTranslate';
import { FooterDecoration1 } from '@assets/images/svg/FooterDecoration1';
import FooterDecoration2 from '@assets/images/svg/FooterDecoration2';
import { CardProduct } from '@components/CardProduct';

export const HomeScreen = withBaseLayout(() => {
  const theme = useTheme();
  const styles = useStyles();
  const { translate } = useTranslate();
  const [getProducts] = useApi({
    endpoint: 'content/mobile/list',
    method: 'get',
    showLoader: false
  });
  const [products, handleGetProducts, infiniteScroll] = useInfiniteScroll(
    getProducts,
    { itemTemplate: productTemplate }
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.2}
      onEndReached={infiniteScroll.thereIsMore ? handleGetProducts : undefined}
      contentContainerStyle={styles.flatList}
      data={products}
      renderItem={({ item }) => (
        <CardProduct item={item} endpoint="/content/mobile/get" />
      )}
      ListHeaderComponent={() => (
        <Box style={styles.header}>
          <TouchableOpacity activeOpacity={0.7} style={styles.discoverButton}>
            <IconButton variant="solid" style={styles.buttonSearch}>
              <SearchIcon />
            </IconButton>
            <Text style={styles.discover}>{translate('DISCOVER_HOME')}</Text>
          </TouchableOpacity>
          <Heading fontSize="3xl" style={styles.titleHome}>
            {translate('HOME')}
          </Heading>
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
          <Box pt={6} pb={10}>
            <Box style={styles.boxFooter}>
              <Box style={{ flex: 1 }}>
                <Center>
                  <FooterDecoration1 />
                </Center>
              </Box>
              <Box>
                <Text fontSize="3xl" style={styles.titleFooter}>
                  {translate('DISCOVER_FOOTER')}
                </Text>
              </Box>
              <Box style={{ flex: 1 }} />
            </Box>

            <Text fontSize="2xl" style={styles.titleFooter2}>
              {translate('NEAR_YOU')}
            </Text>
            <Box pt={6} pr={4} style={styles.boxDecoration}>
              <FooterDecoration2 />
            </Box>
          </Box>
        </View>
      )}
    />
  );
});
