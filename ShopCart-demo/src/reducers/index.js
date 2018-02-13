import { types } from '../actions/types';

const initialState = {
    itemInfo:[] // 组件需要的数据，都需要在这个初始化
}

function reducer(state = initialState, action){
    let {type,itemInfo} = action;
    switch(type){
        case types.ADD_ITEM:
        alert(111)
            return Object.assign({},state,{
                itemInfo: itemInfo
            })
        default:return state;
    }
}

export default reducer;
