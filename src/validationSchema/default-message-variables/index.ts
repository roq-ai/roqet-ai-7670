import * as yup from 'yup';

export const defaultMessageVariablesValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.string().required(),
  message_template_id: yup.string().nullable().required(),
});
