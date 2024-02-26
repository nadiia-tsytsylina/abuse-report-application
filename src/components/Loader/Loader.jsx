import { Circles } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';
import { theme } from 'theme';

export default function Loader() {
  return (
    <LoaderBox>
      <Circles
        height="80"
        width="80"
        color={theme.palette.secondary.main}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
}
