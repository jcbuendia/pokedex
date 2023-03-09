import { GarisIcon } from '@assets/images/svg/GarisIcon';
import { NestleIcon } from '@assets/images/svg/NestleIcon';
import { ProximityIcon } from '@assets/images/svg/ProximityIcon';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Animated, View } from 'react-native';
import { useStyles } from './styles';

export const SplashScreen = ({ navigation }) => {
  const styles = useStyles();
  const [index, setIndex] = useState(0);
  const fade = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    if ([1, 5, 9].includes(index)) {
      fadeIn();
    }

    if ([3, 7, 11].includes(index)) {
      fadeOut();
    }
  }, [index]);

  useEffect(() => {
    if (index < 12) {
      const timeout = setTimeout(() => {
        setIndex((index) => index + 1);
      }, 750);

      return () => clearTimeout(timeout);
    } else {
      navigation.navigate('intro');
    }
  }, [index]);

  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      {index < 5 ? (
        <ProximityIcon />
      ) : index < 9 ? (
        <NestleIcon />
      ) : (
        <GarisIcon />
      )}
    </Animated.View>
  );
};
