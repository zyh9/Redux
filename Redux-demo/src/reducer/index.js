let initState = {
    A: [],
    B: []
};

export default function counter(state=initState, action) {
    let {type, id, panelName} = action;

    switch (type) {
        case 'ADD_COUNTER':
            if(panelName==='A'){
                return Object.assign({}, state, {A: [...state.A, {
                    id: new Date().getTime(),
                    value: 0
                }]
                }) ;
            }else{
                return Object.assign({}, state, {B: [...state.B, {
                    id: new Date().getTime(),
                    value: 0
                }]
                })
            }

        case 'INCREMENT':
            return Object.assign({},{
                A: state.A.map( elt =>{
                    if(elt.id === id){
                        elt.value++;
                    }
                    return elt;
                } ),
                B: state.B.map( elt =>{
                    if(elt.id === id){
                        elt.value++;
                    }
                    return elt;
                } ),
            })

        case 'DECREMENT':
            return Object.assign({},{
                A: state.A.map( elt =>{
                    if(elt.id === id){
                        elt.value--;
                    }
                    return elt;
                } ),
                B: state.B.map( elt =>{
                    if(elt.id === id){
                        elt.value--;
                    }
                    return elt;
                } ),
            })

        default:
            return state;
    }
}
