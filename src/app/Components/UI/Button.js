import Link from 'next/link';
import React from 'react';

const Button = ({link,children}) => {
  return (
    <Link href={link}>
      <div className='mt-1 px-5 py-2 rounded bg-slate-500 text-white hover:scale-105 transition-all ease-in-out'>
        {children}
      </div>
    </Link>
  )
}

export default Button;