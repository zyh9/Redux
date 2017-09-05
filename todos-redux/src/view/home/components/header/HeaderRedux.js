
const ALTER_INPUT_VALUE = 'ALTER_INPUT_VALUE/todos/header'

export function changeIptVal(value) {
    return function(dispatch, getState) {
        console.log(value, 'value');
        dispatch({type: ALTER_INPUT_VALUE, value});
    }
}

// reducer
export default function val(state= '', action) {
    let {type, value} = action;
    return type === ALTER_INPUT_VALUE ? value : state;
}
