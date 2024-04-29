import React from 'react';
import Eventlist from '../Components/Eventlist';
import { getFeaturedEvents } from '../../../dummy-data';

const page = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    // <div>
    //   <h2 className='font-semibold text-zinc-500 my-5'>All Events Page</h2>
    //   <div>
    //     {data.map((item,idx)=>(
    //       <li key={idx}>
    //         <p>{item.title}</p>
    //       </li>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-grey-500 my-5">
        <Eventlist featuredEvents={featuredEvents} />
      </div>
  )
}

export default page