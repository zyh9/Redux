import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions/actions';

class ShopCart extends Component {

    render() {
        let item = null;
        console.log(this.props.itemList)
        if(this.props.itemList.length){
            item = this.props.itemList.map((e,i)=>{
                return <li key={i}>
                    <img src={e.img} alt="" />
                    <span>商品名称：{e.info}</span>
                    <b>价格：{e.price}</b>
                </li>
            })
        }else{
            item = <li key='0'>暂无商品哦</li>
        }
        return (
            <ul className="list">{item}</ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //state:reducer里面的状态,ownProps:父组件的状态
    return {
        itemList:state.itemList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        addItem:Actions.addItem
    }   
}

ShopCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCart)

export default ShopCart;
