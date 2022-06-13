import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';



ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="e950413e-1fa7-4dbc-8f31-7ff070ab38e2" historyFrames="1000">
      <App />
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
