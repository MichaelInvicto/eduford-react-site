import React from 'react'
import Header from '../../containers/Header';
import Courses from '../../containers/Courses';
import Campus from '../../containers/Campus';
import Facilities from '../../containers/Facilities';
import Testimonials from '../../containers/Testimonials';
import Footer from '../../containers/Footer';
import Cta from '../../components/Cta';

const Home = () => {
  return ( 
    <div>
      <Header />
      <Courses />
      <Campus />
      <Facilities />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home 