import React from 'react';
import Locations from '../pages/home/campus.js';
import Location from '../components/Location';

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>I don't want to use lorem ipsum here for obvious reasons.</p>

      <div className="row">
        {Locations.map(data => (
            <Location 
                key={data.id}
                imgUrl={data.imgUrl}
                location={data.location}
            />
        ))}
      </div>
    </section>
  )
}

export default Campus