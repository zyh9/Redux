import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { AddConstants } from '../constants/add_constants';

const initialState = {
    itemInfo:[],// 你的组件需要的数据，都需要在这个初始化
};

function reducer(state = initialState, action){
    switch(action.type){
        case AddConstants.ADD_ITEM_INFO:
            return Object.assign({},state,{
                itemInfo: action.itemInfo
            });
    }

    return state;
}

// 创建 store
let store = createStore(
    reducer,// reducer
    applyMiddleware(thunk)// 设置中间件
);

export default store;
