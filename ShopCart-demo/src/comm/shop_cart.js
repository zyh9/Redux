import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions/actions';

class ShopCart extends Component {

    render() {
        console.log(this.props.itemInfo)
        let item = null;
        if(this.props.itemInfo.length){
            item = this.props.itemInfo.map((e,i)=>{
                return <div key={i}>{e.info}</div>
            })
        }else{
            item = <div key='0'>暂无商品哦！</div>
        }
        return (
            <div>{item}</div>
        )
    }
}

const mapStateToProps = (state, props) => {
    //state:reducer里面的状态,props:父组件的状态
    return {
        itemInfo:state.itemInfo
    }
}

const mapDispatchToProps = {
    addItem:Actions.addItem
}

ShopCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCart)

export default ShopCart;
