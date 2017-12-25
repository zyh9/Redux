import { createStore } from 'redux';
import $ from 'jquery';

// 定义一个 reducer
function counter(state={value:0}, action) {
    let {type,value} = action;
    switch (type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: state.value+value
            })
        default:
            return state;
    }
}

// 生成store
let store = createStore(counter);

// 添加事件
$(document).click(_=>{
    store.dispatch( { type: 'INCREMENT' , value: 5 } );
});

// 现在的state
let curt = store.getState();

// 监听数据变化
store.subscribe( _=>{

    let pre = curt;

    curt = store.getState();
    console.log(pre, curt, pre===curt);
} )
