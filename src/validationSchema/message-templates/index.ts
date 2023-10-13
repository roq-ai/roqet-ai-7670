import * as yup from 'yup';

export const messageTemplateValidationSchema = yup.object().shape({
  body: yup.string().required(),
  subject: yup.string().required(),
  team_id: yup.string().nullable().required(),
});
