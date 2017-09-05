import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as reducers from './reducers';

import thunk from 'redux-thunk';

// {val, data, view}

let rootReducer = combineReducers({...reducers});

export default function configureStore(initState) {
    return createStore(rootReducer, initState, applyMiddleware(thunk));
}
