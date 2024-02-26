import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReportForm from 'components/ReportForm/ReportForm';
import { REACT_APP_SECRET_KEY } from 'constants/constants';

export default function SendReport() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_SECRET_KEY}>
      <ReportForm />;
    </GoogleReCaptchaProvider>
  );
}
