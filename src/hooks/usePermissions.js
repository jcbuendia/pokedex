import React from 'react';
import { Linking, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { request, PERMISSIONS, check } from 'react-native-permissions';
import {
  handleChangeBluetoothStatusAction,
  handleChangeLocationStatusAction,
  permissionsSelector
} from '@containers/Permissions';
import { useModal } from './useModal';
import { InfoModal } from '@components/InfoModal';

export const usePermissions = () => {
  const dispatch = useDispatch();
  const modal = useModal();
  const { bluetooth, location } = useSelector(permissionsSelector);

  const handleOpenSettings = () => {
    modal.handleOpen({
      content: (
        <InfoModal
          color="primary.500"
          buttonText="Ir a opciones"
          title="Necesitamos que nos otorgues los permisos para poder escanear beacons"
          buttonOnPress={() => Linking.openSettings()}
        />
      )
    });
  };

  const permissions = {
    location: {
      status: location,
      check: async () => {
        let status;

        if (Platform.OS === 'ios') {
          status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        dispatch(handleChangeLocationStatusAction(status));

        return status;
      },
      request: async () => {
        let status;

        if (Platform.OS === 'ios') {
          status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        dispatch(handleChangeLocationStatusAction(status));

        if (status !== 'granted') {
          handleOpenSettings();

          return status;
        }

        return status;
      }
    },
    bluetooth: {
      status: bluetooth,
      check: async () => {
        let status;

        if (Platform.OS === 'ios') {
          status = await check(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
        } else {
          status = await check(PERMISSIONS.ANDROID.BLUETOOTH_SCAN);
        }

        dispatch(handleChangeBluetoothStatusAction(status));

        return status;
      },
      request: async () => {
        let status;

        if (Platform.OS === 'ios') {
          status = await request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
        } else {
          status = await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN);
        }

        if (status !== 'granted') {
          handleOpenSettings();

          return status;
        }

        dispatch(handleChangeBluetoothStatusAction(status));

        return status;
      }
    }
  };

  return permissions;
};
