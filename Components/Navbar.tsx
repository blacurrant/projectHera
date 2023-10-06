import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=' w-full h-[10vh] px-10 text-gray-400 bg-gray-900 flex justify-between items-center drop-shadow-md'>
        <h1 className='font-bold text-2xl uppercase'>houseofcode</h1>
        <div className='flex gap-10 uppercase'>
            <Link href='/Hero' className='font-semibold tracking-widest hover:border-b hover:border-gray-400' > Home </Link>
            <Link href='/Chatgpt' className='font-semibold tracking-widest hover:border-b hover:border-gray-400' > Chatgpt </Link>
            <Link href='/Unsplash' className='font-semibold tracking-widest hover:border-b hover:border-gray-400' > Unsplash </Link>           
        </div>
    </div>
  )
}

export default Navbar