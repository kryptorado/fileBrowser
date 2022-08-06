import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

const root = ReactDOM.createRoot(document.getElementById('root'));
setChonkyDefaults({
  iconComponent: ChonkyIconFA,
  disableDragAndDrop: true,
  disableSelection: true,
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
