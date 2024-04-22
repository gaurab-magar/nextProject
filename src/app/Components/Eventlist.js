import React from 'react';
import { Eventitem } from './Eventitem';
const Eventlist = ({featuredEvents}) => {
  return (
    <div>
      <h2 className='font-semibold text-zinc-500 my-5'>All Events Page</h2>
      <div>
        {featuredEvents.map((event)=>(
          <Eventitem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
        ))}
      </div>
    </div>
  )
}

export default Eventlist