import React from 'react';


//imgUrl = price
function Service(props) {
  const {title, description, imgUrl} = props
  return (
    <>
      <div className="service-container">
        <div className="service-title">{title}</div>
        <div className="service-description">{description}</div>
        <div className="service-price ">{`$${imgUrl}`}</div>
      </div>
    
    </>
  )
}

export default Service