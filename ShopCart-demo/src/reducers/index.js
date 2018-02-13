import { types } from '../actions/types';

const initialState = {
    itemInfo:[], // 组件需要的数据，都需要在这个初始化
}

function reducer(state = initialState, action){
    switch(action.type){
        case types.ADD_ITEM:
            return Object.assign({},state,{
                itemInfo: action.itemInfo
            })
        default:return state;
    }
}

export default reducer;
