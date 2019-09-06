import React, { Component } from 'react';
import NavBar from '@/NavBar'

class Record extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <NavBar title="借用记录" history={this.props.history}/>
      </div>
    );
  };
} 
export default Record;