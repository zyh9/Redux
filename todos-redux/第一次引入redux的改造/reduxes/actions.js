import types from './actionsTypes';

export function changeIptVal(value) {
    return function(dispatch, getState) {
        dispatch({type: types.INPUT_VALUE, value});
        // localStorage.setItem('data',JSON.stringify(getState()));
    }
}
// 发起action后， 数据更新是同步的
export function addTodo(value) {
    return function(dispatch, getState) {
        if(!value) return;
        dispatch({type: types.ADD_TODO, value});
        dispatch({type: types.INPUT_VALUE, value:''})
    }
}

// export function deleteTodo(id) {
//     return function(dispatch, getState) {
//         dispatch({type: types.DELETE_TODO});
//     }
// }

export const deleteTodo = ( id ) => (dispatch, getState) =>{
    dispatch({type: types.DELETE_TODO, id});
    // localStorage.setItem('data',JSON.stringify(getState()));
}

export const checkTodo = ( id ) => (dispatch, getState) => {
    dispatch({type: types.CHECK_TODO, id});
    // localStorage.setItem('data',JSON.stringify(getState()));
}

// export function checkTodo(id) {
//     return function(dispatch, getState) {
//         dispatch({type: types.CHECK_TODO})
//     }
// }

export const clearCompleted = ( ) => dispatch => {

    dispatch({type: types.CLEAR_COMPLETED})
}
export const alterText = (id, value ) => dispatch => {
    dispatch({type: types.ALTER_TEXT,id, value})
}


export const changeView = ( view ) =>{
    return {type: types.CHANGE_VIEW, view};
}
export const changeAll = ( checked ) =>{
    return {type: types.CHANGE_ALL, checked};
}
