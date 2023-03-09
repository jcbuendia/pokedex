import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { useModal } from '@hooks/useModal';
import { useStyles } from './styles';
import { Text, Button, Switch } from 'native-base';
import { useTranslate } from '@hooks/useTranslate';

export const SettingsModal = () => {
  const { translate } = useTranslate();
  const styles = useStyles();
  const modal = useModal();

  return (
    <View style={styles.container}>
      <Text fontSize="xl" style={styles.title}>
        {translate('SETTINGS')}
      </Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          {translate('SETTINGS_AUTOMATIC_NOTIFICATIONS')}
        </Text>
        <Switch style={styles.switch} size="md" />
      </View>

      <Button
        style={styles.cancelButton}
        variant="ghost"
        colorScheme="dark"
        onPress={() => {
          modal.handleClose();
        }}>
        <Text fontSize="md">{translate('CANCEL')}</Text>
      </Button>
    </View>
  );
};
