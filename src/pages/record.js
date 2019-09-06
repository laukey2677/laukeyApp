import React, { Component } from 'react';
import Head from '@/Head'
import { Button } from 'antd-mobile'

class Record extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Head title="借用记录"/>
        <Button size="small" type="primary" onClick={this.goback.bind(this)}>back to List Page</Button>
      </div>
    );
  };
  goback () {
    this.props.history.goBack();
  }
}
 
export default Record;