import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/reducers';


// 这是是特别重要的 Provider
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
