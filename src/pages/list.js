import React, { Component } from 'react';
import NavBar from '@/NavBar'
import StickeyBox from '@/StickeyBox'
import NoticeBar from '@/NoticeBar'
import { connect } from 'react-redux'

const stateToProps = (state) => {
  return {
    data: state.data
  }
}

function _List (props) {
  return (
    <StickeyBox title="押金借还">
      <div>
        {
          props.data.map((item, index) => (<p key={index}>item</p>))
        }
      </div>
      <div style={{position: 'fixed', bottom: '0'}}>
        <NoticeBar></NoticeBar>
      </div>
    </StickeyBox>
  )
}
export default connect(stateToProps, null)(_List);