import React from 'react'

const Courses = (props) => {
  return (
    <div className="course-col">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default Courses