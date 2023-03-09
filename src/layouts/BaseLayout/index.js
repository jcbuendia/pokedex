import { View } from 'native-base';
import React from 'react';
import { Loader } from '@components/Loader';
import { Modal } from '@components/Modal';
import { useStyles } from './styles';

export const BaseLayout = ({ children }) => {
  const styles = useStyles();

  return (
    <>
      <Loader />
      <Modal />
      <View style={styles.container}>{children}</View>
    </>
  );
};
