import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <nav>
        <Link to='/contact'>
            <div className='the-cursor'>
                <img src={logo} alt="" />
            </div>
        </Link>
        <div className="nav-links" id="navLinks" style={ nav ? {right: "0"} : {right: "-250px"} }>
          <i className="fa fa-times" onClick={() => { setNav(false) }}></i>
          <ul> 
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/course">COURSE</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={() => { setNav(true) }}></i>
      </nav>
  )
}

export default Navbar