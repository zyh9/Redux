import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 引入方法，重新封装reducer
// import {persistStore, persistCombineReducers} from 'redux-persist';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import storage from 'redux-persist/es/storage';

// const config = {key: 'redux',storage};

// function configureStore(){
//   let reducer = persistCombineReducers(config, reducers);
//   let store = createStore(reducer, applyMiddleware(thunk));
//   let persistor = persistStore(store);
//   return { persistor, store }
// }

// const { persistor, store } = configureStore()

// 创建 store
let store = createStore(
  reducers,
  applyMiddleware(thunk),
  // redux启用调试工具
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
