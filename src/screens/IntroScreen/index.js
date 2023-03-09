import React, { useEffect } from 'react';
import { View, StatusBar, BackHandler } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useTranslate } from '@hooks/useTranslate';
import { useStyles } from './styles';
import { useRef } from 'react';
import { NotificationImage } from '@assets/images/svg/NotificationImage';
import { PromosImage } from '@assets/images/svg/PromosImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowRight } from '@assets/images/svg/ArrowRight';
import { Text } from 'native-base';
import { useIsFocused } from '@react-navigation/native';

const exampleData = [
  {
    key: 'page1',
    textId: 'INTRO_SLIDER_1',
    Image: NotificationImage
  },
  {
    key: 'page2',
    textId: 'INTRO_SLIDER_2',
    Image: PromosImage
  }
];

export const IntroScreen = ({ navigation }) => {
  const styles = useStyles();
  const { translate } = useTranslate();
  const focused = useIsFocused();

  useEffect(() => {
    if (focused) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          BackHandler.exitApp();

          return true;
        }
      );

      return () => backHandler.remove();
    }
  }, [focused]);

  const sliderRef = useRef();

  const renderItem = ({ item: { Image, textId }, index }) => {
    return (
      <View style={[styles.slide]}>
        <View style={styles.imageContainer}>
          <Image />
        </View>

        <Text fontSize="3xl" style={styles.text}>
          {translate(textId)}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => {
            index === 0
              ? sliderRef.current.goToSlide(1)
              : navigation.navigate('login');
          }}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = (item) => item.key;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        ref={sliderRef}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={exampleData}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        showSkipButton={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
