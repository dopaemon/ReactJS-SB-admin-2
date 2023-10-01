import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// SBAdmin 2
import './assets/vendor/jquery/jquery.min.js';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendor/jquery-easing/jquery.easing.min.js';
import './assets/scss/sb-admin-2.scss';
// import './assets/js/sb-admin-2.min.js';

window.React = React;
// window.$ = window.jQuery = require('jquery');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
