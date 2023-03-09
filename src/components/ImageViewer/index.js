import { View } from 'native-base';
import { TouchableOpacity, Modal, Image, Dimensions } from 'react-native';
import React from 'react';
import { useStyles } from './styles';
import { images } from '@common';
import ImageZoom from 'react-native-image-pan-zoom';

export const ImageViewer = (props) => {
  const {
    visible = false,
    onClose,
    backgroundColor = '#707070',
    src,
    ...rest
  } = props;
  const styles = useStyles();

  return (
    <Modal
      hardwareAccelerated
      statusBarTranslucent
      renderToHardwareTextureAndroid
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...rest}>
      <View style={[styles.centeredView, { backgroundColor }]}>
        <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
          <Image
            source={images.CloseIcon}
            style={styles.closeButtonImg}
            alt={'close'}
          />
        </TouchableOpacity>
        <ImageZoom
          cropWidth={Dimensions.get('screen').width}
          cropHeight={Dimensions.get('screen').height}
          imageHeight={Dimensions.get('screen').width}
          imageWidth={Dimensions.get('screen').width}>
          <Image style={styles.image} source={{ uri: src }} />
        </ImageZoom>
      </View>
    </Modal>
  );
};
