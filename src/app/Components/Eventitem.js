import React from 'react';
import Image from 'next/image';


export const Eventitem = (props) => {
    const {id,title,image,date,location} = props;
    const humanReadableDate = new Date(date).toLocaleString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(',','\n'); 
  return (
    <div className='border'>
        <h3>{title}</h3>
        <Image src={`/${image}`} alt={`${title}-event picture`} height={150} width={200} />
        <p><strong>When:</strong> {humanReadableDate}</p>
        <p><strong>Where:</strong>{formattedAddress}</p>
        <hr/>
    </div>
  )
}