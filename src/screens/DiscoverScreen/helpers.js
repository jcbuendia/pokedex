import { instance } from '@providers/api';
import BackgroundService from 'react-native-background-actions';
import { BleManager } from 'react-native-ble-plx';
import PushNotification from 'react-native-push-notification';

export const beaconTemplate = {
  id: '_id',
  description: 'content_description',
  title: 'content_title',
  images: [
    'pictures',
    {
      index: 'index',
      url: 'img'
    }
  ],
  store: 'store',
  date: 'createdAt',
  beaconId: 'beacon_id'
};

const manager = new BleManager();

const startScanningBluetoothDevicesPlx = async (
  setBluetoothDevices,
  mounted
) => {
  let fetchedBeacons = [];

  await new Promise(async () => {
    manager.startDeviceScan(null, null, async (error, device) => {
      if (error) {
        console.log({ error });
      } else {
        if (mounted.current) {
          setBluetoothDevices((bluetoothDevices) =>
            bluetoothDevices.some(({ id }) => id === device.id)
              ? bluetoothDevices.map((bluetoothDevice) => ({
                  ...bluetoothDevice,
                  rssi:
                    bluetoothDevice.id === device.id
                      ? device.rssi
                      : bluetoothDevice.rssi
                }))
              : [...bluetoothDevices, { id: device.id, rssi: device.rssi }]
          );
        } else {
          try {
            if (!fetchedBeacons.includes(device.id)) {
              fetchedBeacons.push(device.id);

              const {
                data: {
                  headerResponse: { status },
                  payload
                }
              } = await instance.post('/notification/mobile/get-info', {
                beacon_name: device.id
              });

              // let status = 200;

              // let payload = {
              //   image:
              //     'https://proximity-assets-prod.s3.amazonaws.com/1e65a304-67cb-4a97-9cb7-eb46715d7dd5-messi3.jpg',
              //   content_title: 'Titulo de la notifiacicon',
              //   content_description: 'Descripción del contenido 1',
              //   beacon_id: '62fee95d5792ccd3f620eb6b'
              // };

              if (status === 200) {
                PushNotification.localNotification({
                  id: `${fetchedBeacons.indexOf(device.id)}`,
                  bigPictureUrl: payload.image,
                  largeIconUrl: payload.image,
                  channelId: 'beacons',
                  group: 'group',
                  priority: 'high',
                  invokeApp: false,
                  title: payload.content_title,
                  message: payload.content_description,
                  picture: payload.image,
                  userInfo: {
                    route: `proximity://discover/productDetails?beaconId=${payload.beacon_id}`
                  }
                });
              }
            }
          } catch {}
        }
      }
    });
  });
};

export const startBackgroundService = ({
  translate,
  setBluetoothDevices,
  mounted
}) => {
  const options = {
    taskName: 'beaconScanner',
    taskTitle: translate('LOOKING_FOR_BEACONS'),
    taskDesc: translate('YOU_WILL_BE_NOTIFIED_WHEN_A_BEACON_IS_DETECTED'),
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap'
    },
    linkingURI: 'proximity://discover'
  };

  if (!BackgroundService.isRunning()) {
    BackgroundService.start(
      startScanningBluetoothDevicesPlx.bind(this, setBluetoothDevices, mounted),
      options
    );
  }
};

export const stopBackgroundService = async () => {
  if (BackgroundService.isRunning()) {
    BackgroundService.stop();
    manager.stopDeviceScan();
  }
};
