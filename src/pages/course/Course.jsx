import React from 'react';
import Navbar from '../../components/Navbar';
import Courses from '../../containers/Courses';
import Facilities from '../../containers/Facilities';
import Footer from '../../containers/Footer';

const Course = () => {
  return (
    <div>
        <section class="sub-header">
            <Navbar />
            <h1>Our Courses</h1>
        </section>
        <Courses />
        <Facilities />
        <Footer />
    </div>
  )
}

export default Course