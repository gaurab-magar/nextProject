import React from 'react';
import Image from 'next/image';
import Button from './UI/button';

export const Eventitem = (props) => {
    const {id,title,image,date,location} = props;
    const humanReadableDate = new Date(date).toLocaleString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(',','\n'); 
    const  eventLink = `/Events/${id}`;
  return (
      <div class="lg:w-1/4 md:w-1/2 p-2 w-full rounded-md border flex flex-col justify-between">
        <a class="block relative h-48 rounded overflow-hidden">
          <Image className="object-cover object-center w-full h-full block" src={`/${image}`} alt={`${title}-event picture`} height={150} width={200} />
        </a>
        <div class="mt-4">
          <h2 className='text-zinc-500 font-semibold text-xl'>{title}</h2>
          <h3 class="text-white tracking-widest title-font mb-1">{humanReadableDate}</h3>
          <h2 class="text-white title-font font-medium">{formattedAddress}</h2>
        </div>
        <Button link={eventLink}>
          Learn More
        </Button>
      </div>
  )
}