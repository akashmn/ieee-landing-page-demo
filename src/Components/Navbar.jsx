import React from 'react'
import logoBlack from '../Assests/logo-black.png'


function Navbar() {
  return (
    <div className='bg-[#00578A] shadow-md w-full h-auto fixed top-0 left-0'>
       <nav className='w-[93%] h-24 flex flex-row items-center justify-between'>
            <div className='w-36 h-[48px] mt-5 ml-10'>
                <img src={logoBlack} alt="" />
            </div>
            <div className='flex flex-row gap-10 text-slate-300 text-lg'>
                <a className='hover:underline hover:text-white ' href="">Home</a>
                <a className='hover:underline hover:text-white ' href="">About</a>
                <a className='hover:underline hover:text-white ' href="">Events</a>
                <a className='hover:underline hover:text-white ' href="">Contact</a>
                <a className='hover:underline hover:text-white ' href="">IEEE</a>
            </div>
       </nav>
    </div>
  )
}

export default Navbar