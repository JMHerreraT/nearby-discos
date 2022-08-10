import React from 'react'
import "./card.scss";

const Card = ({imageBg}) => {
  return (
    <div className={`card`} style={{backgroundImage: imageBg && `url(${imageBg})`}}>
      
    </div>
  )
}

export default Card