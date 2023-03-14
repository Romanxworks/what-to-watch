import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const StartSetting = {
  isMain: true,
  title: 'Hoter Add',
  genre: 'horror',
  year: '2015'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...StartSetting}/>
  </React.StrictMode>,
);
