import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddActionCreator } from '../../store/add_action_creators';
import { data } from '../../json/item_info';

import {
   Link
} from 'react-router-dom';

class Commodity extends Component {

    handleAddClick = (ev) =>{
        let info = null;
        data.forEach((e) =>{
            if(e.id === Number(ev.target.id)){
                info = e;
            }
        });
        var arr = this.props.itemInfo;
        arr.push(info);
        this.props.addItem(arr);
    };

    render() {
        let item = null;
        item = data.map((e,i) => {
            return <div className="item" key={i}>
                <img src={e.img} />
                <span className="item_text">{e.info}</span>
                <p className="item_info">
                    <span className="item_price">{'￥'+e.price}</span>
                    <span className="item_people">{e.people+'人付款'}</span>
                </p>
                <p className="item_btn">
                    <span
                        className="add"
                        id={e.id}
                        onClick={this.handleAddClick}
                    >加入购物车</span>
                    <span className="find">找相似</span>
                </p>
            </div>
        });
        return (
            <div className="Commodity">
                <div className="nav">
                    <span><Link to="/">首页</Link></span>
                    <span><Link to="/shop">购物车</Link></span>
                </div>
                { item }
            </div>
        );
    }
}

// 用来让你的组件能够获得 reducer 里面的 state
const mapStateToProps = (state, ownProps) => {
    return {
        itemInfo:state.itemInfo,// reducer 里面的状态
        // num:ownProps.num// 父组件的状态
    }
};

// 用来让你的组件获得 actionCreater(发起 action 的函数)
const mapDispatchToProps = {
    addItem:AddActionCreator.addItem
};

// react-redux 的方法，可以使你的组件获取到 state 和 actionCreater，记住一定要写 Provider( index.js 中的那个）
Commodity = connect(
    mapStateToProps,
    mapDispatchToProps
)(Commodity);


export default Commodity;
