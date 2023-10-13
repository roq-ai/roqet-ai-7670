import * as yup from 'yup';

export const salesActivityValidationSchema = yup.object().shape({
  sales_channel_id: yup.string().nullable(),
});
