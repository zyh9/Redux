import { types } from '../actions/types';

const initialState = {
    itemList:[] // 组件需要的数据，都需要在这个初始化
}

function reducer(state = initialState, action){
    let {type,itemInfo} = action;
    switch(type){
        case types.ADD_ITEM:
            return Object.assign({},state,{
                itemList: state.itemList.concat(itemInfo)
            })
        default:return state;
    }
}

export default reducer;
