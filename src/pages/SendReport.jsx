import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReportForm from 'components/ReportForm/ReportForm';
import { REACT_APP_SITE_KEY } from 'constants/constants';

export default function SendReport() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_SITE_KEY}>
      <ReportForm />;
    </GoogleReCaptchaProvider>
  );
}
