import React,{Component} from 'react';
import FooterList from './FooterList';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeView} from './FooterRedux';
import {clearCompleted} from '../main/BodyRedux';


class FootModel extends Component{
  constructor(){
    super();
    this.state = {
      list:[
        {name:'全部',hash:'#/all'},
        {name:'未完成',hash:'#/active'},
        {name:'已完成',hash:'#/completed'},
      ]
    }
  }

  click = () => {
    this.props.clearCompleted();
  }

  render(){
    let {list} = this.state;

    let {view,data, changeView} = this.props;

    let len = data.length;

    data.forEach(todo=>{
        if(todo.checked) len--;
    })

    let listLi = null;

    if(list.length){
      listLi = list.map((e,i)=>{
        let data = {
          name:e.name,
          hash:e.hash,
          key:i,
          view,
          changeView
        }
        return <FooterList {...data} />
      });
    }

    return (
      <footer
      className="footer" >
          <span className="todo-count">
              <strong>{len}</strong>
              <span>条未选中</span>
          </span>
          <ul className="filters">
              {listLi}
          </ul>
          <button
              className="clear-completed"
              onClick = {this.click}
        >
            清除完成项
        </button>
      </footer>
    )
  }
}
export default connect(
    state=>({view: state.view, data: state.data}),
    dispatch=>(bindActionCreators({changeView, clearCompleted},dispatch))
)(FootModel);
