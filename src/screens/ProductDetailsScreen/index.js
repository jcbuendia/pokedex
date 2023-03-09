import { Button, ScrollView, Text, View } from 'native-base';
import React, { useCallback, useState, useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useTranslate } from '@hooks/useTranslate';
import { useStyles } from './styles';
import { Slider } from '@components/Slider';
import { format } from 'date-fns';
import _, { isEmpty } from 'lodash';
import { ImageViewer } from '@components/ImageViewer';
import { Adornament } from '@assets/images/svg/Adornament';
import { useApi } from '@hooks/useApi';
import { mapProduct } from './helpers';

export const ProductDetailsScreen = ({
  route: {
    params: { beaconId, endpoint = 'beacon/mobile/get' }
  }
}) => {
  const [productDetail, setProductDetail] = useState({});
  const [getProductDetail] = useApi({
    endpoint,
    method: 'get'
  });
  const [notificationBeacon] = useApi({
    endpoint: 'notification/mobile',
    method: 'put'
  });

  useEffect(() => {
    try {
      (async () => {
        const {
          payload,
          headerResponse: { status }
        } = await getProductDetail({
          urlParams: beaconId
        });

        if (status === 200) {
          if (payload) {
            setProductDetail(
              mapProduct(_.isArray(payload) ? payload[0] : payload)
            );
          }
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const {
    title = '',
    images = [],
    store = '',
    date = '',
    description = '',
    url = ''
  } = productDetail;

  const styles = useStyles();
  const { translate } = useTranslate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleOpenUrl = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(translate('APP_COMMON_UNSUPPORTED_URL'));
    }
  }, [url]);

  const handleVisitWeb = async () => {
    try {
      await notificationBeacon({
        urlParams: `${beaconId}/viewed`
      });
    } catch (error) {
      console.log(error);
    } finally {
      handleOpenUrl();
    }
  };

  const openImageModal = (index) => {
    setIsModalVisible(true);
    setCurrentItem(images[index]);
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.container}>
      <Adornament />
      <Text style={styles.title}>{title}</Text>
      <Slider
        data={images}
        prefix="product-explor-detail"
        onPressItem={openImageModal}
      />
      <View style={styles.row}>
        <Text style={styles.store}>{store}</Text>
        {!isEmpty(date) > 0 && (
          <Text style={styles.date}>
            {format(new Date(date), "MM/dd/yyyy - hh:mm aaaaa'm'")}
          </Text>
        )}
      </View>
      <Text style={styles.descriptiveTitle}>
        {translate('APP_COMMON_DESCRIPTION')}
      </Text>
      <Text style={styles.description}>{description}</Text>
      {!isEmpty(url) > 0 && (
        <Button style={styles.button} onPress={handleVisitWeb}>
          {translate('PRODUCT_DETAIL_BUTTON_LABEL')}
        </Button>
      )}
      <ImageViewer
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        src={currentItem?.url}
      />
      <Adornament variant="bottom" />
    </ScrollView>
  );
};
