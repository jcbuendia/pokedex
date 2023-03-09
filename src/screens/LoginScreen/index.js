import React from 'react';
import { View, Text, Heading, Box, ScrollView } from 'native-base';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { useStyles } from './styles';
import { useTranslate } from '@hooks/useTranslate';
import { LoginForm } from './LoginForm';
import { TouchableOpacity } from 'react-native';
import { BackgroundForm } from '@assets/images/svg/BackgroundForm';

export const LoginScreen = withBaseLayout(({ navigation }) => {
  const styles = useStyles();
  const { translate } = useTranslate();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Box style={styles.boxTitle}>
            <Heading style={styles.title}>{translate('LOGIN_TITLE')}</Heading>
          </Box>
          <LoginForm />
          <Box style={styles.boxRegister}>
            <Text style={styles.register}>{translate('NO_ACCOUNT')}</Text>{' '}
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={styles.notice}>{translate('REGISTER_HERE')} </Text>
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
      <Box style={styles.boxBackground}>
        <BackgroundForm />
      </Box>
    </View>
  );
});
