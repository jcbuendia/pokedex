import {
  AspectRatio,
  Box,
  Image,
  Stack,
  Text,
  Heading,
  useTheme
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useStyles } from './styles';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { useTranslate } from '@hooks/useTranslate';

export const CardProduct = ({ item, endpoint }) => {
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useNavigation();
  const { translate } = useTranslate();
  const { title, description, images, store, date } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() =>
        navigation.navigate('productDetails', {
          beaconId: item.id,
          endpoint: endpoint
        })
      }>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: images[0].url
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack style={styles.backgroundCard} p="4" space={2}>
        {store && (
          <Box style={styles.boxDate}>
            <Text fontSize="sm" style={styles.storeInformation}>
              {store}
            </Text>
            <Text fontSize="sm" style={styles.storeInformation}>
              {format(new Date(date), 'dd/MM/yyyy')}
              {' - '}
              {format(new Date(date), 'HH:mm')}
            </Text>
          </Box>
        )}
        <Heading style={styles.titleCard}>{title}</Heading>
        <Box>
          <Text style={styles.description}>
            {translate('PRODUCT_DESCRIPTION')}
          </Text>
          <Text numberOfLines={3} style={styles.description}>
            {description}
          </Text>
        </Box>
      </Stack>
      <Box style={styles.footer}>
        <Text color={theme.colors.secondary[300]}>{translate('SEE_MORE')}</Text>
      </Box>
    </TouchableOpacity>
  );
};
