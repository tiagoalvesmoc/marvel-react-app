import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/app.css'

import Home from './pages/Home'


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

