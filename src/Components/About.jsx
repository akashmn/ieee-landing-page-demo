import React from 'react'
import cs from '../Assests/cs-logo.png'
import ias from '../Assests/ias-logo.png'
import ras from '../Assests/ras-logo.png'
import pes from '../Assests/pes-logo.png'
import sight from '../Assests/sight-logo.png'
import wie from '../Assests/wie-logo.png'



function About() {
  return (
    <div id='about'>
        <div className='flex flex-row items-center mt-28 gap-10 border-2 border-blue-950 p-8 ml-10 mr-10'>
            <div className='flex flex-col items-center justify-center ml-10 gap-5'>
                <h3 className='text-4xl font-mono'>What is IEEE?</h3>
                <p className='font-mono'>
                    IEEE is a global association and organization of professionals working toward the development, implementation and maintenance of technology-centered products and services.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h3 className='text-4xl font-mono'>Vision</h3>
                <p className='font-mono'>
                IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h3 className='text-4xl font-mono'>Mission</h3>
                <p className='font-mono'>
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
                </p>
            </div>
        </div>
        <div className='flex flex-row gap-8 items-center justify-center'>
            <img className='w-48' src={cs} alt="" />
            <img className='w-48' src={ias} alt="" />
            <img className='w-48' src={ras} alt="" />
            <img className='w-48' src={pes} alt="" />
            <img className='w-48' src={wie} alt="" />
            <img className='w-48' src={sight} alt="" />
        </div>
    </div>
  )
}

export default About