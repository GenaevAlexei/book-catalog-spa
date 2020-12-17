import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as firebase from 'firebase';
import {App} from './App';
import './index.css';
import {rootReducer} from './reduxApp/rootReducer';

const firebaseConfig = {
    apiKey: "AIzaSyATMJ6bMFCbQ6xtS_iqlMzqh7m4KibMZiw",
    authDomain: "book-catalog-spa.firebaseapp.com",
    databaseURL: "https://book-catalog-spa-default-rtdb.firebaseio.com",
    projectId: "book-catalog-spa",
    storageBucket: "book-catalog-spa.appspot.com",
    messagingSenderId: "878044568330",
    appId: "1:878044568330:web:4851aa5a655179d90df8f3"
};

firebase.default.initializeApp(firebaseConfig)

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
