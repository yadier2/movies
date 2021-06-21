import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import AppRoute from './Routes/AppRoute'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <AppRoute/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


