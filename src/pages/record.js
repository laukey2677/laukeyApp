import React from 'react';
import NavBar from '@/NavBar'

function Record (props) {
  return (
    <div>
      <NavBar title="借用记录" history={props.history}/>
    </div>
  );
}; 
export default Record;