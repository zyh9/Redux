import {createStore, applyMiddleware, combineReducers, compose} from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers';


import thunk from 'redux-thunk';

// {val, data, view}


export const history = createHistory();
const routerML = routerMiddleware(history)


let rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
});

export default function configureStore(initState) {
    return createStore(rootReducer, initState,
        compose(applyMiddleware(thunk, routerML), window.devToolsExtension ? window.devToolsExtension() : f=>f) );
}
