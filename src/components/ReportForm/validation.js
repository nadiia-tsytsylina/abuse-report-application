import { object, string } from 'yup';
import {
  URL_PATTERN,
  EMAIL_PATTERN,
  REPORT_TYPE,
} from '../../constants/constants';

export const schema = object({
  abusedURL: string()
    .url()
    .required('Abused URL is required')
    .matches(URL_PATTERN, 'Enter valid URL'),
  email: string()
    .email()
    .required('Email is required')
    .matches(EMAIL_PATTERN, 'Enter valid email'),
  reportType: string().required('Report Type is required'),
  spamProof: string().when('reportType', {
    is: REPORT_TYPE.spam,
    then: schema => schema.required('Spam Proof is required'),
    otherwise: schema => schema.notRequired(),
  }),
  targetCountry: string().when('reportType', {
    is: REPORT_TYPE.gambling,
    then: schema => schema.required('Country is required'),
    otherwise: schema => schema.notRequired(),
  }),
  captchaToken: string(),
});
