import { Center, Heading, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { useTranslate } from '@hooks/useTranslate';
import { useStyles } from './styles';
import { FooterDecoration1 } from '@assets/images/svg/FooterDecoration1';
import FooterDecoration2 from '@assets/images/svg/FooterDecoration2';
import { withBaseLayout } from '@layouts/BaseLayout/withBaseLayout';
import { TouchableOpacity } from 'react-native';
import { openUrl } from '@utils/linking';

export const InfoScreen = withBaseLayout(() => {
  const styles = useStyles();
  const { translate } = useTranslate();

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.container}>
      <FooterDecoration1 />
      <View style={{ flexGrow: 1 }}>
        <Center>
          <Heading fontSize="3xl" style={styles.title}>
            {translate('WHAT_IS_PROXIMITY')}
          </Heading>
        </Center>

        <Text style={styles.description}>{translate('INFO_DESCRIPTION')}</Text>

        <Text style={styles.credits}>{translate('CREDITS')}</Text>

        <TouchableOpacity
          onPress={() =>
            openUrl(
              'https://stackoverflow.com/questions/50556937/how-do-i-make-text-bold-italic-or-underline-in-react-native'
            )
          }
          activeOpacity={0.6}>
          <Text style={styles.link} fontSize="xl">
            {translate('SEE_PRIVACY_POLICY')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openUrl(
              'https://stackoverflow.com/questions/43804032/open-url-in-default-web-browser'
            )
          }
          activeOpacity={0.6}>
          <Text style={styles.link} fontSize="xl">
            {translate('SEE_TERMS_AND_CONDITIONS')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.right}>
        <FooterDecoration2 />
      </View>
    </ScrollView>
  );
});
