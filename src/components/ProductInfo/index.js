import React from 'react';
import './index.less';

function ProductInfo (props) {
  const { imgUrl, name, number} = props.info
  return (
    <div className="prodectInfo">
      <div>
        <img src={imgUrl}></img>
      </div>
      <div>
        <div>{name}</div>
        <div>库存&nbsp;{number}</div>
      </div>
    </div> 
  )
}

export default ProductInfo 

