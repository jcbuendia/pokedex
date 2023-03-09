import React from 'react';
import { Text } from 'react-native';
import { Select, CheckIcon } from 'native-base';
import { useTranslate } from '@hooks/useTranslate';

export const Translate = () => {
  const { locale, LANGUAGE_OPTIONS, handleChangeLanguage, translate } =
    useTranslate();

  return (
    <>
      <Text>{translate('APP_CHANGE_LANGUAGE')}</Text>
      <Select
        selectedValue={locale}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder={translate('APP_CHANGE_LANGUAGE')}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />
        }}
        mt={1}
        onValueChange={(itemValue) => handleChangeLanguage(itemValue)}>
        {LANGUAGE_OPTIONS.map((l, index) => (
          <Select.Item key={index} label={l} value={l} />
        ))}
      </Select>
    </>
  );
};
