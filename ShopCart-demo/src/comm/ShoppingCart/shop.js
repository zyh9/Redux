import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddActionCreator } from '../../store/add_action_creators';

class Shop extends Component {

    render() {
        console.log(this.props.itemInfo);
        let item = null;
        if(this.props.itemInfo.length){
            item = this.props.itemInfo.map((e,i)=>{
                return <div key={i}>{e.info}</div>
            });
        }else{
            item = <div key='0'>sorry,暂无商品哦！</div>
        }

        return (
            <div className="Commodity">
                {item}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemInfo:state.itemInfo,// reducer 里面的状态
        // num:ownProps.num// 父组件的状态
    }
};

const mapDispatchToProps = {
    addItem:AddActionCreator.addItem
};

Shop = connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);

export default Shop;
