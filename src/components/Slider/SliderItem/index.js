import React, { memo } from 'react';
import { Image, View } from 'native-base';
import { useStyles } from './styles';
import { Dimensions, TouchableOpacity } from 'react-native';
import { isFunction } from 'lodash';

export const SliderItem = memo(({ url, onPress }) => {
  const styles = useStyles();
  const { width } = Dimensions.get('window');
  const Container = isFunction(onPress) ? TouchableOpacity : View;

  return (
    <Container
      activeOpacity={0.9}
      style={styles.itemContainer(width)}
      onPress={onPress}>
      <Image
        size="2xl"
        resizeMode="cover"
        style={styles.image}
        source={{ uri: url }}
        alt={'Image'}
      />
    </Container>
  );
});
