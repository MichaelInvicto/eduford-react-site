import React from 'react';

const Facility = (props) => {
  return (
    <div className="facilities-col">
        <img src={props.imgUrl} alt='' />
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default Facility