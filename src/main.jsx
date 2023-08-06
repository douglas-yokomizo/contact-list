import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import contactReducer from './contactSlice';
import { GlobalStyle } from './GlobalStyle';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById('root')
);
