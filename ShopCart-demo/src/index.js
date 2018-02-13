import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 引入方法，重新封装reducer
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/es/storage';

const appReducer = combineReducers({
  reducers
})
const config = {key: 'redux',storage};

const persistedReducer = persistReducer(config, appReducer);

// 创建 store
let store = compose(
  applyMiddleware(thunk),
  // redux启用调试工具
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persistedReducer)

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root')
)
registerServiceWorker();
