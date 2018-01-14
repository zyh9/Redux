import { AddConstants } from '../constants/add_constants';

let AddActionCreator = {
    addItem: function (item){
        return (dispatch) => {
            return dispatch({type:AddConstants.ADD_ITEM_INFO,itemInfo:item});
        }
    }
};

export { AddActionCreator };
