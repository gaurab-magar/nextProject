import React from 'react';
import {data} from '../../../dummy-data';

const page = () => {
  return (
    <div>
      <h2 className='font-semibold text-zinc-500 my-5'>All Events Page</h2>
      <div>
        {data.map((item,idx)=>(
          <li key={idx}>
            <p>{item.title}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default page