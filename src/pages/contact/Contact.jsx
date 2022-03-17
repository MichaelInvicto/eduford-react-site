import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../containers/Footer'

const Contact = () => {
  return (
    <div>
        <section className="sub-header">
      <Navbar />
      <h1>Contact Us</h1>
    </section>

    {/* <section className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.56672529185!2d26.02459803145529!3d44.437926920467554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sng!4v1638343110896!5m2!1sen!2sng"
       width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section> */}

    {/* Find out how to make and style iFrames in react */}

    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div className="">
            <i className="fa fa-home"></i>
            <span>
              <h5>123 Parliament Palace</h5>
              <p>Bucharest, Romania</p>
            </span>
          </div>
          <div className="">
            <i className="fa fa-phone"></i>
            <span>
              <h5>+4012345678</h5>
              <p>Monday to Saturday, 10AM to 6PM</p>
            </span>
          </div>
          <div className="">
            <i className="fa fa-envelope-o"></i>
            <span>
              <h5>our@email.com</h5>
              <p>Feel free to mail us at anytime!</p>
            </span>
          </div>
        </div>
        <div className="contact-col">
          <form action="">
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter your amail address" required />
            <input type="text" placeholder="Enter your subject" required />
            <textarea rows="8" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>

    <Footer />
    </div>
  )
}

export default Contact