/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { View } from 'react-native';
import AppIcon from '@assets/images/svg/AppIcon';
import MenuIcon from '@assets/images/svg/MenuIcon';
import BackIcon from '@assets/images/svg/BackIcon';
import useStyles from './styles';
import { IconButton } from '@components/IconButton';
import { useNavigation } from '@react-navigation/native';

export const CustomHeader = ({
  showBackButton = false,
  showMenuButton = false
}) => {
  const styles = useStyles();
  let navigation;

  try {
    navigation = useNavigation();
  } catch {}

  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <AppIcon />
      </View>

      <View style={styles.divider}>
        {showBackButton && navigation.canGoBack() && (
          <IconButton onPress={() => navigation.goBack()}>
            <BackIcon />
          </IconButton>
        )}
        {showMenuButton && (
          <IconButton onPress={() => navigation.toggleDrawer()}>
            <MenuIcon />
          </IconButton>
        )}
      </View>
    </View>
  );
};
