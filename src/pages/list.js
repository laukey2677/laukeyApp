import React from 'react';
import StickeyBox from '@/StickeyBox'
import NoticeBar from '@/NoticeBar'
import ServiceCard from '@/ServiceCard'
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
          props.data.map((item) => (
            <ServiceCard data={item.product} key={item.productId} />
          ))
        }
      </div>
      <div style={{position: 'fixed', bottom: '0'}}>
        <NoticeBar/>
      </div>
    </StickeyBox>
  )
}
export default connect(stateToProps, null)(_List);