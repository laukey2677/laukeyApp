import React, { Component } from 'react';
import NavBar from '@/NavBar'
import NoticeBar from '@/NoticeBar'

class List extends Component {
  render() { 
    return ( 
      <div>
        <NavBar title="押金借还"/>
        <div style={{position: 'fixed', bottom: '0'}}>
          <NoticeBar></NoticeBar>
        </div>
      </div>
    );
  }
}
 
export default List;