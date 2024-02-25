import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReportForm from 'components/ReportForm/ReportForm';

export default function SendReport() {
  const reCaptchaKey = process.env.REACT_APP_SECRET_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <ReportForm />;
    </GoogleReCaptchaProvider>
  );
}
