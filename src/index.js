import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataState from './context/DataState';
ReactDOM.render(
  <DataState>
    <App />
  </DataState>,
  document.getElementById('root')
);
