import React from 'react';
import './index.less';

function Accordion (props) {
  console.log(props);
  const { imgUrl, addList, name, number } = props.data;
  console.log(imgUrl);
  return (
    <div className="accordion">
      <div className="accordion-header">
        <div className="product-header-wrap">
          <div>
            <img className="product-icon" src={imgUrl} alt="imgUrl"/>
          </div>
          <div className="product-desc">
            <p>dfdsfsdfsd</p>
            <p>dfdsfsdfsd</p>
          </div>
        </div>
        <div>
        <span className="iconfont iconshangsanjiaoxing"></span>
        </div>
      </div>
      <div className="accordion-content">
      </div>
    </div>
  )
}

export default Accordion;