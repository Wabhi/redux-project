import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from './stores/counterStore';
import authStore from './stores/authStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={authStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
