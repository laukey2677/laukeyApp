import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Head extends Component {
  render() { 
    return ( 
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >{this.props.title}</NavBar>
    );
  }
}
 
export default Head;