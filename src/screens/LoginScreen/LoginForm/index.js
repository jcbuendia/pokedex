import React from 'react';
import { View, Button, Box } from 'native-base';
import { Input } from '@components/Input';
import { useTranslate } from '@hooks/useTranslate';
import { useForm } from '../hooks/useForm';
import { useStyles } from './styles';
import { useFormik } from 'formik';
import { useAuth } from '@hooks/useAuth';

export const LoginForm = () => {
  const { translate } = useTranslate();
  const { initialValues, validationSchema } = useForm();
  const styles = useStyles();
  const { handleLogin } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    }
  });

  return (
    <View>
      <Input
        textLabel={translate('USER_NAME_LABEL')}
        value={formik.values.email}
        handleChange={formik.handleChange('email')}
        placeholder={translate('USER_NAME_PLACEHOLDER')}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <Box style={styles.boxButton}>
        <Button
          onPress={formik.handleSubmit}
          borderRadius="lg"
          style={styles.button}>
          {translate('LOGIN')}
        </Button>
      </Box>
    </View>
  );
};
