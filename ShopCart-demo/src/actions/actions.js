import { types } from './types';

let Actions = {
    addItem(item){
        // return (dispatch) => {
        //     return dispatch({type:types.ADD_ITEM,itemInfo:item})
        // }
        return {type:types.ADD_ITEM,itemInfo:item}
    }
}

export { Actions };
