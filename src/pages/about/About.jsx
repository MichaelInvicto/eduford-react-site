import React from 'react'
import Navbar from '../../components/Navbar';
import about from '../../images/about.jpg';
import Footer from '../../containers/Footer';

const About = () => {
  return (
    <>
    <section className="sub-header">
      <Navbar />
      <h1>About Us</h1>
    </section>
    <section className="about-us">
    <div className="row">
      <div className="about-col">
        <h1>We are the world's best university!</h1>
        <p>I don't want to use lorem ipsum here because if I do that on atom which is the editor I use, <br />
         it will be so much and I'd have a hard time making it smaller!
       </p>
       <a href="#" className="hero-btn red-btn">EXPLORE NOW</a>
      </div>
      <div className="about-col">
        <img src={about} alt='' />

      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}

export default About