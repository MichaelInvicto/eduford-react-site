import React from 'react'

const Location = (props) => {
  return (
    <div className="campus-col">
          <img src={props.imgUrl} alt="" />
          <div className="layer">
            <h3>{props.location}</h3>
          </div>
    </div>
  )
}

export default Location