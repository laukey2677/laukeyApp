import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './index.less';

class _NoticeBar extends Component {
  render() { 
    return (
      <div className="navbar-wrap">
        <div>
          您还未缴纳保证金，暂时无法使用
        </div>
        <Button size="small" inline="true">保证金充值</Button>
      </div>
    );
  }
}
 
export default _NoticeBar;