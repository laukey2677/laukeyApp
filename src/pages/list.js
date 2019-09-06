import React, { Component } from 'react';
import Head from '@/Head'
import { Button } from 'antd-mobile'
import { CSSTransition } from 'react-transition-group'

class List extends Component {
  state = { 
    switch: true
   }
  render() { 
    return ( 
      <div>
        <Head title="押金借还"/>
        <Button size="small" type="primary" onClick={() => {this.changeSwitch()}}>show</Button>
        <CSSTransition
          in={this.state.switch}
          timeout={200}
          classNames="toggle"
        >
          <h1 style={{position: 'absolute'}}>show tip</h1>
        </CSSTransition>
        <Button size="small" type="primary" onClick={this.gotoNext.bind(this)}>next Page</Button>
      </div>
    );
  }
  changeSwitch () {
    this.setState({
      switch: this.state.switch ? false : true
    });
  };
  gotoNext () {
    this.props.history.push('/record');
  }
}
 
export default List;