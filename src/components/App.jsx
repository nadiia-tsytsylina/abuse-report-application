import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import SendReport from 'pages/SendReport';
import AllReports from 'pages/AllReports';
import Layout from './Layout/Layout';

import { selectToken } from '../redux/selectors';
import { setToken } from '../redux/tokenSlice';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const dispatch = useDispatch();
  const clientToken = useSelector(selectToken);

  const generateToken = () => {
    const token =
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2);
    return token;
  };

  useEffect(() => {
    if (!clientToken) {
      dispatch(setToken(generateToken()));
    }
  }, [clientToken, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SendReport />} />
        <Route path="reports" element={<AllReports />} />
      </Route>
    </Routes>
  );
}

export default App;
