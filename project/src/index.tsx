import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import OFFERS from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App offers = {OFFERS} />
  </React.StrictMode>,
  document.getElementById('root'));
