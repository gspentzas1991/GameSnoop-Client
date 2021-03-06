import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //remove the React.StricMode to remove double loading of index
  //only happens in dev mode
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
