import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '@components/CustomButton';
import crashlytics from '@react-native-firebase/crashlytics';
import { Translate } from '@components/Translate';

export const SignUpScreen = ({ currentValue, actions }) => {
  useEffect(() => {
    crashlytics().log('on counter');
  }, []);

  return (
    <View style={{ marginTop: 100 }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{currentValue}</Text>
        <CustomButton
          title="+"
          onPress={() => actions.handleAddValueAction()}
        />
        <CustomButton
          title="-"
          onPress={() => actions.handleSubstractValueAction()}
        />
        <Translate />
      </View>
    </View>
  );
};
