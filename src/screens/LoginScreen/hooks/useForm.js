import * as yup from 'yup';
import { useTranslate } from '@hooks/useTranslate';

export const useForm = () => {
  const { translate } = useTranslate();

  const initialValues = {
    email: ''
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string(translate('NAME_LABEL'))
      .required(translate('IS_REQUIRED'))
  });

  return { initialValues, validationSchema };
};
