import * as yup from 'yup';
import { useTranslate } from '@hooks/useTranslate';

export const useForm = () => {
  const { translate } = useTranslate();
  const initialValues = {
    name: '',
    lastName: '',
    mothersLastName: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    postalCode: '',
    privacy: null,
    terms: null
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string(translate('NAME_LABEL'))
      .required(translate('IS_REQUIRED')),
    lastName: yup
      .string(translate('LAST_NAME_LABEL'))
      .required(translate('IS_REQUIRED')),
    mothersLastName: yup
      .string(translate('MOTHER_LAST_NAME_LABEL'))
      .required(translate('IS_REQUIRED')),
    phone: yup
      .string(translate('PHONE_LABEL'))
      .required(translate('IS_REQUIRED')),
    email: yup
      .string(translate('EMAIL_LABEL'))
      .email(translate('INVALID_EMAIL'))
      .required(translate('IS_REQUIRED')),
    age: yup
      .number()
      .typeError(translate('INVALID_AGE'))
      .positive(translate('INVALID_AGE')),
    postalCode: yup
      .number()
      .typeError(translate('INVALID_POSTAL'))
      .positive(translate('INVALID_POSTAL')),
    privacy: yup.bool().oneOf([true], translate('CHECKED')),
    terms: yup.bool().oneOf([true], translate('CHECKED'))
  });

  return { initialValues, validationSchema };
};
