import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import {
  REPORT_TYPE_OPTIONS,
  DEFAULT_FORM_VALUES,
  REPORT_TYPE,
} from 'constants/constants';
import { countries } from 'data/countries';
import SnackBar from 'components/SnackBar/SnackBar';

import { schema } from './validation';
import { ErrorMessage, StyledPaper } from './ReportForm.styled';
import { selectToken } from '../../redux/selectors';
import { useAddReportMutation } from '../../redux/reportsApi';

export default function ReportForm() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isRecaptchaShown, setIsRecaptchaShown] = useState(false);

  const clientToken = useSelector(selectToken);
  const reCaptchaAction = 'abuse';
  const { executeRecaptcha } = useGoogleReCaptcha();
  const captchaRef = useRef(null);
  const reCaptchaSiteKey = process.env.REACT_APP_SITE_KEY;
  const [sendReport] = useAddReportMutation();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    const captchaToken = await executeRecaptcha(reCaptchaAction);
    let formData;
    if (isRecaptchaShown) {
      const captcha2Token = captchaRef.current.getValue();
      captchaRef.current.reset();
      formData = { ...data, captchaToken, clientToken, captcha2Token };
      setIsRecaptchaShown(false);
    } else {
      formData = { ...data, captchaToken, clientToken };
    }

    try {
      await sendReport(formData)
        .unwrap()
        .then(() => {
          setIsSuccessOpen(true);
          reset();
        })
        .catch(error => {
          if (error.status === 403) {
            setIsRecaptchaShown(true);
          } else {
            setIsErrorOpen(true);
          }
        });
    } catch (error) {
      setIsErrorOpen(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledPaper>
          <TextField
            label="Abused URL"
            variant="outlined"
            {...register('abusedURL')}
            fullWidth
            required
            error={!!errors.abusedURL}
          />
          {errors.abusedURL && (
            <ErrorMessage variant="caption">
              {errors.abusedURL.message}
            </ErrorMessage>
          )}
          <TextField
            label="Email"
            variant="outlined"
            {...register('email')}
            fullWidth
            required
            error={!!errors.email}
          />
          {errors.email && (
            <ErrorMessage variant="caption">
              {errors.email.message}
            </ErrorMessage>
          )}
          <FormControl fullWidth variant="outlined">
            <FormLabel htmlFor="reportType">Report type</FormLabel>
            <Controller
              name="reportType"
              id="reportType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup name="reportType" value={value} onChange={onChange}>
                  {REPORT_TYPE_OPTIONS.map(option => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </FormControl>
          {errors?.reportType && (
            <ErrorMessage>{errors.qualifications?.reportType}</ErrorMessage>
          )}
          {watch('reportType') === REPORT_TYPE.spam && (
            <>
              <TextField
                label="Spam Proof"
                variant="outlined"
                {...register('spamProof')}
                fullWidth
                error={!!errors.spamProof}
              />
              {errors.spamProof && (
                <ErrorMessage variant="caption">
                  {errors.spamProof.message}
                </ErrorMessage>
              )}
            </>
          )}
          {watch('reportType') === REPORT_TYPE.gambling && (
            <>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="targetCountry">
                  Choose a country
                </InputLabel>
                <Controller
                  name="targetCountry"
                  id="targetCountry"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      fullWidth
                      value={value}
                      onChange={onChange}
                      label="Choose a country"
                      variant="outlined"
                      id="targetCountry"
                    >
                      {countries.map(item => (
                        <MenuItem value={item.code} key={item.code}>
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                            alt=""
                          />
                          {item.label} ({item.code})
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors?.reportType && (
                <ErrorMessage>{errors.qualifications?.reportType}</ErrorMessage>
              )}
            </>
          )}
          <input
            type="hidden"
            {...register('captchaToken', { required: true })}
          />
          {isRecaptchaShown && (
            <ReCAPTCHA sitekey={reCaptchaSiteKey} ref={captchaRef} />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid}
          >
            Send Report
          </Button>
        </StyledPaper>
      </form>

      <SnackBar
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        severity="success"
        text="Your report has been sent successfully"
      />
      <SnackBar
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        severity="error"
        text="Something went wrong"
      />
    </>
  );
}
