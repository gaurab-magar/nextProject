import React from 'react';
import { Eventitem } from './Eventitem';
const Eventlist = ({featuredEvents}) => {
  return (
      <section class="text-gray-600 body-font">
        <h2 className='font-semibold text-zinc-500 my-5'>All Events Page</h2>
        <div class="container px-2 py-24 mx-auto">
          <div class="flex gap-2">
                {featuredEvents.map((event)=>(
                <Eventitem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
              ))}
          </div>
        </div>
      </section>
  )
}

export default Eventlist