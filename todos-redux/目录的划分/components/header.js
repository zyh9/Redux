import React,{Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo, changeIptVal} from '../reduxes/actions';
class HeadModel extends Component{

  changeVal = (ev) => {
    this.props.changeIptVal(ev.target.value);
  }

  keyup = (ev) => {
    if(ev.keyCode === 13){
        this.props.addTodo(ev.target.value);
    }
  }

  render(){
        let {value} = this.props;
        return (
          <header className="header" >
              <h1>todos</h1>
              <input
                  className="new-todo"
                  placeholder="请输入内容"
                  value={value}
                  onChange={this.changeVal}
                  onKeyUp = {this.keyup}
              />
          </header>
    )
  }
}

export default connect(
    state=>({value: state.val}),
    dispatch => bindActionCreators({addTodo, changeIptVal}, dispatch)
)(HeadModel);
