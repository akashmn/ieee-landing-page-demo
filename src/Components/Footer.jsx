import React from 'react'

import {MdKeyboardArrowRight} from 'react-icons/md'
import {SlCallIn, SlLocationPin} from 'react-icons/sl'
import {FiMail} from 'react-icons/fi'

import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

import logoBlack from '../Assests/logo-black.png'


function Footer() {
  return (
    <div className='bg-blue-950 text-slate-400 font-serif text-sm w-full h-auto pb-5'>
        <div className='flex flex-row justify-between gap-10 mt-16 ml-28 mr-28' >
            <div className='mt-20'>
                <h3 className='underline'>MORE IN IEEE</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">About Us</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Calender</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Benifits</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">EXECOM</a>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <h3 className='underline'>HIGHLIGHTS</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Emergence 3.0</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Daksha</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Nirmana</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-20'>
                <img src={logoBlack} alt="" />
                <div>
                    <img className='w-24 ml-10' alt="" />
                </div>
                <div className='flex flex-row gap-5'>
                    <SlLocationPin />
                    <h3>College of Engineering Chengannur <br /> Chengannur P.O. Alapuzha District</h3>
                </div>
                <div className='flex flex-row gap-5 items-center' >
                    <SlCallIn />
                    <h3>+91-479-2454125</h3>
                </div >
                <div className='flex flex-row gap-5 items-center'>
                    <FiMail />
                    <h3>chairman_ieee@ceconline.edu</h3>
                </div>
            </div>
        </div>
        <div className='bg-slate-400 opacity-25 mt-10 w-[65%] h-[1px] m-auto justify-between'>

        </div>
        <div className='flex flex-col items-center justify-center mt-3 gap-3'>
        <h1>@ IEEE SB CEC</h1>
        <div className='flex flex-row items-center justify-center gap-6 text-slate-400'>
        <a className=' hover:text-white '  href="https://www.instagram.com/cec_chengannur/?hl=en"><BsInstagram size={22}/></a>
        <a className=' hover:text-white '  href="https://twitter.com"><BsTwitter size={22}/></a>
        <a className=' hover:text-white '  href="https://www.linkedin.com/school/college-of-engineering-chengannur/?originalSubdomain=in"><BsLinkedin size={22}/></a>
        </div>
        </div>
    </div>
  )
}

export default Footer