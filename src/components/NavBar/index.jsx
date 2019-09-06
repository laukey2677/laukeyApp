import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.less';

class _NavBar extends Component {
  constructor (props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  render() { 
    return ( 
      <div className="nav-bar">
        <NavBar
        mode="light"
        icon={<Icon type="left" onClick={this.navigate} />}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >{this.props.title}</NavBar>
      </div>
    );
  };
  navigate () {
    this.props.history.goBack();
  }
}
 
export default _NavBar;