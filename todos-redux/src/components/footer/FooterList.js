import React,{Component} from "react";
class FooterList extends Component{

  //通过点击切换视图
  changeView = () => {
    //   active 未完成
    this.props.changeView(this.props.hash);
  }

  render(){

    let {hash, view, name} = this.props;

    let child = null;
    return (
      <li>
          <a
              href={hash}
              className={(view === hash)?'selected':''}
              onClick = {this.changeView}
          >{name}</a>
          {child}
      </li>
    )
  }
};
export default FooterList;
