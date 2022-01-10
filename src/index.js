import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SWRConfig } from 'swr'
import { axiosInstance } from './utils/axios-instance';


ReactDOM.render(
  <SWRConfig value={{ fetcher: (url) => axiosInstance(url).then((r) => r.data) }}>
    <App />
  </SWRConfig>,
  document.getElementById('root')
);

