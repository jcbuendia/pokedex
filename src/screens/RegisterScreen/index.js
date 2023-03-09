import React from 'react';
import { View, Box, ScrollView, Heading } from 'native-base';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { useStyles } from './styles';
import { useTranslate } from '@hooks/useTranslate';
import { RegisterForm } from './RegisterForm';
import { BackgroundForm } from '@assets/images/svg/BackgroundForm';

export const RegisterScreen = withBaseLayout(() => {
  const styles = useStyles();
  const { translate } = useTranslate();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Heading style={styles.title}>{translate('KNOW_YOU')}</Heading>
        </Box>
        <Box>
          <RegisterForm />
        </Box>
      </ScrollView>

      <Box style={styles.boxBackground}>
        <BackgroundForm />
      </Box>
    </View>
  );
});
