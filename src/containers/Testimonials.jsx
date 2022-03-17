import React from 'react';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials">
    <h1>What Our Students Say</h1>
    <p>I don't want to use lorem ipsum here because if I do that on atom which is the editor I use,
     it will be so much and I'd have a hard time making it smaller!
   </p>

   <div className="row">
     <div className="testimonial-col">
       <img src={user1} alt='' />
       <div className="">
         <p>I don't want to use lorem ipsum here because if I do that on atom which is the editor I use,
          it will be so much and I'd have a hard time making it smaller!
        </p>
        <h3>Christine Berkley</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
       </div>
     </div>
     <div className="testimonial-col">
       <img src={user2} alt='' />
       <div className="">
         <p>I don't want to use lorem ipsum here because if I do that on atom which is the editor I use,
          it will be so much and I'd have a hard time making it smaller!
        </p>
        <h3>David Byer</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
       </div>
     </div>
   </div>
  </section>
  )
}

export default Testimonials