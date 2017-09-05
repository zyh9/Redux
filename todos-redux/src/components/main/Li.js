import React,{Component} from "react";
import PropTypes from 'prop-types';
/*
  PropTypes是react提供的数据验证，专门用来验证props的数据类型是否为
  想要，如果不是会在控制台输出错误信息，方面快速定位错误
// */
class LiModel extends Component{
  constructor(props){

    super(props);

    this.state = {
      db:false,
      txt:''
    }
  }

  changeChecked = () => {
    let {checkTodo} = this.props.actions;
    checkTodo(this.props.id);
  }

  remove = () => {
        let {deleteTodo} = this.props.actions;
        deleteTodo(this.props.id);
  }

  dbclick = () => {
    this.setState({
      db:true,
      txt:this.props.txt
    },()=>{
      this.db.focus();
    });
  }
    // input 组件受控的值
  change = () => {
    this.setState({
      txt:this.db.value
    });
  }

  blur = () => {
    let {id,checked} = this.props;
    this.setState({
      db:false
    });
    // 发起修改todo的value的action
    let {alterText} = this.props.actions;
    alterText(id, this.state.txt)

  }

  keyup = (ev) => {
    if(ev.keyCode === 13){
      this.blur();
    }
    if(ev.keyCode === 27){
      this.setState({
        txt:this.props.txt,
        db:false
      });

    }
  }


  render(){
    let {txt, checked} = this.props;
    let sClass = checked?'completed':'';

    if(this.state.db){
      sClass += ' editing';
    }

    return (
      <li className={sClass}>
          <div className="view">
              <input
                  className="toggle"
                  type="checkbox"
                  onChange = {this.changeChecked}
                  checked={checked}
              />
              <label
                  onDoubleClick = {this.dbclick}
              >{txt}</label>
              <button
                  className="destroy"
                  onClick = {this.remove}
              ></button>
          </div>
          <input
              ref = {(elem) => {this.db = elem}}
              className ="edit"
              onBlur = {this.blur}
              value = {this.state.txt}
              onChange = {this.change}
              onKeyUp = {this.keyup}
          />
      </li>
    )
  }
}

export default LiModel;
