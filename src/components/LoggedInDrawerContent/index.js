/* eslint-disable react-native/no-inline-styles */
import { CloseIcon } from '@assets/images/svg/CloseIcon';
import { DiscoverIcon } from '@assets/images/svg/DiscoverIcon';
import { DrawerBottomOrnament } from '@assets/images/svg/DrawerBottomOrnament';
import { HistoryIcon } from '@assets/images/svg/HistoryIcon';
import { HomeIcon } from '@assets/images/svg/HomeIcon';
import { InfoIcon } from '@assets/images/svg/InfoIcon';
import { SettingsIcon } from '@assets/images/svg/SettingsIcon';
import { SettingsModal } from '@components/SettingsModal';
import LogoutIcon from '@assets/images/logout.png';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import { useTranslate } from '@hooks/useTranslate';
import { ScrollView, Text, useTheme, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './styles';

const screens = [
  {
    name: 'home',
    labelId: 'HOME',
    Icon: HomeIcon
  },
  {
    name: 'discover',
    labelId: 'DISCOVER',
    Icon: DiscoverIcon
  },
  {
    name: 'historical',
    labelId: 'HISTORICAL',
    Icon: HistoryIcon
  },
  {
    name: 'info',
    labelId: 'INFO',
    Icon: InfoIcon
  }
];

export const LoggedInDrawerContent = ({ navigation, state }) => {
  const { translate } = useTranslate();
  const theme = useTheme();
  const styles = useStyles();
  const modal = useModal();
  const auth = useAuth();

  const handleOpenSettingsDrawer = () => {
    navigation.closeDrawer();

    modal.handleOpen({ content: <SettingsModal /> });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.closeDrawer()}>
          <CloseIcon />
        </TouchableOpacity>

        <View style={{ flex: 1 }} />

        <View style={styles.itemsContainer}>
          <TouchableOpacity
            style={styles.item}
            onPress={handleOpenSettingsDrawer}>
            <Text fontSize="xl" style={[styles.itemText]}>
              {translate('SETTINGS')}
            </Text>
            <View style={styles.iconWrapper}>
              <SettingsIcon />
            </View>
          </TouchableOpacity>

          {screens.map(({ labelId, Icon, name }, index) => {
            const active = index === state.index;

            return (
              <TouchableOpacity
                key={`${name}-screen-drawer-tab`}
                style={styles.item}
                onPress={() => navigation.navigate(name)}>
                <Text
                  fontSize="xl"
                  style={[styles.itemText, active && styles.itemTextActive]}>
                  {translate(labelId)}
                </Text>
                <View style={styles.iconWrapper}>
                  <Icon
                    color={active ? theme.colors.secondary[300] : undefined}
                  />
                </View>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity style={styles.item} onPress={auth.handleLogout}>
            <Text fontSize="xl" style={[styles.itemText]}>
              {translate('LOGOUT')}
            </Text>
            <View style={styles.iconWrapper}>
              <Image style={styles.logoutImage} source={LogoutIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2 }} />

        <DrawerBottomOrnament />
      </SafeAreaView>
    </ScrollView>
  );
};
