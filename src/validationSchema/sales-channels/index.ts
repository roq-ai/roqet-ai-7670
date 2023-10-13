import * as yup from 'yup';

export const salesChannelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  team_id: yup.string().nullable(),
});
