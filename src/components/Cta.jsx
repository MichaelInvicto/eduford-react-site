import React from 'react'
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section className="cta">
      <h1>Enroll For Our Various Online Courses <br /> Anywhere in the World</h1>
      <Link to='/contact' className="hero-btn">CONTACT US</Link>
    </section>
  )
}

export default Cta