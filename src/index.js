import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';
import {AppProvider} from './context.jsx'
import './style.css'

ReactDOM.render(
    <AppProvider>
      <App />
    </AppProvider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
