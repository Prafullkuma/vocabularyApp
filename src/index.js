import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore'
import './style.css'

const store=configureStore

console.log("Result",store.getState())

store.subscribe(()=>{
   console.log("after update",store.getState())
})

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

