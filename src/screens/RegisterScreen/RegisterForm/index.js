import React from 'react';
import { Text, Box, Button, Checkbox, Modal } from 'native-base';
import { Input } from '@components/Input';
import { useTranslate } from '@hooks/useTranslate';
import { useStyles } from './styles';
import { useForm } from './hooks/useForm';
import { TouchableOpacity, View } from 'react-native';
import { GenderButtons } from '@components/GenderButtons';
import { useState } from 'react';
import { useFormik } from 'formik';
import { mapRegisterForm } from './helpers';
import { useApi } from '@hooks/useApi';
import { useNavigation } from '@react-navigation/native';

export const RegisterForm = () => {
  const { translate } = useTranslate();
  const styles = useStyles();
  const navigation = useNavigation();
  const { initialValues, validationSchema } = useForm();
  const [genderButton, setGenderButton] = useState(null);
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [createLead] = useApi({
    endpoint: 'lead/mobile/create',
    method: 'post'
  });

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const {
        headerResponse: { status }
      } = await createLead({
        body: mapRegisterForm(values, genderButton)
      });

      if (status === 200) {
        openModal('center');
      }
    }
  });

  return (
    <View showsVerticalScrollIndicator={false}>
      <Input
        textLabel={translate('NAME_LABEL')}
        handleChange={formik.handleChange('name')}
        value={formik.values.name}
        placeholder={translate('NAME_PLACEHOLDER')}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        textLabel={translate('LAST_NAME_LABEL')}
        handleChange={formik.handleChange('lastName')}
        value={formik.values.lastName}
        placeholder={translate('LAST_NAME_PLACEHOLDER')}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <Input
        textLabel={translate('MOTHER_LAST_NAME_LABEL')}
        handleChange={formik.handleChange('mothersLastName')}
        value={formik.values.mothersLastName}
        placeholder={translate('MOTHER_LAST_NAME_PLACEHOLDER')}
        error={
          formik.touched.mothersLastName &&
          Boolean(formik.errors.mothersLastName)
        }
        helperText={
          formik.touched.mothersLastName && formik.errors.mothersLastName
        }
      />
      <Input
        textLabel={translate('EMAIL_LABEL')}
        handleChange={formik.handleChange('email')}
        value={formik.values.email}
        placeholder={translate('EMAIL_PLACEHOLDER')}
        keyboardType={'email-address'}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Input
        textLabel={translate('PHONE_LABEL')}
        handleChange={formik.handleChange('phone')}
        value={formik.values.phone}
        placeholder={translate('PHONE_PLACEHOLDER')}
        keyboardType={'numeric'}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <Box py={4}>
        <Text style={styles.optionalText}>{translate('OPTIONAL_DATA')}</Text>
      </Box>

      <Input
        textLabel={translate('AGE_LABEL')}
        handleChange={formik.handleChange('age')}
        value={formik.values.age}
        keyboardType={'numeric'}
        placeholder={translate('AGE_PLACEHOLDER')}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />
      <Box py={4}>
        <Text style={styles.textLabel}>{translate('GENDER')}</Text>
        <GenderButtons
          genderButton={genderButton}
          setGenderButton={setGenderButton}
        />
      </Box>
      <Input
        textLabel={translate('POSTAL_CODE_LABEL')}
        handleChange={formik.handleChange('postalCode')}
        value={formik.values.postalCode}
        placeholder={translate('POSTAL_CODE_PLACEHOLDER')}
        keyboardType={'numeric'}
        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
        helperText={formik.touched.postalCode && formik.errors.postalCode}
      />

      <Box style={styles.containerCheck}>
        <Checkbox
          style={!formik.values.privacy && styles.checkbox}
          value={formik.values.privacy}
          onChange={(value) => formik.setFieldValue('privacy', value)}
          accessibilityLabel="Privacy"
          colorScheme="yellow"
        />
        <Text style={styles.termsText}>
          {'  '}
          {translate('HE_READ')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.notice}>{translate('NOTICE_OF_PRIVACY')} </Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>{translate('ACCEPT_TERMS')}</Text>
      </Box>
      {formik.errors.privacy && formik.touched.privacy ? (
        <Text style={styles.checked}> {translate('CHECKED')}</Text>
      ) : null}
      <Box style={styles.containerCheck}>
        <Checkbox
          style={!formik.values.terms && styles.checkbox}
          value={formik.values.terms}
          onChange={(value) => formik.setFieldValue('terms', value)}
          accessibilityLabel="terms"
          colorScheme="secondary"
        />
        <Text style={styles.termsText}>
          {'  '}
          {translate('HE_READ')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.notice}>{translate('NOTICE_OF_TERMS')} </Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>{translate('ACCEPT_TERMS')}</Text>
      </Box>
      {formik.errors.terms && formik.touched.terms ? (
        <Text style={styles.checked}>{translate('CHECKED')}</Text>
      ) : null}

      <Box style={styles.boxButton}>
        <Button
          borderRadius="lg"
          style={styles.button}
          onPress={formik.handleSubmit}>
          {translate('REGISTER_BUTTON')}
        </Button>
      </Box>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          maxWidth="350"
          {...styles[placement]}
          style={styles.contentModal}>
          <Modal.Header style={styles.modalItems}>
            <Text style={styles.titleModal}>{translate('TITLE_MODAL')}</Text>
          </Modal.Header>
          <Modal.Body style={styles.modalItems}>
            <Box p={3} pb={6}>
              {translate('LOG_MESSAGE')}
            </Box>
            <Button
              onPress={() => {
                setOpen(false);
                navigation.navigate('login');
              }}>
              {translate('ACCEPT')}
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};
