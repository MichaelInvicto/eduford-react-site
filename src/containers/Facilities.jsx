import React from 'react';
import { FacilitiesData } from '../pages/course/course';
import Facility from '../components/Facility';

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>I don't want to use lorem ipsum here because if I do that on atom which is the editor I use,
       it will be so much and I'd have a hard time making it smaller!</p>

       <div className="row">
        {FacilitiesData.map(data => (
            <Facility
                key={data.id}
                imgUrl={data.imgUrl}
                title={data.title}
                body={data.body}
            />
        ))}   
       </div>
    </section>
  )
}

export default Facilities