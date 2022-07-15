import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
