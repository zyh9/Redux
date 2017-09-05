
function val(state='', action) {
    let {type, value} = action;
    return type === 'CHANGE_INPUT_VALUE' ? value : state;
}

function data(state=[], action) {

    let {type, value, id, checked } = action;
    let newState = state;
    switch (type) {
        case 'ADD_TODO':
            newState = [...state,
                {
                    id: Math.random(),
                    checked: false,
                    txt: value
                }
            ];
            break;
        case 'DELETE_TODO':
            newState = state.filter((todo,i)=>{
                return todo.id != id;
            });
            break;
        case 'CHECK_TODO':
            newState = state.map(e=>{
                if(e.id === id){
                    e.checked = !e.checked
                }
                return e;
            });
            break;
        case 'CHANGE_ALL':
            newState = state.map(e=>{

                e.checked = checked;
                return e;
            });
            break;
        case 'CLEAR_COMPLETED':

            newState = state.filter(e=>{
                return !e.checked;
            });
            break;
        case 'ALTER_TEXT':

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

    // localStorage.setItem('data',JSON.stringify(newState));
    return newState;

}

function view(state='#/all', action) {
    let {type, view} = action;

    return type === 'CHANGE_VIEW' ? view : state;
}

export {
    val, data, view
}
