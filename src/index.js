import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataState from './context/DataState';
import CountryState from './context/country/CountryState';

ReactDOM.render(
  <DataState>
    <CountryState>
      <App />
    </CountryState>
  </DataState>,
  document.getElementById('root')
);
