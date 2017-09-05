import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk';

// {val, data, view}

let rootReducer = combineReducers({...reducers});

export default function configureStore(initState) {
    return createStore(rootReducer, initState,
        compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f=>f) );
}
