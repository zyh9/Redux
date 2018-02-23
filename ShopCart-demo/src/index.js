import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 引入方法，重新封装reducer
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

// 引入localStorage作存储
// import storage from 'redux-persist/es/storage';

// 引入sessionStorage作存储
import storage from 'redux-persist/es/storage/session.js';

const config = {key: 'redux',storage}

let reducer = persistReducer(config, reducers)

let store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducer)

// 注册store监听器
// store.subscribe( _=>{
//   console.log(store.getState())
// })

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading = {null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
