import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class _NavBar extends Component {
  constructor (props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  render() { 
    return ( 
      <NavBar
        mode="light"
        icon={<Icon type="left" onClick={this.navigate} />}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >{this.props.title}</NavBar>
    );
  };
  navigate () {
    this.props.history.goBack();
  }
}
 
export default _NavBar;