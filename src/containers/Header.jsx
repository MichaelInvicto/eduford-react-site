import React from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <section className='header'>
        <Navbar />
      <div className="text-box">
        <h1>World's Biggest University</h1>
        <p>This is the best university in the world and many of our students win awards, <br />and many of our
          alumni have been the best in the world in their fields!
        </p>
        <a href="#" className="hero-btn">Visit us to know more</a>
      </div>
    </section>
  )
}

export default Header