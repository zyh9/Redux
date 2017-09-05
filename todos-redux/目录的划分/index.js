import React,{Component} from "react";
import ReactDOM from "react-dom";
import './common/style/index.css';

import HeadModel from './components/header';

import LiModel from './components/Li';

import FootModel from './components/footer';

import configureStore from './reduxes/configureStore';

import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './reduxes/actions';

/*
  ref:方便我们在当前组件下快速获取某个组件或者元素。

  读：
    console.log(this.head)

  写:
    <header ref = {(elem)=>{this.head = elem}}></header>

  注意：
      如果没在当前组件上设置ref（跨组件），那么获取的值为undefined。


      生命周期：
          在react中从挂载组件到卸载组件的过程中在特定的情况下
          定义了一些回调函数，当某个需求需要在某个阶段执行的时候
          把需求内容写在预留的钩子函数中即可。

          主要有挂载阶段 ->数据更新阶段->卸载阶段
*/

const store = configureStore(getItem('data'));
console.log(getItem('data') , 'getData');

store.subscribe(()=>{
    localStorage.setItem('data',JSON.stringify(store.getState()));
});

class App extends Component{

  //全选
  allChange = (ev) => {
    let {checked} = ev.target;
    // 发起action
    this.props.actions.changeAll(checked)

  }


  render(){
    let {data, view, actions: {
        changeIptVal, addTodo, checkTodo, deleteTodo, changeView, clearCompleted, alterText
    }} = this.props;
    // main 会显示哪些todo的组件
    let listComponent = null;
    // 是否全选
    let all = false;

    //就是全选的结构
    let changeAllComp = null;
    let footer = null;


    let filterViewData = Object.assign(data);
    let len = data.length;

    // 决定 main（肚子） 会显示哪些todo的数据
    filterViewData = filterViewData.filter(e=>{
      //如果本次循环的e.checked为选中状态，那么用总长度 - 1
      if(e.checked) len--;
      switch (view) {
        case '#/active':
          return !e.checked;
          break;
        case '#/completed':
          return e.checked;
          break;
        default:
          return true;
          break;
      }
    });

    // 把数据变成组件
    listComponent = filterViewData.map((e,i)=>{
      let data = {
        key:e.id,
        id:e.id,
        txt:e.txt,
        checked:e.checked,
        PchangeChecked:this.PchangeChecked,
        remove:this.remove,
        changeText:this.changeText,
        deleteTodo,
        checkTodo,
        alterText
      }

      return <LiModel {...data} />

    });

    // 决定 全部选择按钮 和 footer 会不会显示
    if(data.length){
      all = data.every(e => e.checked);

      changeAllComp = (
        <input
            className="toggle-all"
            type="checkbox"
            checked = {all}
            onChange = {this.allChange}
          ref = {(elem) => {this.all = elem}}
        />
      )

      //放置footer的地方
      let footerData = {
        changeView,
        view,
        num: len,
        clearCompleted

      }
      footer = (<FootModel {...footerData}/>);

      // console.log(data);

      /*
        只要数据发生变化，那么就会进render，进了render就会把最新数据存到本地。
       */

    //  localStorage.setItem('data',JSON.stringify(data));


    }



    return (
      <div>
          <HeadModel />
          <section className="main" ref = {(elem)=>{this.main = elem}}>
              {changeAllComp}
              <ul className="todo-list">
                  {listComponent}
              </ul>
          </section>
          {footer}
      </div>
    )
  }
}

//获取本地的数据，如果本地有数据那么返回本地数据，否则返回[{checked:false,txt:'呵呵',id:1}]
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{checked:false,txt:'呵呵',id:1}];
}

App = connect(
    state => (state),
    dispatch => ({
        actions: bindActionCreators( actions , dispatch)
    })
)(App)
//只会进一次
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
);


if (module.hot) {
  module.hot.accept();
}
