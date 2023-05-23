import React from 'react'
import img1 from '../Assests/ideathon.jpg'
import img2 from '../Assests/arduino.jpg'
import img3 from '../Assests/voltare.jpg'

function Events() {
  return (
    <div className='ml-14 mt-20 flex flex-col justify-center p-3'>
        <h3 className='text-4xl font-serif underline ml-[600px]'>OUR EVENTS</h3>
        <div className='mt-20 flex flex-row items-center justify-center gap-10'>
            <div className='border-2 w-64 h-64 flex flex-col items-center gap-2'>
                <img className='w-64 h-2/3' src={img1} alt="" />
                <h3 className='h-1/3 font-serif font-medium text-xl'>IDEATHON</h3>
            </div>
            <div className='border-2 w-64 h-64 flex flex-col items-center gap-2'>
                <img className='w-64 h-2/3' src={img1} alt="" />
                <h3 className='h-1/3 font-serif font-medium text-xl'>IDEATHON</h3>
            </div>
            <div className='border-2 w-64 h-64 flex flex-col items-center gap-2'>
                <img className='w-64 h-2/3' src={img1} alt="" />
                <h3 className='h-1/3 font-serif font-medium text-xl'>IDEATHON</h3>
            </div>
            <div className='border-2 w-64 h-64 flex flex-col items-center gap-2'>
                <img className='w-64 h-2/3' src={img1} alt="" />
                <h3 className='h-1/3 font-serif font-medium text-xl'>IDEATHON</h3>
            </div>
            <div className='border-2 w-64 h-64 flex flex-col items-center gap-2'>
                <img className='w-64 h-2/3' src={img1} alt="" />
                <h3 className='h-1/3 font-serif font-medium text-xl'>IDEATHON</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Events