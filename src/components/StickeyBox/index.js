import React from 'react';
import NavBar from '../NavBar'
import './index.less'

function StickeyBox (props) {
  return (
    <div className="stickey-box">
      <NavBar title={props.title}/>
      <div className="stickey-content">{ props.children }</div>
    </div>
  )
}
 
export default StickeyBox;