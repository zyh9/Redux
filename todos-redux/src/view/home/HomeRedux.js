import {combineReducers} from 'redux';

import view from './components/footer/FooterRedux';
import val from './components/header/HeaderRedux';
import data from './components/main/BodyRedux';

export default combineReducers({
    view, val, data
});
