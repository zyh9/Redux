import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as bodyActions from './BodyRedux';

import LiModel from './Li';

class Body extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let {
            data,
            actions,
            view
        } = this.props;

        // main 会显示哪些todo的组件
        let listComponent = null;

        let filterViewData = Object.assign(data);

        // 决定 main（肚子） 会显示哪些todo的数据
        filterViewData = filterViewData.filter(e=>{
          //如果本次循环的e.checked为选中状态，那么用总长度 - 1

        //   if(e.checked) len--;

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
            actions
          }

          return <LiModel {...data} />

        });



        return (
            <ul className="todo-list">
                {listComponent}
            </ul>
        )
    }
}

export default connect(
    state=>({
        data: state.data,
        view: state.view
    }),
    dispatch=> ({actions: bindActionCreators(bodyActions,dispatch ) })
)(Body);
