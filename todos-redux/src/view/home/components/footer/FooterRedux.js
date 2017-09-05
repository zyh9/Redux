// actionsTypes
const CHANGE_VIEW = 'CHANGE_VIEW/todos/footer';

// action creator

export const changeView = ( view ) =>{
    return {type: CHANGE_VIEW, view};
}

// reducers

export default function view(state='#/all', action) {
    let {type, view} = action;

    return type === CHANGE_VIEW ? view : state;
}
