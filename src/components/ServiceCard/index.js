import React from 'react'
import Accordion from '../Accordion/index.js'
import './index.less'

function ServiceCard (props) {
  const { data } = props
  return (
    <div>
        <Accordion data={data} key={data.productId} />
    </div>
  );
}
 
export default ServiceCard;