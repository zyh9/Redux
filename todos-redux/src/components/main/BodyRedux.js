import {changeIptVal} from '../header/HeaderRedux';

// 根据数据结构决定什么样的action creators 和 reducer写在一起

const ADD_TODO = 'ADD_TODO/todos/body';
const DELETE_TODO = 'DELETE_TODO/todos/body';
const CHECK_TODO = 'CHECK_TODO/todos/body';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED/todos/body';
const ALTER_TEXT = 'ADD_TODO/todos/body';
const CHANGE_ALL = 'CHANGE_ALL/todos/body';



// 发起action后， 数据更新是同步的
export function addTodo(value) {
    return function(dispatch, getState) {
        if(!value) return;
        dispatch({type: ADD_TODO, value});
        dispatch(changeIptVal( '' ))
    }
}

export const deleteTodo = ( id ) => (dispatch, getState) =>{
    dispatch({type: DELETE_TODO, id});

}

export const checkTodo = ( id ) => (dispatch, getState) => {
    dispatch({type: CHECK_TODO, id});

}

export const clearCompleted = ( ) => dispatch => {

    dispatch({type: CLEAR_COMPLETED})
}
export const alterText = (id, value ) => dispatch => {
    dispatch({type: ALTER_TEXT,id, value})
}

export const changeAll = ( checked ) =>{
    return {type: CHANGE_ALL, checked};
}

export default function data(state=[], action) {

    let {type, value, id, checked } = action;
    let newState = state;
    switch (type) {
        case ADD_TODO:
            newState = [...state,
                {
                    id: Math.random(),
                    checked: false,
                    txt: value
                }
            ];
            break;
        case DELETE_TODO:
            newState = state.filter((todo,i)=>{
                return todo.id != id;
            });
            break;
        case CHECK_TODO:
            newState = state.map(e=>{
                if(e.id === id){
                    e.checked = !e.checked
                }
                return e;
            });
            break;
        case CHANGE_ALL:
            newState = state.map(e=>{

                e.checked = checked;
                return e;
            });
            break;
        case CLEAR_COMPLETED:

            newState = state.filter(e=>{
                return !e.checked;
            });
            break;
        case ALTER_TEXT:

            newState = state.map(e=>{
                if(e.id===id){
                    e.txt = value;
                }
                return e;
            });
            break;
        default:
            newState = state;
    }

    return newState;

}
