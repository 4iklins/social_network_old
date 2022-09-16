import './index.scss';
import store from './data/redux-store.js'
import React from 'react';
import ReactDOM from 'react-dom';
import BorApp from './BorApp';



  ReactDOM.render(
    <React.StrictMode>
      <BorApp/>
    </React.StrictMode>
  ,document.getElementById('root'));
window.store =store;
