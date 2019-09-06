import React from 'react';
import NavBar from '../NavBar'
import './index.less'

function Container (props) {
  return ( 
    <div className="container">
      <NavBar/>
      <div className="container-content">{ props.children }</div>
    </div>
  );
}

export default Container;