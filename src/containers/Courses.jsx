import React from 'react';
import Course from '../components/Course';
import { CourseData } from '../pages/course/course';

const Courses = () => {
  return (
    <section className="course">
    <h1>Courses We Offer</h1>
    <p>I don't want to use lorem ipsum here for obvious reasons.</p>

    <div className="row">
    {CourseData.map(data => (
        <Course 
          key={data.id}
          title={data.title}
          body={data.body}
        />
      ))}
    </div>
  </section>
  )
}

export default Courses